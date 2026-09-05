import { Button } from "@/components/shared/Button";

export function CtaBand() {
  return (
    <section className="bg-[#9B2335] text-white text-center py-20 px-6">
      <h2 className="text-2xl sm:text-[32px] font-black max-w-lg mx-auto leading-tight">
        Ready to make reading feel like an adventure?
      </h2>

      <Button as="a" href="/auth/login" variant="whiteMaroon" size="lg" className="mt-7">
        Start Free Today
      </Button>
      <p className="mt-3 text-xs text-white/80 font-semibold">
        No credit card required
      </p>
    </section>
  );
}
