import { ShieldCheck, CheckCircle2, Mail } from "lucide-react";

export function AcceptanceSection() {
  return (
    <section id="acceptance">
      <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
      <p className="mt-4 leading-relaxed text-[#4a4a4a]">
        By accessing or using WonderWord AI, you agree to be bound by
        these Terms of Service and all applicable laws and
        regulations. If you do not agree with any of these terms, you
        are prohibited from using or accessing this site.
      </p>
      <p className="mt-4 leading-relaxed text-[#4a4a4a]">
        Our platform is designed for educational enrichment. These
        terms govern the relationship between you (the parent,
        guardian, or educator) and WonderWord AI.
      </p>
    </section>
  );
}

export function UseOfServiceSection() {
  return (
    <section id="use-of-service">
      <h2 className="text-2xl font-bold">Use of Service</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-[#fbeceb] p-5">
          <h3 className="font-bold text-[#a3352b]">For Parents</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#5a3d3a]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a3352b]" />
              Oversee account setup
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a3352b]" />
              Manage subscription settings
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a3352b]" />
              Review AI-generated stories
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-[#fbeceb] p-5">
          <h3 className="font-bold text-[#a3352b]">For Children</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#5a3d3a]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a3352b]" />
              Play and learn safely
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a3352b]" />
              Respect other users
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a3352b]" />
              Follow writing prompts
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ChildrensPrivacySection() {
  return (
    <section
      id="childrens-privacy"
      className="relative max-w-5xl overflow-hidden rounded-2xl border border-[#e8c84a] bg-[#fdf3d8] p-7"
    >
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute -right-4 top-2 h-24 w-24 text-[#e8c84a]/25"
        fill="none"
      >
        <path
          d="M50 5 L90 20 V50 C90 75 70 90 50 95 C30 90 10 75 10 50 V20 Z"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>

      <div className="relative flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8a6d1d]/15 text-[#8a6d1d]">
          <ShieldCheck className="h-4 w-4" />
        </div>
        <h2 className="text-xl font-bold">
          Children&apos;s Privacy (COPPA)
        </h2>
      </div>

      <p className="relative mt-4 font-semibold text-[#2b2b2b]">
        We take your child&apos;s safety seriously.
      </p>
      <p className="relative mt-2 leading-relaxed text-[#6b5d33]">
        WonderWord AI is fully compliant with the Children&apos;s
        Online Privacy Protection Act (COPPA). We do not collect
        personal information from children without explicit parental
        consent. Accounts for children under 13 must be created and
        verified by a parent or legal guardian.
      </p>

      <div className="relative mt-5 rounded-lg border border-[#e8c84a]/60 bg-white/60 p-4 text-sm text-[#5a4a10]">
        <strong>Special Notice:</strong> We use AI to moderate all
        content. No private personal identifiers are shared with our
        large language models.
      </div>
    </section>
  );
}

export function PaymentsSection() {
  return (
    <section id="payments">
      <h2 className="text-2xl font-bold">
        Payments &amp; Subscriptions
      </h2>
      <p className="mt-4 leading-relaxed text-[#4a4a4a]">
        WonderWord AI offers monthly and annual subscription plans.
        By subscribing, you authorize us to charge the applicable
        fees to your provided payment method.
      </p>

      <div
        id="cancellation"
        className="mt-6 border-l-2 border-[#ef6d4e] pl-5"
      >
        <h3 className="font-bold">Cancellation Policy</h3>
        <p className="mt-2 leading-relaxed text-[#4a4a4a]">
          You may cancel your subscription at any time via the
          Parent Dashboard. Cancellations take effect at the end of
          the current billing cycle. We do not offer partial refunds
          for mid-month cancellations.
        </p>
      </div>
    </section>
  );
}

export function LiabilitySection() {
  return (
    <section id="liability">
      <h2 className="text-2xl font-bold">Limitation of Liability</h2>
      <div className="mt-5 space-y-3 rounded-xl border border-[#ece6da] bg-[#f2ede3] p-5 text-sm leading-relaxed text-[#4a4a4a]">
        <p>
          WonderWord AI is provided &ldquo;as is.&rdquo; We strive
          for 100% uptime and accuracy, but we cannot guarantee that
          the AI will always produce perfect educational content.
        </p>
        <p>
          In no event shall WonderWord AI be liable for any damages
          arising out of the use or inability to use the materials
          on our website, even if notified orally or in writing of
          the possibility of such damage.
        </p>
      </div>
    </section>
  );
}

export function TermsContactSection() {
  return (
    <section
      id="contact"
      className="flex max-w-5xl flex-col items-start justify-between gap-6 rounded-2xl bg-[#df7856] p-8 text-white sm:flex-row sm:items-center"
    >
      <div>
        <h2 className="text-2xl font-bold">Questions?</h2>
        <p className="mt-2 max-w-sm text-white/90">
          Our support team is here to help you and your young
          reader.
        </p>
      </div>
      <button className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#c1523a] shadow-sm transition hover:bg-white/90">
        <Mail className="h-4 w-4" />
        Contact Support
      </button>
    </section>
  );
}
