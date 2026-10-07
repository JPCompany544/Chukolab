import { Container } from "./ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E8E8EA] bg-white py-14 sm:py-20 text-[#5F6368]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 pb-14 border-b border-[#E8E8EA]">
          {/* Brand Col */}
          <div className="max-w-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 bg-[#435BFF] inline-block" />
              <span className="font-semibold text-lg tracking-tight text-[#111111] uppercase">
                CHUKOLAB
              </span>
            </div>
            <p className="text-xs text-[#5F6368] font-mono leading-relaxed">
              Product studio building serious custom software and digital platforms for businesses.
            </p>
            <div className="font-mono text-xs text-[#5F6368]">
              Enugu, Nigeria
            </div>
          </div>

          {/* Nav & Contact */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 font-mono text-xs">
            <div className="space-y-3">
              <span className="text-[#111111] uppercase tracking-wider block font-medium">NAVIGATION</span>
              <ul className="space-y-2">
                <li>
                  <a href="#work" className="hover:text-[#435BFF] transition-colors">
                    Selected Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#435BFF] transition-colors">
                    About Studio
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[#111111] uppercase tracking-wider block font-medium">CONTACT</span>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:hello@chukolab.com"
                    className="hover:text-[#435BFF] transition-colors"
                  >
                    hello@chukolab.com
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#435BFF] transition-colors"
                  >
                    Start a Project
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <span className="text-[#111111] uppercase tracking-wider block font-medium">CHANNELS</span>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#435BFF] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#435BFF] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#435BFF] transition-colors"
                  >
                    X / Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#5F6368]">
          <div>
            © {currentYear} Chukolab Ltd. All rights reserved.
          </div>
          <div>
            DESIGNED & ENGINEERED WITH DISCIPLINE.
          </div>
        </div>
      </Container>
    </footer>
  );
}
