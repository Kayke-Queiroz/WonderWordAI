"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is WonderWord safe for my child?",
    answer:
      "Yes. Every child profile is created and managed by a parent — children never sign up on their own. We don't sell data, and reading sessions are designed with child privacy in mind from the ground up.",
  },
  {
    question: "What grade levels does it support?",
    answer:
      "WonderWord is built for early readers, from Kindergarten through 5th grade (K-5).",
  },
  {
    question: "How does the AI reading coach work?",
    answer:
      "Your child scans a worksheet, then reads it aloud. WonderWord listens in real time, highlights each word as it's read, and gently flags words that need more practice — then turns that into a biweekly report and personalized practice ideas for you.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes — you'll be able to manage or cancel your subscription anytime from your Parent Dashboard, with no long-term contract required.",
  },
  {
    question: "Do I need any special equipment?",
    answer:
      "No special equipment needed — just a device with a camera (to scan worksheets) and a microphone (for reading aloud). Everything runs right in your browser.",
  },
];

export function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="px-6 sm:px-12 py-20">
      <h2 className="text-center text-[32px] font-bold font-serif text-[#a3352b]">
        Questions? We&apos;ve got answers.
      </h2>

      <div className="mt-12 max-w-2xl mx-auto grid gap-3">
        {faqs.map((faq, i) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
          >
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              aria-expanded={openFaq === i}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-bold text-gray-800 hover:bg-gray-50"
            >
              {faq.question}
              <span className="text-gray-400">
                {openFaq === i ? "︿" : "﹀"}
              </span>
            </button>
            {openFaq === i ? (
              <p className="px-6 pb-4 text-sm leading-6 text-gray-600">
                {faq.answer}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
