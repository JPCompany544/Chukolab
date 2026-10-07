"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface BackgroundThemeContextType {
  isBlue: boolean;
}

const BackgroundThemeContext = createContext<BackgroundThemeContextType>({
  isBlue: false,
});

export function useBackgroundTheme() {
  return useContext(BackgroundThemeContext);
}

export function BackgroundThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isBlue, setIsBlue] = useState(false);
  const isBlueRef = useRef(false);

  useEffect(() => {
    isBlueRef.current = isBlue;
  }, [isBlue]);

  useEffect(() => {
    const updateTheme = () => {
      const aboutEl = document.getElementById("about");
      const ctaEl = document.getElementById("contact");
      if (!aboutEl || !ctaEl) return;

      const aboutRect = aboutEl.getBoundingClientRect();
      const ctaRect = ctaEl.getBoundingClientRect();
      const vh = window.innerHeight;

      // Viewport reference baseline
      const viewRef = vh * 0.45;

      // Delayed start point: triggers only when near the end of Why Chukolab / approaching About
      // (About top approaches within 78% of viewport height, keeping Why Chukolab fully white for longer
      // while guaranteeing About arrives in the fully blue environment)
      const aboutEnterTrigger = aboutRect.top;
      const aboutEnterThreshold = vh * 0.78;

      // Late transition zone: triggers when user has scrolled ~45% into CTA
      // (user has experienced the CTA headline in blue, now transitioning back to white)
      const ctaTrigger = ctaRect.top + ctaRect.height * 0.45;

      const isCurrentlyBlue = isBlueRef.current;
      let nextState = isCurrentlyBlue;

      if (!isCurrentlyBlue) {
        if (aboutEnterTrigger <= aboutEnterThreshold && ctaTrigger >= viewRef) {
          nextState = true;
        }
      } else {
        if (aboutEnterTrigger > aboutEnterThreshold + 30 || ctaTrigger < viewRef - 30) {
          nextState = false;
        }
      }

      if (nextState !== isCurrentlyBlue) {
        isBlueRef.current = nextState;
        setIsBlue(nextState);
      }
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateTheme();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    updateTheme();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <BackgroundThemeContext.Provider value={{ isBlue }}>
      {/* Persistent Page-Level Background Layer */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700 ease-out"
        style={{
          backgroundColor: isBlue ? "#435BFF" : "#FFFFFF",
        }}
      />
      {children}
    </BackgroundThemeContext.Provider>
  );
}
