interface FinalCTAProps {
  onCTA: () => void;
}

export default function FinalCTA({ onCTA }: FinalCTAProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="relative max-w-5xl mx-auto">
          {/* Background glow */}
          <div className="absolute inset-0 -m-12 md:-m-20 rounded-[40px] bg-[radial-gradient(circle,rgba(0,213,75,0.25)_0%,transparent_70%)] blur-2xl"></div>

          <div className="relative glass-card rounded-3xl md:rounded-[32px] p-8 md:p-14 lg:p-20 text-center overflow-hidden border-[#00FF85]/20">
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}></div>

            {/* Orbs */}
            <div className="orb orb-1 -top-20 -left-20 opacity-40"></div>
            <div className="orb orb-2 -bottom-20 -right-20 opacity-40"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,213,75,0.15)] border border-[#00FF85]/40 text-[#00FF85] text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="pulse-dot"></span>
                <span>Limited Time</span>
              </div>

              <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight text-white leading-[1.05] max-w-3xl mx-auto">
                Access Your{" "}
                <span className="bg-gradient-to-r from-[#00D54B] to-[#00FF85] bg-clip-text text-transparent neon-text">
                  Reward
                </span>{" "}
                Now
              </h2>

              <p className="mt-5 md:mt-6 text-base md:text-lg text-[#A0A0A0] leading-relaxed max-w-xl mx-auto">
                Join thousands of verified members. Inventory updates in real time — secure your access before availability shifts.
              </p>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <button
                  onClick={onCTA}
                  className="btn-primary !text-base md:!text-lg !px-8 md:!px-10 !py-4 md:!py-5 neon-green w-full sm:w-auto"
                >
                  <i className="fa-solid fa-bolt"></i>
                  <span>Check Eligibility</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>

              <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs md:text-sm text-[#A0A0A0]">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-halved text-[#00FF85]"></i>
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-lock text-[#00FF85]"></i>
                  <span>256-bit Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-[#00FF85]"></i>
                  <span>Verified Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
