import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#FDFAF5] font-body text-[#2b2b2b]">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <span className="inline-block rounded-full bg-[#fdf1d6] px-4 py-1.5 text-xs font-black uppercase tracking-wide text-[#a3352b]">
          404
        </span>
        <h1 className="mt-5 font-serif text-4xl font-black text-[#a3352b] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-7 text-[#5a5a5a]">
          We couldn&apos;t find the page you were looking for. It may have moved, or the link might be outdated.
        </p>
        <Button as="a" href="/" className="mt-8 font-extrabold">
          Back to Home
        </Button>
      </main>

      <SiteFooter />
    </div>
  );
}