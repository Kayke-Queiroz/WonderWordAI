import { Smile, ShieldCheck, Users } from "lucide-react";
import { getHeaderAuthState } from "@/lib/auth/server";
import { SiteHeader, type SiteNavItem } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { HeaderAuthAction } from "@/components/shared/HeaderAuthAction";
import {
  NoteToParentsSection,
  CoppaBannerSection,
  InformationCollectedSection,
  ParentalRightsSection,
  PartnersSection,
  SafetyTipSection,
  DataSecuritySection,
  PrivacyContactSection,
} from "@/components/legal/PrivacySections";

const HEADER_NAV_ITEMS: SiteNavItem[] = [
  { label: "Home", href: "#" },
  { label: "Story Library", href: "#" },
  { label: "Store", href: "#" },
  { label: "Diagnostics", href: "#" },
];

const SIDEBAR_NAV_ITEMS = [
  { id: "note", label: "A Note to Parents" },
  { id: "coppa", label: "COPPA Compliance" },
  { id: "information", label: "Information We Collect" },
  { id: "rights", label: "Parental Rights" },
  { id: "partners", label: "Third-Party Partners" },
  { id: "security", label: "Data Security" },
  { id: "contact", label: "Questions" },
];

export const dynamic = "force-dynamic";

export default async function PrivacyPolicyPage() {
  const headerAuth = await getHeaderAuthState();

  return (
    <div className="min-h-screen bg-[#FDFAF5] text-[#2b2b2b]">
      <SiteHeader navItems={HEADER_NAV_ITEMS} right={<HeaderAuthAction auth={headerAuth} />} />

      <main className="relative mx-auto max-w-6xl 2xl:max-w-[1500px] min-[1800px]:max-w-[1700px] px-6 py-14">
        {/* Soft radial warmth behind the hero, like the original mock */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(239,109,78,0.10),transparent_65%)]"
        />

        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[#a3352b] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs font-semibold tracking-wider text-[#8a8a8a]">
            LAST UPDATED: JUNE 24, 2024
          </p>

          <div className="mt-4 flex items-center justify-center gap-4 text-[#c9a98f]">
            <Smile className="h-5 w-5" />
            <ShieldCheck className="h-5 w-5" />
            <Users className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-12 md:flex-row">
          <aside className="shrink-0 md:w-52">
            <nav className="sticky top-8 flex flex-row flex-wrap gap-x-6 gap-y-3 text-sm md:flex-col md:gap-2">
              {SIDEBAR_NAV_ITEMS.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={
                    i === 0
                      ? "border-l-2 border-[#a3352b] pl-3 font-semibold text-[#2b2b2b]"
                      : "border-l-2 border-transparent pl-3 text-[#5a5a5a] hover:text-[#2b2b2b]"
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 max-w-5xl flex-1">
            <NoteToParentsSection />
            <CoppaBannerSection />
            <InformationCollectedSection />
            <ParentalRightsSection />
            <PartnersSection />
            <SafetyTipSection />
            <DataSecuritySection />
            <PrivacyContactSection />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
