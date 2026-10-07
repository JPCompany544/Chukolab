import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { WhyChukolab } from "./components/WhyChukolab";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { BackgroundThemeProvider } from "./components/BackgroundThemeController";

export default function Home() {
  return (
    <BackgroundThemeProvider>
      <div className="relative min-h-screen flex flex-col bg-transparent selection:bg-[#435BFF] selection:text-white">

      {/* Sticky/Fixed Minimal Navigation */}
      <Navbar />

      <main className="relative z-10 flex-1">
        {/* 01 — HERO */}
        <Hero />

        {/* 02 — SELECTED WORK */}
        <SelectedWork />

        {/* 03 — WHY CHUKOLAB */}
        <WhyChukolab />

        {/* 04 — ABOUT */}
        <About />

        {/* 05 — CTA */}
        <CTA />
      </main>

      {/* 06 — FOOTER */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
    </BackgroundThemeProvider>
  );
}
