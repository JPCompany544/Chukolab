import Link from "next/link";
import { Container, SectionHeader, Tag } from "./ui";
import { ArrowUpRight } from "lucide-react";
import { MobileSelectedWork } from "./MobileSelectedWork";

interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  mobileImage?: string;
  href: string;
  layout: "full" | "split" | "detailed";
  accentTag?: string;
  details?: {
    platform: string;
    stack: string;
    scope: string;
  };
}

const projects: Project[] = [
  {
    id: "01",
    number: "01",
    name: "Finacorm",
    category: "Banking/Finance platform",
    description: "A complete banking experience covering customer accounts, transfers and financial operations.",
    image: "/finacorm-heroshot.png",
    mobileImage: "/finacorm-heroshot2.png",
    href: "/projects/banking-platform",
    layout: "full",
    accentTag: "FLAGSHIP PLATFORM",
    details: {
      platform: "ENTERPRISE WEB ENGINE",
      stack: "NEXT.JS / TYPESCRIPT / POSTGRES",
      scope: "ARCHITECTURE + DESIGN + ENGINEERING",
    },
  },
  {
    id: "02",
    number: "02",
    name: "Payment Platform",
    category: "Payments",
    description: "A complete payment platform for managing transactions, payment methods and financial operations.",
    image: "/meridian-heroshot.png",
    mobileImage: "/meridian-heroshot.png",
    href: "/projects/payment-platform",
    layout: "split",
    details: {
      platform: "REAL-TIME SETTLEMENT",
      stack: "RUST CORE / EVENT BUS",
      scope: "CORE SYSTEM & OPERATOR CONSOLE",
    },
  },
  {
    id: "03",
    number: "03",
    name: "Shipping / Logistics Platform",
    category: "Logistics",
    description: "A complete logistics platform for managing shipments, tracking deliveries and coordinating operations.",
    image: "/aglogistic-heroshot.png",
    mobileImage: "/aglogistic-heroshot.png",
    href: "/projects/shipping-logistics-platform",
    layout: "split",
    details: {
      platform: "INTERNAL OPERATIONS HUB",
      stack: "DISTRIBUTED API / REACT",
      scope: "WORKFLOW AUTOMATION",
    },
  },
  {
    id: "04",
    number: "04",
    name: "Crypto Exchange",
    category: "Crypto Exchange",
    description: "A complete crypto exchange platform for managing digital assets, transactions and customer operations.",
    image: "/veejayxchange-heroshot.png",
    mobileImage: "/veejayxchange-heroshot.png",
    href: "/projects/crypto-exchange",
    layout: "full",
    accentTag: "CROSS-PLATFORM SUITE",
    details: {
      platform: "MOBILE & WEB APP",
      stack: "REACT NATIVE / TAILWIND",
      scope: "END-TO-END PRODUCT BUILD",
    },
  },
];

export function SelectedWork() {
  const mobileProjects = projects.map((p) => ({
    id: p.id,
    number: p.number,
    name: p.name,
    category: p.category,
    description: p.description,
    image: p.image,
    mobileImage: p.mobileImage || p.image,
    href: p.href,
    totalCount: `0${projects.length}`,
  }));

  return (
    <section id="work" className="border-t border-[#E8E8EA] bg-white">
      {/* Mobile Experience: Dedicated Immersive 100svh Scroll-Driven Showcase */}
      <MobileSelectedWork projects={mobileProjects} />

      {/* Desktop & Tablet Experience: Retains Curated Editorial Layout */}
      <div className="hidden md:block py-20 sm:py-28 lg:py-36">
        <Container size="wide">
          <SectionHeader
            label="SELECTED WORK"
            title="CHUKOLAB BUILDS SERIOUS SOFTWARE."
            description="A selection of digital platforms, fintech engines, and operational software engineered for institutions and ambitious enterprises."
            align="between"
          />

          <div className="space-y-16 sm:space-y-24">
            {projects.map((project, index) => {
              if (project.layout === "full") {
                const anchorId =
                  project.id === "01"
                    ? "project-banking-platform"
                    : "project-crypto-exchange";

                return (
                  <Link
                    key={project.id}
                    id={anchorId}
                    href={project.href}
                    className="group block border border-[#E8E8EA] bg-white transition-all duration-300 hover:border-[#435BFF]/40 cursor-pointer scroll-mt-24"
                  >
                    {/* Large Product Screenshot / Interface Placeholder */}
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#F2F5FF]/60 border-b border-[#E8E8EA] p-6 sm:p-12 overflow-hidden flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs font-mono text-[#5F6368]">
                        <span className="uppercase">
                          0{index + 1} // {project.category}
                        </span>
                        {project.accentTag && (
                          <Tag className="bg-white border-[#E8E8EA] text-[#435BFF]">{project.accentTag}</Tag>
                        )}
                      </div>

                      {/* Curated Product Visual Canvas */}
                      <div className="my-auto py-8">
                        {project.image ? (
                          <div className="max-w-4xl mx-auto bg-white border border-[#E8E8EA] shadow-xs overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
                            <img
                              src={project.image}
                              alt={`${project.name} interface`}
                              className="w-full h-auto object-cover block"
                            />
                          </div>
                        ) : (
                          <div className="max-w-4xl mx-auto bg-white border border-[#E8E8EA] p-6 sm:p-10 shadow-xs transition-transform duration-500 group-hover:scale-[1.01]">
                            <div className="flex items-center justify-between pb-4 border-b border-[#E8E8EA]">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#435BFF]" />
                                <span className="font-mono text-xs uppercase tracking-wider text-[#111111]">
                                  {project.name} — PRODUCTION CONSOLE
                                </span>
                              </div>
                              <span className="font-mono text-[11px] text-[#5F6368]">
                                CONFIDENTIAL CLIENT ARCHITECTURE
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                              <div className="h-24 bg-[#F9FAFB] p-4 border border-[#E8E8EA] flex flex-col justify-between">
                                <span className="font-mono text-[10px] text-[#5F6368]">
                                  METRIC CHANNEL A
                                </span>
                                <div className="h-3 w-16 bg-[#111111]" />
                              </div>
                              <div className="h-24 bg-[#F9FAFB] p-4 border border-[#E8E8EA] flex flex-col justify-between">
                                <span className="font-mono text-[10px] text-[#5F6368]">
                                  METRIC CHANNEL B
                                </span>
                                <div className="h-3 w-20 bg-[#111111]" />
                              </div>
                              <div className="h-24 bg-[#F9FAFB] border border-[#E8E8EA] flex flex-col justify-between">
                                <span className="font-mono text-[10px] text-[#5F6368]">
                                  THROUGHPUT RATIO
                                </span>
                                <div className="h-3 w-24 bg-[#435BFF]" />
                              </div>
                            </div>

                            <div className="h-10 bg-[#F9FAFB] border border-[#E8E8EA] px-4 flex items-center justify-between font-mono text-xs text-[#5F6368]">
                              <span>SYSTEM HEALTH: NOMINAL</span>
                              <span className="hidden sm:inline">SECURE MULTI-TENANT BACKBONE</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-[#5F6368]">
                        <span>{project.image ? `${project.name.toUpperCase()} // INTERFACE` : "PRODUCT SCREENSHOT PLACEHOLDER"}</span>
                        <span>RESOLUTION: ULTRA-WIDE INTERACTION</span>
                      </div>
                    </div>

                    {/* Editorial Project Metadata & Content */}
                    <div className="p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-2">
                          <Tag>{project.category}</Tag>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] group-hover:text-[#435BFF] transition-colors">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-base text-[#5F6368]">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-6 sm:gap-8 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E8E8EA]">
                        {project.details && (
                          <div className="hidden sm:block text-right font-mono text-xs text-[#5F6368] space-y-1">
                            <div>PLATFORM: {project.details.platform}</div>
                            <div>SCOPE: {project.details.scope}</div>
                          </div>
                        )}
                        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#111111] group-hover:text-[#435BFF] group-hover:translate-x-1 transition-all">
                          <span>VIEW PROJECT</span>
                          <ArrowUpRight className="w-4 h-4 text-[#435BFF]" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }

              return null;
            })}

            {/* Two-column layout grid for Projects 02 & 03 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {projects
                .filter((p) => p.layout === "split")
                .map((project, index) => {
                  const anchorId =
                    project.id === "02"
                      ? "project-payment-platform"
                      : "project-shipping-logistics-platform";

                  return (
                    <Link
                      key={project.id}
                      id={anchorId}
                      href={project.href}
                      className="group border border-[#E8E8EA] bg-white transition-all duration-300 hover:border-[#435BFF]/40 flex flex-col justify-between cursor-pointer scroll-mt-24"
                    >
                    {/* Visual Interface Area */}
                    <div className="relative aspect-[4/3] w-full bg-[#F2F5FF]/60 border-b border-[#E8E8EA] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                      <div className="flex items-center justify-between text-xs font-mono text-[#5F6368]">
                        <span>0{index + 2} // {project.category}</span>
                        <span className="px-2 py-0.5 bg-white text-[#5F6368] border border-[#E8E8EA]">
                          {project.details?.platform}
                        </span>
                      </div>

                      {project.image ? (
                        <div className="my-auto w-full max-h-[220px] bg-white border border-[#E8E8EA] shadow-2xs overflow-hidden transition-transform duration-500 group-hover:scale-[1.015]">
                          <img
                            src={project.image}
                            alt={`${project.name} interface`}
                            className="w-full h-full object-cover object-top block"
                          />
                        </div>
                      ) : (
                        <div className="my-auto w-full bg-white border border-[#E8E8EA] p-6 shadow-2xs transition-transform duration-500 group-hover:scale-[1.015]">
                          <div className="flex items-center justify-between pb-3 border-b border-[#E8E8EA] font-mono text-[11px] text-[#5F6368]">
                            <span>SYSTEM INSTANCE</span>
                            <span className="w-2 h-2 rounded-full bg-[#435BFF]" />
                          </div>
                          <div className="space-y-3 py-4">
                            <div className="h-3 w-3/4 bg-[#E8E8EA]" />
                            <div className="h-3 w-1/2 bg-[#F2F5FF]" />
                            <div className="h-12 bg-[#F9FAFB] border border-[#E8E8EA] mt-2 p-2 flex items-center font-mono text-[11px] text-[#5F6368]">
                              [ INTERFACE SCHEMATIC PLACEHOLDER ]
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="text-[11px] font-mono text-[#5F6368]">
                        {project.image ? `${project.name.toUpperCase()} // INTERFACE` : "VISUAL / PRODUCT SCREENSHOT PLACEHOLDER"}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6 sm:p-8">
                      <div className="mb-3">
                        <Tag>{project.category}</Tag>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111] group-hover:text-[#435BFF] transition-colors">
                            {project.name}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base text-[#5F6368]">
                            {project.description}
                          </p>
                        </div>
                        <div className="p-2 border border-[#E8E8EA] group-hover:border-[#435BFF] group-hover:bg-[#435BFF] group-hover:text-white transition-colors shrink-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
