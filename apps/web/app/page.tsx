import { LandingHeader } from "@/components/landing/LandingHeader";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CtaBand } from "@/components/landing/CtaBand";
import { SiteFooter } from "@/components/shared/SiteFooter";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#FFF9F2]">
      {/* Decorative doodle background — subtle, single ink tone, low opacity */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="doodle-pattern"
            width="220"
            height="220"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-6)"
          >
            {/* open book */}
            <g transform="translate(20, 30)" stroke="#1A1A2E" strokeOpacity="0.06" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 6 C8 0, 20 0, 26 6 L26 24 C20 19, 8 19, 0 24 Z" />
              <path d="M26 6 C32 0, 44 0, 52 6 L52 24 C44 19, 32 19, 26 24 Z" />
            </g>

            {/* star */}
            <g transform="translate(165, 35) scale(1.6)" stroke="#E8604F" strokeOpacity="0.07" strokeWidth="1.4" fill="none" strokeLinejoin="round">
              <path d="M0 -10 L2.9 -3.5 L10 -3 L4.5 1.5 L6 8.5 L0 5 L-6 8.5 L-4.5 1.5 L-10 -3 L-2.9 -3.5 Z" />
            </g>

            {/* pencil */}
            <g transform="translate(35, 155)" stroke="#0F9C8E" strokeOpacity="0.07" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 24 L18 6 L24 12 L6 30 Z" />
              <path d="M18 6 L24 0 L30 6 L24 12 Z" />
            </g>

            {/* speech bubble */}
            <g transform="translate(155, 150)" stroke="#F5A623" strokeOpacity="0.07" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="0" y="0" width="30" height="20" rx="7" />
              <path d="M7 20 L4 27 L14 20" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
      </svg>

      <div className="relative z-10">
        <LandingHeader />
        <Hero />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
        <CtaBand />
        <SiteFooter />
      </div>
    </main>
  );
}
