import Link from "next/link";
import type { HeaderAuthState } from "@/lib/auth/server";
import { HeaderUserBadge } from "./HeaderUserBadge";

export function HeaderAuthAction({ auth }: { auth: HeaderAuthState }) {
  if (auth.loggedIn) {
    return <HeaderUserBadge name={auth.name} />;
  }

  return (
    <Link
      href="/auth/login"
      className="rounded-full border border-[#ecdfc9] px-6 py-2.5 text-sm font-bold text-[#2b2b2b] transition hover:bg-[#faf7f2]"
    >
      Login
    </Link>
  );
}
