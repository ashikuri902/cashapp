import { useEffect, useState } from "react";
import CashCard from "./CashCard";

interface ShowcaseProps {
  onCTA: () => void;
}

export default function RewardShowcase({ onCTA }: ShowcaseProps) {
  const [availability, setAvailability] = useState(73);
  const [reserved, setReserved] = useState(412);
  const [verified, setVerified] = useState(18420);

  useEffect(() => {
    const t = setInterval(() => {
      setAvailability((prev) => Math.max(15, Math.min(94, prev + (Math.random() > 0.5 ? 1 : -1))));
      setReserved((prev) => prev + Math.floor(Math.random() * 2) + 1);
      setVerified((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="rewards" className="relative py-20 md:py-28 overflow-hidden">
      <div className="orb orb-2 top-1/4 -right-32 opacity-20" />
      <div className="orb orb-1 bottom-0 -left-32 opacity-20" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Card Side */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 -m-16 rounded-full bg-[radial-gradient(circle,rgba(0,213,75,0.3)_0%,transparent_60%)] blur-2xl"></div>
            <div className="relative">
              <CashCard />
            </div>

            {/* Floating scarcity card */}
            <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 glass-card rounded-2xl px-5 py-3 shadow-2xl neon-green-soft">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-fire text-[#00FF85]"></i>
                <div>
                  <div className="text-[10px] text-[#A0A0A0] uppercase tracking-wider">Scarcity</div>
                  <div className="text-sm font-['Space_Grotesk'] font-bold text-white">
                    Only <span className="text-[#00FF85]">{availability}%</span> left today
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,213,75,0.08)] border border-[rgba(0,255,133,0.25)] text-[#00FF85] text-xs font-semibold tracking-wider uppercase mb-5">
              <i className="fa-solid fa-gift"></i>
              <span>Featured Reward</span>
            </div>

            <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.05]">
              Premium Cash App
              <br />
              <span className="bg-gradient-to-r from-[#00D54B] to-[#00FF85] bg-clip-text text-transparent">
                $1,000 Gift Card
              </span>
            </h2>

            <p className="mt-5 text-base md:text-lg text-[#A0A0A0] leading-relaxed max-w-xl">
              The most exclusive reward on FluxReward. Limited inventory, instant access for verified members.
            </p>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
              <div className="glass-card rounded-2xl p-4 md:p-5">
                <div className="flex items-center gap-2 text-xs text-[#A0A0A0] uppercase tracking-wider mb-1.5">
                  <span className="pulse-dot"></span>
                  <span>Availability</span>
                </div>
                <div className="font-['Space_Grotesk'] font-bold text-3xl text-white">
                  {availability}<span className="text-[#00FF85]">%</span>
                </div>
                <div className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#00D54B] to-[#00FF85] rounded-full transition-all duration-700"
                    style={{ width: `${availability}%` }}
                  ></div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 md:p-5">
                <div className="flex items-center gap-2 text-xs text-[#A0A0A0] uppercase tracking-wider mb-1.5">
                  <i className="fa-solid fa-bolt text-[#00FF85]"></i>
                  <span>Reserved Today</span>
                </div>
                <div className="font-['Space_Grotesk'] font-bold text-3xl text-white tabular-nums">
                  {reserved.toLocaleString()}
                </div>
                <div className="text-xs text-[#A0A0A0] mt-1">users in last hour</div>
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button onClick={onCTA} className="btn-primary neon-green">
                <span>FluxReward</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <div className="flex items-center gap-2 text-sm text-[#A0A0A0] px-2">
                <i className="fa-solid fa-users text-[#00FF85]"></i>
                <span>Verified today: <span className="text-white font-semibold tabular-nums">{verified.toLocaleString()}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
