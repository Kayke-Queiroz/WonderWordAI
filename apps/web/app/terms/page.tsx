import { getHeaderAuthState } from "@/lib/auth/server";
import { SiteHeader, type SiteNavItem } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { HeaderAuthAction } from "@/components/shared/HeaderAuthAction";
import {
  AcceptanceSection,
  UseOfServiceSection,
  ChildrensPrivacySection,
  PaymentsSection,
  LiabilitySection,
  TermsContactSection,
} from "@/components/legal/TermsSections";

const HEADER_NAV_ITEMS: SiteNavItem[] = [
  { label: "Home", href: "#" },
  { label: "Story Library", href: "#" },
  { label: "Store", href: "#" },
  { label: "Diagnostics", href: "#" },
];

const SIDEBAR_NAV_ITEMS = [
  { id: "acceptance", label: "Acceptance" },
  { id: "use-of-service", label: "Use of Service" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "payments", label: "Payments" },
  { id: "cancellation", label: "Cancellation" },
  { id: "liability", label: "Liability" },
  { id: "contact", label: "Contact" },
];

export const dynamic = "force-dynamic";

export default async function TermsOfServicePage() {
  const headerAuth = await getHeaderAuthState();

  return (
    <div className="min-h-screen bg-[#FDFAF5] text-[#2b2b2b]">
      <SiteHeader navItems={HEADER_NAV_ITEMS} right={<HeaderAuthAction auth={headerAuth} />} />

      <main className="mx-auto max-w-6xl 2xl:max-w-[1500px] min-[1800px]:max-w-[1700px] px-6 py-12">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[#a3352b] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-[#8a8a8a]">
            Last updated: October 24, 2024
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-12 md:flex-row">
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

          <div className="min-w-0 max-w-5xl flex-1 space-y-14">
            <AcceptanceSection />
            <UseOfServiceSection />
            <ChildrensPrivacySection />
            <PaymentsSection />
            <LiabilitySection />
            <TermsContactSection />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
