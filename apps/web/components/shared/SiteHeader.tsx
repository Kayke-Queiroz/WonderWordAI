import Link from "next/link";
import type { ReactNode } from "react";

export type SiteNavItem = {
  label: string;
  /** Omit to render a non-interactive "current page" label instead of a link. */
  href?: string;
  /** Bold + underlined styling for the active route. */
  active?: boolean;
  /** Greyed out, not clickable — for routes that don't exist yet. */
  disabled?: boolean;
};

type SiteHeaderProps = {
  navItems?: SiteNavItem[];
  right?: ReactNode;
  logoHref?: string;
};

export function SiteHeader({ navItems, right, logoHref = "/" }: SiteHeaderProps) {
  return (
    <header className="border-b border-[#ecdfc9] bg-white">
      <div className="relative mx-auto flex max-w-6xl 2xl:max-w-[1500px] min-[1800px]:max-w-[1700px] items-center justify-between px-6 py-4">
        <Link href={logoHref}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="WonderWord AI" className="h-8 w-auto cursor-pointer" />
        </Link>

        {navItems && navItems.length > 0 ? (
          <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-8 text-sm font-medium text-[#4a4a4a] md:flex">
            {navItems.map((item) => {
              if (!item.href) {
                return (
                  <span
                    key={item.label}
                    className="border-b-2 border-[#a3352b] pb-1 font-bold text-[#2b2b2b] cursor-default"
                  >
                    {item.label}
                  </span>
                );
              }

              if (item.disabled) {
                return (
                  <span key={item.label} className="hover:text-[#2b2b2b] opacity-50 cursor-not-allowed">
                    {item.label}
                  </span>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={
                    item.active
                      ? "border-b-2 border-[#a3352b] pb-1 font-bold text-[#2b2b2b]"
                      : "hover:text-[#2b2b2b]"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}

        {right}
      </div>
    </header>
  );
}
