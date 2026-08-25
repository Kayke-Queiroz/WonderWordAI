const plans = [
  {
    name: "FREE",
    cardStyle: "bg-white border border-gray-200",
    textStyle: "text-gray-900",
  },
  {
    name: "PLAN 1",
    cardStyle: "bg-[#E8604F]",
    textStyle: "text-white",
  },
  {
    name: "PLAN 2",
    cardStyle: "bg-[#F5A623]",
    textStyle: "text-[#1A1A2E]",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 sm:px-12 py-20">
      <h2 className="text-center text-[32px] font-serif font-bold text-[#a3352b]">
        Simple, Honest Pricing
      </h2>
      <p className="mt-2 text-center text-[15px] text-gray-500">
        We&apos;re still finalizing plan details — pricing is coming soon.
      </p>

      <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl p-7 ${plan.cardStyle} ${plan.textStyle}`}
          >
            <p className="font-black text-base">{plan.name}</p>
            <p className="mt-2 text-4xl font-black">???</p>

            <div className="mt-5 rounded-2xl border border-dashed border-current/30 px-4 py-6 text-center text-sm font-bold opacity-80">
              Stay tuned! We haven&apos;t finalized pricing or plan features yet.
            </div>

            <button
              disabled
              aria-disabled="true"
              className="mt-7 w-full cursor-not-allowed rounded-full border border-current/30 py-3 font-black text-sm opacity-60"
            >
              Coming Soon
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
