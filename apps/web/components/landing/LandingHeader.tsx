import Link from "next/link";
import { SiteHeader, type SiteNavItem } from "@/components/shared/SiteHeader";

const NAV_ITEMS: SiteNavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export function LandingHeader() {
  return (
    <SiteHeader
      navItems={NAV_ITEMS}
      right={
        <Link
          href="/auth/login"
          className="rounded-full border border-[#ecdfc9] px-6 py-2.5 text-sm font-bold text-[#2b2b2b] transition hover:bg-[#faf7f2]"
        >
          Login
        </Link>
      }
    />
  );
}
