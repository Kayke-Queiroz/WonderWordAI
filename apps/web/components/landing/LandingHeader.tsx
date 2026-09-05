import { SiteHeader, type SiteNavItem } from "@/components/shared/SiteHeader";
import { Button } from "@/components/shared/Button";

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
        <Button as="a" href="/auth/login" variant="outline" size="sm">
          Login
        </Button>
      }
    />
  );
}
