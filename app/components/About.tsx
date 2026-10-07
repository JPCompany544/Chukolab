import { Container } from "./ui";

export function About() {
  return (
    <section
      id="about"
      className="relative pt-20 sm:pt-28 lg:pt-36 bg-transparent transition-colors duration-700"
    >
      <Container size="wide">
        <div className="max-w-4xl space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-white/80 block mb-3 font-medium">
              // ABOUT CHUKOLAB
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.08]">
              A PRODUCT STUDIO BUILT FOR CRAFT, RELIABILITY, AND REAL SCALE.
            </h2>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-white/90 font-normal leading-relaxed">
            <p>
              Chukolab is an independent product studio based in Enugu, Nigeria. We partner with ambitious founders, established financial institutions, and operational enterprises to engineer custom software platforms that power critical business systems.
            </p>
            <p>
              Rather than operating as a high-volume agency, we work as a dedicated engineering and product team. We focus on complex domains; financial ledgers, automated clearing pipelines, high-volume operational consoles, and mission-critical applications where failure is not an option.
            </p>
            <p>
              Every project is approached with architectural rigor, meticulous UI craft, and direct accountability from planning through deployment.
            </p>
          </div>

          {/* Location & studio metadata table */}
          <div className="pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
            <div>
              <span className="text-white/70 block mb-1">STUDIO LOCATION</span>
              <span className="text-white font-medium">Enugu, Nigeria</span>
            </div>
            <div>
              <span className="text-white/70 block mb-1">FOCUS DOMAINS</span>
              <span className="text-white font-medium">Fintech, Ops & Assets</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-white/70 block mb-1">ENGAGEMENT MODEL</span>
              <span className="text-white font-medium">Custom Product Builds</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Full-Width Viewport Edge-to-Edge Workspace Visual Chapter */}
      <div className="w-full mt-16 sm:mt-24 lg:mt-32">
        <img
          src="/about-chukolab-workspace.jpg"
          alt="Chukolab studio workspace"
          className="w-full h-auto block object-cover"
        />
      </div>
    </section>
  );
}
