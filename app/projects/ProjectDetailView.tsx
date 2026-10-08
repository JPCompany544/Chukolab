import Link from "next/link";
import Image from "next/image";
import { Container } from "../components/ui";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectDetail } from "./projectData";

interface ProjectDetailViewProps {
  project: ProjectDetail;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  return (
    <article className="min-h-screen bg-white text-[#111111]">
      {/* Minimal Top Header / Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E8E8EA]">
        <Container size="wide">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/#work"
              className="group flex items-center gap-3 text-[#111111] focus:outline-none"
            >
              <Image
                src="/chukolab-logomain.png"
                alt="Chukolab Logo"
                width={36}
                height={36}
                priority
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-95"
              />
              <span className="font-semibold text-lg sm:text-xl tracking-tight text-[#111111] uppercase">
                CHUKOLAB
              </span>
            </Link>

            <Link
              href={`/?project=${project.slug}#project-${project.slug}`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#5F6368] hover:text-[#435BFF] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#435BFF]" />
              <span>SELECTED WORK</span>
            </Link>
          </div>
        </Container>
      </header>

      {/* Main Content Body */}
      <main className="py-16 sm:py-24 lg:py-32">
        <Container size="wide">
          <div className="space-y-20 sm:space-y-28 lg:space-y-36">
            {/* 1. PROJECT INTRODUCTION */}
            <header className="max-w-4xl space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#435BFF] font-medium">
                <span>{project.number}</span>
                <span className="text-[#80868B]">/</span>
                <span className="text-[#80868B]">{project.totalCount}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#111111] leading-[1.06]">
                {project.title}
              </h1>

              <div className="space-y-4 pt-2">
                <p className="text-lg sm:text-xl lg:text-2xl text-[#111111] font-normal leading-relaxed">
                  {project.shortDescription}
                </p>
                <p className="text-base sm:text-lg text-[#5F6368] font-normal leading-relaxed max-w-3xl">
                  {project.summary}
                </p>
              </div>
            </header>

            {/* 2. PRIMARY VISUAL (PROJECT IMAGE 01) */}
            <section aria-label="Primary Visual">
              {project.primaryImageAsset ? (
                <div
                  data-internal-placeholder={project.primaryImagePlaceholder}
                  className="w-full bg-[#F9FAFB] border border-[#E8E8EA] overflow-hidden"
                >
                  <img
                    src={project.primaryImageAsset}
                    alt={`${project.title} primary visual`}
                    className="w-full h-auto block object-cover"
                  />
                </div>
              ) : (
                <div
                  data-internal-placeholder={project.primaryImagePlaceholder}
                  className="w-full aspect-[16/10] bg-[#F9FAFB] border border-[#E8E8EA] flex items-center justify-center"
                />
              )}
            </section>

            {/* 3. PROJECT DETAILS (What we built) */}
            <section
              aria-label="Project Details"
              className="pt-12 sm:pt-16 border-t border-[#E8E8EA]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-4">
                  <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                    What we built
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base sm:text-lg text-[#5F6368] font-normal leading-relaxed max-w-2xl">
                    {project.whatWeBuilt}
                  </p>
                </div>
              </div>
            </section>

            {/* 4. SECOND VISUAL (PROJECT IMAGE 02) */}
            {project.secondaryImageAsset && (
              <section aria-label="Secondary Visual">
                <div
                  data-internal-placeholder={project.secondaryImagePlaceholder}
                  className="w-full bg-[#F9FAFB] border border-[#E8E8EA] overflow-hidden"
                >
                  <img
                    src={project.secondaryImageAsset}
                    alt={`${project.title} secondary visual`}
                    className="w-full h-auto block object-cover"
                  />
                </div>
              </section>
            )}

            {/* 5. PRODUCT VIDEO (PROJECT VIDEO) */}
            <section aria-label="Product Video">
              {project.videos && project.videos.length > 0 ? (
                <div className="space-y-12 sm:space-y-16">
                  {project.videos.map((vid, idx) => (
                    <div
                      key={idx}
                      data-internal-placeholder={project.videoPlaceholder}
                      className="space-y-3"
                    >
                      {vid.title && (
                        <div className="flex items-center gap-2 font-mono text-xs text-[#5F6368] uppercase tracking-wider">
                          <span className="text-[#435BFF]">// 0{idx + 1}</span>
                          <span>{vid.title}</span>
                        </div>
                      )}

                      {vid.orientation === "portrait" ? (
                        <div className="w-full bg-[#F9FAFB] border border-[#E8E8EA] py-8 sm:py-12 px-4 flex items-center justify-center overflow-hidden">
                          <div className="w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] bg-black border border-[#E8E8EA] overflow-hidden shadow-sm">
                            <video
                              src={vid.videoAsset}
                              poster={vid.videoPoster}
                              controls
                              preload="metadata"
                              playsInline
                              className="w-full h-full object-contain block"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="w-full aspect-[21/9] sm:aspect-[16/9] bg-[#F9FAFB] border border-[#E8E8EA] overflow-hidden">
                          <video
                            src={vid.videoAsset}
                            poster={vid.videoPoster}
                            controls
                            preload="metadata"
                            playsInline
                            className="w-full h-full object-contain bg-black block"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : project.videoOrientation === "portrait" ? (
                <div
                  data-internal-placeholder={project.videoPlaceholder}
                  className="w-full bg-[#F9FAFB] border border-[#E8E8EA] py-8 sm:py-12 px-4 flex items-center justify-center overflow-hidden"
                >
                  <div className="w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] bg-black border border-[#E8E8EA] overflow-hidden shadow-sm">
                    {project.videoAsset ? (
                      <video
                        src={project.videoAsset}
                        poster={project.videoPoster}
                        controls
                        preload="metadata"
                        playsInline
                        className="w-full h-full object-contain block"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#111111]" />
                    )}
                  </div>
                </div>
              ) : (
                <div
                  data-internal-placeholder={project.videoPlaceholder}
                  className="w-full aspect-video bg-[#F9FAFB] border border-[#E8E8EA] overflow-hidden"
                >
                  {project.videoAsset ? (
                    <video
                      src={project.videoAsset}
                      poster={project.videoPoster}
                      controls
                      preload="metadata"
                      playsInline
                      className="w-full h-full object-cover block"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F9FAFB]" />
                  )}
                </div>
              )}
            </section>

            {/* 6. KEY CAPABILITIES */}
            <section
              aria-label="Key Capabilities"
              className="pt-12 sm:pt-16 border-t border-[#E8E8EA]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-4">
                  <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                    Key capabilities
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <ul className="divide-y divide-[#E8E8EA] border-y border-[#E8E8EA]">
                    {project.capabilities.map((capability, index) => (
                      <li
                        key={index}
                        className="py-4 flex items-center justify-between text-base sm:text-lg text-[#111111] font-normal"
                      >
                        <span>{capability}</span>
                        <span className="font-mono text-xs text-[#80868B]">
                          0{index + 1}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. BACK TO SELECTED WORK */}
            <footer className="pt-12 sm:pt-16 border-t border-[#E8E8EA] flex items-center justify-between">
              <Link
                href={`/?project=${project.slug}#project-${project.slug}`}
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#111111] hover:text-[#435BFF] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#435BFF] transition-transform group-hover:-translate-x-1" />
                <span className="border-b border-[#111111] group-hover:border-[#435BFF] pb-0.5">
                  Back to selected work
                </span>
              </Link>

              <Link
                href="/#contact"
                className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#5F6368] hover:text-[#435BFF] transition-colors"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#435BFF]" />
              </Link>
            </footer>
          </div>
        </Container>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-[#E8E8EA] bg-white py-12 text-[#5F6368]">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Image
                src="/chukolab-logomain.png"
                alt="Chukolab Logo"
                width={18}
                height={18}
                className="w-4.5 h-4.5 object-contain"
              />
              <span className="text-[#111111] uppercase font-semibold">CHUKOLAB</span>
              <span className="text-[#80868B] pl-2 border-l border-[#E8E8EA]">STUDIO</span>
            </div>
            <div className="text-[#80868B]">
              © {new Date().getFullYear()} Chukolab. All rights reserved.
            </div>
          </div>
        </Container>
      </footer>
    </article>
  );
}
