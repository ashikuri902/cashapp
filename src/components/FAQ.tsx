import { useState } from "react";

const faqs = [
  {
    question: "Is this offer available today?",
    answer:
      "Availability may vary based on location and current promotional inventory. Our live counter shows real-time stock — if it's above 0%, your region is currently eligible.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most users are redirected to the offer page within a few seconds. The full process from eligibility check to accessing your reward takes under 60 seconds on average.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28 overflow-hidden">
      <div className="orb orb-1 top-1/4 left-1/4 opacity-15" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          {/* Left Side */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,213,75,0.08)] border border-[rgba(0,255,133,0.25)] text-[#00FF85] text-xs font-semibold tracking-wider uppercase mb-5">
              <i className="fa-solid fa-circle-question"></i>
              <span>FAQ</span>
            </div>
            <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.05]">
              Questions,{" "}
              <span className="bg-gradient-to-r from-[#00D54B] to-[#00FF85] bg-clip-text text-transparent">
                answered.
              </span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-[#A0A0A0] leading-relaxed">
              Everything you need to know before checking eligibility. Still have questions? Our team responds within minutes.
            </p>
            <div className="mt-7 flex items-center gap-3 glass-card rounded-2xl p-4 max-w-md">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D54B] to-[#00FF85] flex items-center justify-center shrink-0">
                <i className="fa-solid fa-headset text-[#050505]"></i>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">24/7 Premium Support</div>
                <div className="text-xs text-[#A0A0A0]">Avg. response: 3 minutes</div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`faq-item glass-card rounded-2xl overflow-hidden clickable ${
                    isOpen ? "open border-[#00FF85]/30" : ""
                  }`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <button
                    className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 md:gap-4 flex-1 min-w-0">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isOpen
                          ? "bg-gradient-to-br from-[#00D54B] to-[#00FF85] text-[#050505]"
                          : "bg-[rgba(0,213,75,0.1)] border border-[#00FF85]/20 text-[#00FF85]"
                      }`}>
                        <span className="font-['Space_Grotesk'] font-bold text-sm md:text-base">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-['Space_Grotesk'] font-semibold text-lg md:text-xl text-white pt-1 md:pt-2">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="faq-icon w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                      <i className="fa-solid fa-plus text-xs"></i>
                    </div>
                  </button>
                  <div className={`faq-content ${isOpen ? "open" : ""}`}>
                    <div>
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[68px] md:pl-[80px]">
                        <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
