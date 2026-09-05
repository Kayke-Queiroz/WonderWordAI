import { Button } from "@/components/shared/Button";

export function Hero() {
  return (
    <section className="px-6 sm:px-12 pt-12 pb-20">
      <span className="inline-block bg-[#F9D65C] text-[11px] font-black uppercase tracking-wide px-3 py-1.5 rounded-full text-gray-800">
        Notice!
      </span>

      <div className="mt-6 grid sm:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-[42px] sm:text-[52px] font-black text-[#1A1A2E] leading-[1.08]">
            AI Reading Coach
            <br />
            for K–5 Kids
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-6 text-gray-500">
            Transform stressful, dry at-home reading assignments into interactive, narrative-driven play.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Button as="a" href="#pricing" variant="peach" size="lg">
              Start Free Trial
            </Button>
            <Button as="a" href="/auth/login" variant="pastelMint" size="lg">
              Log In
            </Button>
          </div>

          <p className="mt-6 text-[13px] font-bold text-[#0F9C8E]">
            real-time feedback &nbsp;·&nbsp; biweekly reports &nbsp;·&nbsp; activity recommendations
          </p>
        </div>

        <div className="relative bg-[#FDF1E7] rounded-[28px] h-72 flex items-center justify-center overflow-visible">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing-assets/kids-reading.png"
            alt="Illustration of children reading together"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
