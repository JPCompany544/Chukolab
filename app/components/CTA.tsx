"use client";

import { Container, Button } from "./ui";
import { ArrowUpRight } from "lucide-react";
import { useBackgroundTheme } from "./BackgroundThemeController";

export function CTA() {
  const { isBlue } = useBackgroundTheme();

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-transparent transition-colors duration-700">
      <Container size="wide">
        <div className="max-w-4xl">
          <span
            className={`font-mono text-xs uppercase tracking-wider block mb-4 font-medium transition-colors duration-700 ${
              isBlue ? "text-white/80" : "text-[#435BFF]"
            }`}
          >
            // NEXT STEP
          </span>

          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.05] uppercase transition-colors duration-700 ${
              isBlue ? "text-white" : "text-[#111111]"
            }`}
          >
            HAVE A BUSINESS SYSTEM YOU NEED BUILT?
          </h2>

          <p
            className={`mt-6 sm:mt-8 text-base sm:text-xl font-normal leading-relaxed max-w-2xl transition-colors duration-700 ${
              isBlue ? "text-white/85" : "text-[#5F6368]"
            }`}
          >
            We partner with businesses to architect, design, and deliver mission-critical software platforms from the ground up. Let's discuss your project requirements, scope, and technical roadmap.
          </p>

          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
            <Button
              size="lg"
              href="mailto:hello@chukolab.com"
              className={`group transition-all duration-700 ${
                isBlue ? "!bg-white !text-[#435BFF] !border-white hover:!bg-white/90" : ""
              }`}
            >
              <span>START A PROJECT</span>
              <ArrowUpRight
                className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isBlue ? "text-[#435BFF]" : ""
                }`}
              />
            </Button>
            <div
              className={`font-mono text-xs transition-colors duration-700 ${
                isBlue ? "text-white/70" : "text-[#5F6368]"
              }`}
            >
              OR INQUIRE DIRECTLY:{" "}
              <a
                href="mailto:hello@chukolab.com"
                className={`transition-colors duration-700 font-medium ${
                  isBlue
                    ? "text-white underline underline-offset-4"
                    : "text-[#435BFF] hover:underline underline-offset-4"
                }`}
              >
                HELLO@CHUKOLAB.COM
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
