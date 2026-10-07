"use client";

import { useState } from "react";
import { Container } from "./ui";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useInSelectedWork } from "./useInSelectedWork";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hideOnMobile = useInSelectedWork();

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#E8E8EA] transition-all duration-300 ${
        hideOnMobile ? "max-md:-translate-y-full max-md:opacity-0 max-md:pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          {/* Chukolab Wordmark */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="group flex items-center gap-2.5 text-[#111111] focus:outline-none"
            >
              <span className="w-3.5 h-3.5 bg-[#435BFF] inline-block transition-transform duration-300 group-hover:scale-90" />
              <span className="font-semibold text-lg sm:text-xl tracking-tight text-[#111111] uppercase">
                CHUKOLAB
              </span>
            </a>
            <span className="hidden sm:inline-block font-mono text-[10px] text-[#5F6368] uppercase tracking-widest pl-2 border-l border-[#E8E8EA]">
              STUDIO
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#work"
              className="text-sm font-medium text-[#5F6368] hover:text-[#435BFF] transition-colors tracking-tight"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-[#5F6368] hover:text-[#435BFF] transition-colors tracking-tight"
            >
              About
            </a>
          </nav>

          {/* Primary CTA Placeholder */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-4 py-2.5 border border-[#435BFF] bg-[#435BFF] text-white hover:bg-[#364BDB] hover:border-[#364BDB] active:bg-[#2D3FB8] transition-all cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-2 text-[#111111] hover:text-[#435BFF] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E8EA] bg-white px-6 py-8 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-5">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-[#111111] py-1 hover:text-[#435BFF] transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-[#111111] py-1 hover:text-[#435BFF] transition-colors"
            >
              About
            </a>
            <div className="pt-4 border-t border-[#E8E8EA]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider py-3 border border-[#435BFF] bg-[#435BFF] text-white hover:bg-[#364BDB]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
