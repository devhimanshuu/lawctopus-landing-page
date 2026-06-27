"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the duration and format of the course?",
    a: "The course runs for 6 months (July 1 – December 31) and is delivered through online live sessions combined with recorded lectures. You get 54 live training sessions, 85 hours of live content, and 32 hours of recorded content with lifetime access.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes! Lawctopus offers a 100% money-back guarantee. If you complete the course sincerely (attend 66% of live classes with video ON and submit all assignments) and are still unsatisfied, you can request a full refund within 10 days of course completion.",
  },
  {
    q: "What are the attendance requirements?",
    a: "You need to attend a minimum of 66% of live classes with your video ON, and submit all assignments with passing grades to receive your certificate and be eligible for the money-back guarantee.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. You'll receive a Completion Certificate upon successfully finishing the course. Top performers also receive a Merit Certificate to further distinguish their achievement.",
  },
  {
    q: "How many assignments will I draft, and do I get feedback?",
    a: "You'll complete 17 assignments in total — 10 contract-drafting assignments plus 7 freelancing, CV, and career assignments. Every draft is thoroughly evaluated by faculty with personalised, individual feedback. You can reuse your 10 fine-tuned contracts in your Upwork portfolio.",
  },
  {
    q: "Do I get AI training and tools?",
    a: "Yes. Every learner gets live AI sessions with Indian Kanoon (Prism) & Jurisphere, a 4-hour recorded 'AI for Lawyers' workshop, 1-month free access to Indian Kanoon's Prism AI tool, and a 31-page eBook of ready-to-use AI prompts across six practice areas.",
  },
  {
    q: "Is there a shorter/cheaper option?",
    a: "Yes, Lawctopus also offers a 2-month alternative course at ₹7,999 for those who want a shorter introduction to contract drafting and negotiation fundamentals.",
  },
  {
    q: "How do I contact the team for more info?",
    a: "Email: courses@lawctopus.com (24-hour response time). Career counseling: +91 9214883452. General inquiries: +91 90235 43927.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-24 bg-gray-50/50" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`bg-white border rounded-2xl transition-all duration-300 ${
                open === i
                  ? "border-gold shadow-[0_10px_40px_rgba(201,168,76,0.1)]"
                  : "border-gray-100 shadow-sm hover:border-gold/30 hover:shadow-md"
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-lg font-bold text-gray-900 pr-4">
                  {f.q}
                </span>
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    open === i ? "bg-gold text-white" : "bg-gray-50 text-gold"
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
