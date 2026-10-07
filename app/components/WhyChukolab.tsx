"use client";

import { Container, SectionHeader } from "./ui";
import { useBackgroundTheme } from "./BackgroundThemeController";

interface Reason {
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    title: "BUILT AROUND THE BUSINESS",
    description:
      "We design architecture directly around your transaction flows, unit economics, and operational bottlenecks, not around generic frameworks or agency templates.",
  },
  {
    title: "PRODUCT + DESIGN + ENGINEERING",
    description:
      "Design and systems engineering work in unison. Interfaces are built with deep understanding of the underlying database models, API contracts, and edge states.",
  },
  {
    title: "BUILT FOR REAL OPERATIONS",
    description:
      "Serious software must withstand real-world stress: high concurrency, network volatility, strict audit trails, and uninterrupted uptime for mission-critical processes.",
  },
  {
    title: "END-TO-END IMPLEMENTATION",
    description:
      "From technical scoping and core database design to high-fidelity frontend systems and production deployment, we deliver complete turn-key solutions ready to run.",
  },
];

export function WhyChukolab() {
  const { isBlue } = useBackgroundTheme();

  return (
    <section
      id="why-chukolab"
      className="relative py-20 sm:py-28 lg:py-36 border-t border-[#E8E8EA] bg-transparent overflow-hidden"
    >
      {/* Background Graphic from /public/why-chukolab-background.svg with transparent canvas */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: "url('/why-chukolab-background.svg')",
        }}
      />

      <Container size="wide" className="relative z-10">
        <SectionHeader
          label="WHY CHUKOLAB"
          title="ENGINEERED FOR SCALE, RELIABILITY, AND BUSINESS RIGOR."
          description="A product studio structured specifically for companies that cannot afford technical debt or fragile prototypes."
          align="between"
          isBlue={isBlue}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="border border-[#E8E8EA] bg-white/95 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-start hover:border-[#435BFF]/40 transition-colors duration-200 group shadow-xs"
            >
              <div>
                <div className="pb-6 border-b border-[#E8E8EA]">
                  <span className="font-mono text-xs text-[#5F6368]">
                    // 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[#111111] mt-6 mb-3 leading-snug group-hover:text-[#435BFF] transition-colors">
                  {reason.title}
                </h3>

                <p className="text-sm text-[#5F6368] leading-relaxed font-normal">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
