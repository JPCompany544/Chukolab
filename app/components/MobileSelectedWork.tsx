"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";

export interface MobileProjectData {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  mobileImage?: string;
  href?: string;
  totalCount: string;
}

interface MobileSelectedWorkProps {
  projects: MobileProjectData[];
}

export function MobileSelectedWork({ projects }: MobileSelectedWorkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = projects.length;

  // Interaction State Machine
  // Modes: "OUTSIDE" | "ACTIVE"
  const [isImmersive, setIsImmersive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<"down" | "up">("down");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Subtle visual nudge on fresh entry into Project 01
  const [showNudge, setShowNudge] = useState(false);
  const hasNudgedSessionRef = useRef(false);

  // Authoritative refs for synchronous event guarding
  const isImmersiveRef = useRef(false);
  const activeIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const ignoreScrollUntilRef = useRef(0);

  // Lock and unlock native document scrolling
  const lockDocument = useCallback(() => {
    if (isImmersiveRef.current) return;
    isImmersiveRef.current = true;
    setIsImmersive(true);

    // Broadcast to navbar
    document.documentElement.setAttribute("data-selected-work-active", "true");
    window.dispatchEvent(new Event("selectedworkchange"));

    // Prevent body bounce/overscroll and lock document
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }, []);

  const unlockDocument = useCallback(() => {
    isImmersiveRef.current = false;
    setIsImmersive(false);
    isTransitioningRef.current = false;
    setIsTransitioning(false);

    document.documentElement.setAttribute("data-selected-work-active", "false");
    window.dispatchEvent(new Event("selectedworkchange"));

    // Restore body scroll completely
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    // Reset nudge state so next fresh session can trigger once
    hasNudgedSessionRef.current = false;
    setShowNudge(false);
  }, []);

  // Sync state to ref
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Clean up body scroll lock if unmounted
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.removeAttribute("data-selected-work-active");
    };
  }, []);

  // Autonomous gesture transition engine
  const triggerTransition = useCallback(
    (direction: "next" | "prev") => {
      if (isTransitioningRef.current) return;

      const current = activeIndexRef.current;

      if (direction === "next") {
        if (current < total - 1) {
          isTransitioningRef.current = true;
          setIsTransitioning(true);
          setTransitionDirection("down");
          setPrevIndex(current);
          setActiveIndex(current + 1);

          setTimeout(() => {
            isTransitioningRef.current = false;
            setIsTransitioning(false);
          }, 650);
        } else {
          // At final project: exit downward into Why Chukolab
          unlockDocument();
          ignoreScrollUntilRef.current = Date.now() + 800;

          const nextSection = document.getElementById("why-chukolab");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          } else if (containerRef.current) {
            const targetY = containerRef.current.offsetTop + containerRef.current.offsetHeight;
            window.scrollTo({ top: targetY, behavior: "smooth" });
          }
        }
      } else if (direction === "prev") {
        if (current > 0) {
          isTransitioningRef.current = true;
          setIsTransitioning(true);
          setTransitionDirection("up");
          setPrevIndex(current);
          setActiveIndex(current - 1);

          setTimeout(() => {
            isTransitioningRef.current = false;
            setIsTransitioning(false);
          }, 650);
        } else {
          // At Project 01: exit upward back to Hero
          unlockDocument();
          ignoreScrollUntilRef.current = Date.now() + 800;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    },
    [total, unlockDocument]
  );

  // Restore exact originating project on return from project detail page
  useEffect(() => {
    if (typeof window === "undefined") return;

    const slugMap: Record<string, number> = {
      "banking-platform": 0,
      "payment-platform": 1,
      "shipping-logistics-platform": 2,
      "crypto-exchange": 3,
    };

    const searchParams = new URLSearchParams(window.location.search);
    const querySlug = searchParams.get("project");
    const hash = window.location.hash.replace("#", "");

    let targetIndex: number | null = null;

    if (querySlug && slugMap[querySlug] !== undefined) {
      targetIndex = slugMap[querySlug];
    } else if (hash.startsWith("project-")) {
      const hashSlug = hash.replace("project-", "");
      if (slugMap[hashSlug] !== undefined) {
        targetIndex = slugMap[hashSlug];
      }
    }

    if (targetIndex !== null) {
      const target = targetIndex;
      setActiveIndex(target);
      activeIndexRef.current = target;

      // Mark that this entry returned from detail page so nudge cue does not play
      hasNudgedSessionRef.current = true;
      setShowNudge(false);

      // On mobile viewports, smoothly enter immersive mode on that specific project
      if (window.innerWidth < 768) {
        const container = containerRef.current;
        if (container) {
          window.scrollTo({ top: container.offsetTop, behavior: "instant" });
        }
        lockDocument();
      } else {
        // On desktop, scroll directly to that project's card
        const cardId = querySlug ? `project-${querySlug}` : hash;
        const el = document.getElementById(cardId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }, [lockDocument]);

  // Subtle cue: trigger once per fresh entry into Project 01
  useEffect(() => {
    // Only trigger if immersive mode is active, at Project 01, not currently transitioning,
    // and this session has not yet performed the nudge
    if (isImmersive && activeIndex === 0 && !hasNudgedSessionRef.current) {
      hasNudgedSessionRef.current = true;

      // Wait until Project 01 has completely settled into its normal resting state
      const timer = setTimeout(() => {
        // Double-check user is still at Project 01 and hasn't navigated away
        if (activeIndexRef.current === 0 && !isTransitioningRef.current) {
          setShowNudge(true);
        }
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [isImmersive, activeIndex]);

  // Monitor normal page scroll when OUTSIDE to capture entry boundaries
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    let lastScrollY = window.scrollY;

    const handleWindowScroll = () => {
      // If already immersive, native scroll shouldn't happen, ignore
      if (isImmersiveRef.current) return;
      if (Date.now() < ignoreScrollUntilRef.current) return;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY >= lastScrollY;
      lastScrollY = currentScrollY;

      // Downward Entry from Hero:
      // When top of Selected Work reaches or scrolls past top of viewport
      if (scrollingDown && rect.top <= 20 && rect.bottom > window.innerHeight * 0.5) {
        // Snap document scroll cleanly to container top
        window.scrollTo({ top: container.offsetTop, behavior: "instant" });
        // Set to Project 01
        setActiveIndex(0);
        activeIndexRef.current = 0;
        lockDocument();
      }
      // Upward Entry from Why Chukolab:
      // When bottom of Selected Work comes into view from below
      else if (!scrollingDown && rect.bottom >= window.innerHeight * 0.9 && rect.top < 0) {
        window.scrollTo({ top: container.offsetTop, behavior: "instant" });
        // Initialize at Final Project
        setActiveIndex(total - 1);
        activeIndexRef.current = total - 1;
        lockDocument();
      }
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [lockDocument, total]);

  // Touch and Wheel interaction layer while IMMERSIVE
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (!isImmersiveRef.current) return;
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      touchStartTime = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isImmersiveRef.current) return;
      // Absolute prevention of native scrolling while immersive
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isImmersiveRef.current) return;

      const deltaY = e.changedTouches[0].clientY - touchStartY;
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      const duration = Date.now() - touchStartTime;

      // Dominant vertical direction check
      if (Math.abs(deltaY) < 30 || Math.abs(deltaY) < Math.abs(deltaX) * 1.2) {
        return;
      }

      // Deliberate swipe threshold
      if (Math.abs(deltaY) > 40 || (Math.abs(deltaY) > 25 && duration < 350)) {
        if (deltaY < 0) {
          triggerTransition("next");
        } else {
          triggerTransition("prev");
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isImmersiveRef.current) return;
      e.preventDefault();

      if (Math.abs(e.deltaY) < 25 || isTransitioningRef.current) return;

      if (e.deltaY > 0) {
        triggerTransition("next");
      } else {
        triggerTransition("prev");
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [triggerTransition]);

  return (
    <div
      ref={containerRef}
      className="md:hidden relative w-full h-[100svh] min-h-[100svh] bg-[#0B0C0E]"
    >
      {/* Immersive Full-Screen Viewport Stage */}
      <div
        className={`w-full h-full overflow-hidden bg-[#0B0C0E] select-none flex flex-col justify-between ${
          isImmersive ? "fixed inset-0 z-50 h-[100svh]" : "relative"
        }`}
      >
        {/* Full-bleed active project presentation */}
        <div className="relative w-full h-full overflow-hidden">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const isPrevious = index === prevIndex && isTransitioning;

            // Only mount active or transitioning slide for peak mobile performance
            if (!isActive && !isPrevious) return null;

            let transformClass = "translate-y-0 scale-100 opacity-100";
            const transitionStyles =
              "transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]";

            if (isTransitioning) {
              if (isActive) {
                transformClass = "translate-y-0 scale-100 opacity-100";
              } else if (isPrevious) {
                transformClass =
                  transitionDirection === "down"
                    ? "-translate-y-12 scale-[0.95] opacity-0"
                    : "translate-y-12 scale-[0.95] opacity-0";
              }
            }

            if (project.mobileImage || project.image || index >= 0) {
              const displayImage =
                project.mobileImage ||
                project.image ||
                (index === 0
                  ? "/finacorm-heroshot2.png"
                  : index === 1
                  ? "/meridian-heroshot.png"
                  : index === 2
                  ? "/aglogistic-heroshot.png"
                  : "/veejayxchange-heroshot.png");

              return (
                <div
                  key={project.id}
                  className={`absolute inset-0 overflow-hidden ${transitionStyles} ${transformClass}`}
                  style={{
                    willChange: "transform, opacity",
                    pointerEvents: isActive && !isTransitioning ? "auto" : "none",
                  }}
                >
                  {/* Full-Screen Product Screenshot Canvas with subtle Project 01 nudge */}
                  <img
                    src={displayImage}
                    alt={project.name}
                    onAnimationEnd={() => {
                      if (index === 0) setShowNudge(false);
                    }}
                    className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none ${
                      index === 0 && showNudge ? "animate-banking-nudge" : ""
                    }`}
                  />

                  {/* Compact Full-Width Semi-Transparent Bottom Band */}
                  <div className="absolute inset-x-0 bottom-0 z-10 w-full bg-black/70 px-5 pt-3.5 pb-safe pb-4 space-y-2 pointer-events-auto rounded-none border-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#435BFF] font-medium block">
                          // {project.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white leading-tight mt-0.5">
                          {project.name}
                        </h3>
                      </div>

                      <a
                        href={project.href || "#contact"}
                        className="group shrink-0 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white hover:text-[#435BFF] transition-colors pt-0.5 cursor-pointer"
                      >
                        <span className="border-b border-white/80 group-hover:border-[#435BFF] pb-0.5">
                          SEE PROJECT
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#435BFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>

                    <p className="text-[11px] sm:text-xs text-white/75 font-normal leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className={`absolute inset-0 flex flex-col justify-between px-6 pt-safe pb-safe ${transitionStyles} ${transformClass}`}
                style={{
                  willChange: "transform, opacity",
                  pointerEvents: isActive && !isTransitioning ? "auto" : "none",
                }}
              >
                {/* Visual / Product Media Area */}
                <div className="relative w-full flex-1 max-h-[62svh] mt-4 rounded-none border border-white/10 bg-[#14161A] overflow-hidden flex flex-col justify-between p-5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/60">
                    <span className="uppercase text-[#435BFF] font-medium tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Curated Product Media Representation (Swappable with image / video) */}
                  {project.image ? (
                    <div className="my-auto w-full border border-white/10 bg-[#0B0C0E] overflow-hidden shadow-lg">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto max-h-[38svh] object-cover object-top block"
                      />
                    </div>
                  ) : (
                    <div className="my-auto w-full bg-[#1A1D23] border border-white/10 p-5 shadow-lg">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#435BFF]" />
                          <span className="font-mono text-[11px] text-white uppercase tracking-wider font-medium">
                            {project.name}
                          </span>
                        </div>
                        <span className="font-mono text-[9px] text-white/50 uppercase">
                          PROD SYSTEM
                        </span>
                      </div>

                      <div className="mt-4 space-y-2.5">
                        <div className="h-2 w-3/4 bg-white/10" />
                        <div className="h-2 w-1/2 bg-[#435BFF]/20" />
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <div className="p-2.5 bg-white/5 border border-white/10">
                            <span className="block font-mono text-[8px] text-white/50">
                              CHANNEL 01
                            </span>
                            <div className="h-2.5 w-12 bg-white/80 mt-1" />
                          </div>
                          <div className="p-2.5 bg-white/5 border border-white/10">
                            <span className="block font-mono text-[8px] text-white/50">
                              LATENCY
                            </span>
                            <div className="h-2.5 w-10 bg-[#435BFF] mt-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
                    <span>{project.image ? `${project.name.toUpperCase()} // INTERFACE` : "[ PRODUCT MEDIA / VIDEO ]"}</span>
                    <span className="text-white/60">{project.number}</span>
                  </div>
                </div>

                {/* Minimal Project Information & Integrated CTA */}
                <div className="pt-5 pb-6 space-y-3">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#435BFF] font-medium block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-medium tracking-tight text-white leading-tight">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-xs text-white/60 font-normal leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Restrained Integrated CTA */}
                  <div className="pt-1">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#435BFF] transition-colors py-1 cursor-pointer"
                    >
                      <span className="border-b border-white/80 group-hover:border-[#435BFF] pb-0.5">
                        VIEW PROJECT
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#435BFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
