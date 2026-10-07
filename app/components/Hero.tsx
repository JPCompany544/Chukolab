"use client";

import { useEffect, useRef } from "react";
import { Container } from "./ui";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.play().catch(() => {
        // Fallback for strict browser autoplay permissions
      });
    }
  }, []);

  return (
    <section className="relative pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-white">
      <Container size="wide">
        {/* Hero Content */}
        <div className="max-w-5xl mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-[#111111] leading-[1.04] uppercase">
            We turn complex business problems into software.
          </h1>
          <p className="mt-6 sm:mt-8 text-lg sm:text-2xl text-[#5F6368] font-normal leading-relaxed max-w-3xl">
            We design and build digital platforms, internal systems, and customer-facing products that help businesses operate, transact, and grow.
          </p>
        </div>

        {/* Hero Visual Area: Banking Product Showcase Video */}
        <div className="w-full relative border border-[#E8E8EA] bg-[#F2F5FF] overflow-hidden group hover:border-[#435BFF]/30 transition-colors aspect-[16/9]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/banking-product-showcase-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/banking-product-showcase.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </section>
  );
}
