import Link from "next/link";
import Image from "next/image";
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
              <Image
                src="/chukolab-logomain.png"
                alt="Chukolab Logo"
                width={22}
                height={22}
                className="w-5.5 h-5.5 object-contain"
              />
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
                  <Link href="/#work" className="hover:text-[#435BFF] transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-[#435BFF] transition-colors">
                    About Studio
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#435BFF] transition-colors">
                    Privacy Policy
                  </Link>
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
                  <Link
                    href="/#contact"
                    className="hover:text-[#435BFF] transition-colors"
                  >
                    Start a Project
                  </Link>
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
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {currentYear} Chukolab Ltd. All rights reserved.</span>
            <span className="text-[#D8D8DC]" aria-hidden="true">•</span>
            <Link
              href="/privacy-policy"
              className="hover:text-[#435BFF] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div>
            DESIGNED & ENGINEERED WITH DISCIPLINE.
          </div>
        </div>
      </Container>
    </footer>
  );
}
