import { useEffect, useState } from "react";
import CashCard from "./CashCard";
import AnimatedCounter from "./AnimatedCounter";

interface HeroProps {
  onCTA: () => void;
}

export default function Hero({ onCTA }: HeroProps) {
  const [liveUsers, setLiveUsers] = useState(12847);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUsers((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-20 overflow-hidden">
      {/* Floating Orbs */}
      <div className="orb orb-1 -top-20 -left-20 opacity-30" />
      <div className="orb orb-2 top-1/3 -right-32 opacity-25" />
      <div className="orb orb-3 bottom-0 left-1/3 opacity-20" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Live Tag */}
            <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,213,75,0.08)] border border-[rgba(0,255,133,0.25)] text-[#00FF85] text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="pulse-dot"></span>
              <span>Limited Rewards Available</span>
            </div>

            {/* Headline */}
            <h1 className="reveal reveal-delay-1 font-['Space_Grotesk'] font-bold text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] leading-[1.05] tracking-tight text-white">
              Get a{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#00D54B] via-[#00FF85] to-[#00D54B] bg-clip-text text-transparent neon-text">
                  $1000
                </span>
              </span>
              <br />
              Cash App Gift Card
            </h1>

            {/* Subheadline */}
            <p className="reveal reveal-delay-2 mt-5 md:mt-6 text-base md:text-lg text-[#A0A0A0] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Limited rewards available today. Check availability and access your
              reward instantly — exclusive for verified members.
            </p>

            {/* CTA */}
            <div className="reveal reveal-delay-3 mt-7 md:mt-9 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <button onClick={onCTA} className="btn-primary !text-base !px-7 !py-4 w-full sm:w-auto neon-green">
                <span>Check Eligibility</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <a href="#features" className="btn-ghost !py-3.5 !px-5 w-full sm:w-auto">
                <i className="fa-solid fa-play text-xs"></i>
                <span>Learn More</span>
              </a>
            </div>

            {/* Live Counter */}
            <div className="reveal reveal-delay-4 mt-8 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="pulse-dot"></span>
                <span className="text-[#A0A0A0]">Active users:</span>
                <span className="text-white font-['Space_Grotesk'] font-semibold tabular-nums">
                  <AnimatedCounter end={liveUsers} duration={1500} />
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10"></div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-bolt text-[#00FF85]"></i>
                <span className="text-[#A0A0A0]">Avg. payout time:</span>
                <span className="text-white font-['Space_Grotesk'] font-semibold">
                  &lt; 60s
                </span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="reveal reveal-delay-4 mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-5">
              <div className="flex items-center gap-2 text-xs text-[#A0A0A0]">
                <i className="fa-solid fa-shield-halved text-[#00FF85]"></i>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#A0A0A0]">
                <i className="fa-solid fa-circle-check text-[#00FF85]"></i>
                <span>Verified</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#A0A0A0]">
                <i className="fa-solid fa-lock text-[#00FF85]"></i>
                <span>Encrypted</span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative reveal reveal-delay-2">
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 -m-12 md:-m-20 rounded-full bg-[radial-gradient(circle,rgba(0,213,75,0.35)_0%,transparent_60%)] blur-2xl"></div>

              <CashCard />

              {/* Floating mini-cards */}
              <div className="hidden md:block absolute -top-6 -left-6 glass-card rounded-2xl p-3 px-4 shadow-2xl float-anim" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00D54B] to-[#00FF85] flex items-center justify-center">
                    <i className="fa-solid fa-check text-[#050505] text-sm"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#A0A0A0] uppercase tracking-wider">Status</div>
                    <div className="text-sm font-semibold text-white">Reward Active</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-6 -right-6 glass-card rounded-2xl p-3 px-4 shadow-2xl float-anim" style={{ animationDelay: "1.2s" }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[rgba(0,213,75,0.15)] border border-[#00FF85]/40 flex items-center justify-center">
                    <i className="fa-solid fa-bolt text-[#00FF85] text-sm"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#A0A0A0] uppercase tracking-wider">Instant</div>
                    <div className="text-sm font-semibold text-white">Access</div>
                  </div>
                </div>
              </div>

              {/* Avatars */}
              <div className="hidden lg:flex absolute -top-8 right-8 items-center">
                <div className="flex -space-x-2">
                  {["A", "M", "J", "S"].map((n, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-2 border-[#050505] flex items-center justify-center text-xs font-bold text-white"
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <div className="ml-2 px-3 py-1.5 rounded-full bg-[#0D0D0D] border border-white/10 text-xs text-white">
                  +9.2k today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
