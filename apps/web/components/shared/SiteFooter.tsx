import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#f0e6d8] bg-white py-8">
      <div className="mx-auto flex max-w-6xl 2xl:max-w-[1500px] min-[1800px]:max-w-[1700px] flex-col items-center justify-between gap-4 px-6 text-sm text-[#8a8a8a] md:flex-row">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="WonderWord AI" className="h-6 w-auto opacity-80" />
          <p className="ml-1 mt-1">© 2026 WonderWord AI.</p>
        </div>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-[#2b2b2b]">Privacy</Link>
          <Link href="/terms" className="hover:text-[#2b2b2b]">Terms</Link>
          <span className="opacity-50 cursor-not-allowed">Support</span>
          <span className="opacity-50 cursor-not-allowed">About Us</span>
        </div>
      </div>
    </footer>
  );
}
