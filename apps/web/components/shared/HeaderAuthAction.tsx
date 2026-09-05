import type { HeaderAuthState } from "@/lib/auth/server";
import { HeaderUserBadge } from "./HeaderUserBadge";
import { Button } from "./Button";

export function HeaderAuthAction({ auth }: { auth: HeaderAuthState }) {
  if (auth.loggedIn) {
    return <HeaderUserBadge name={auth.name} />;
  }

  return (
    <Button as="a" href="/auth/login" variant="outline" size="sm">
      Login
    </Button>
  );
}
