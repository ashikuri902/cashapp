import { useEffect, useRef } from "react";

export default function CashCard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    if (window.matchMedia("(hover: none)").matches) {
      // Mobile floating animation
      let raf = 0;
      const start = performance.now();
      const animate = (now: number) => {
        const t = (now - start) / 1000;
        const rotateY = Math.sin(t * 0.6) * 8;
        const rotateX = Math.sin(t * 0.4 + 1) * 5;
        const translateY = Math.sin(t * 1.2) * 8;
        card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${translateY}px)`;
        raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }

    const handleMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 14;
      const rotateX = -((y - centerY) / centerY) * 10;
      card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };

    const handleLeave = () => {
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    wrap.addEventListener("mousemove", handleMove);
    wrap.addEventListener("mouseleave", handleLeave);

    return () => {
      wrap.removeEventListener("mousemove", handleMove);
      wrap.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="cash-card-wrap float-anim">
      <div ref={cardRef} className="cash-card">
        <div className="cash-card-shine" />

        {/* Cash App Logo */}
        <div className="absolute top-5 left-5 md:top-6 md:left-6 flex items-center gap-2 z-10">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#050505] flex items-center justify-center">
            <i className="fa-solid fa-dollar-sign text-[#00FF85] text-sm md:text-base"></i>
          </div>
          <span className="text-[#050505] font-['Space_Grotesk'] font-bold text-base md:text-lg">
            Cash App
          </span>
        </div>

        {/* Reward Amount */}
        <div className="absolute top-5 right-5 md:top-6 md:right-6 z-10">
          <div className="text-[10px] md:text-xs font-bold text-[#050505]/70 tracking-widest uppercase">
            Reward Value
          </div>
          <div className="text-[#050505] font-['Space_Grotesk'] font-bold text-2xl md:text-3xl leading-none mt-0.5">
            $1,000
          </div>
        </div>

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="text-[#050505]/60 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Gift Card
            </div>
            <div className="text-[#050505] font-['Space_Grotesk'] font-bold text-lg md:text-xl mt-1">
              PREMIUM
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6 flex items-end justify-between z-10">
          <div>
            <div className="text-[10px] md:text-xs text-[#050505]/60 font-bold tracking-widest uppercase">
              Card Holder
            </div>
            <div className="text-[#050505] font-['Space_Grotesk'] font-semibold text-sm md:text-base tracking-wider mt-0.5">
              PRIME MEMBER
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#050505]/20 border-2 border-[#050505]/30"></div>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#050505]/30 border-2 border-[#050505]/40 -ml-4"></div>
          </div>
        </div>

        {/* Chip */}
        <div className="absolute bottom-16 md:bottom-20 left-5 md:left-6 w-10 h-7 md:w-12 md:h-9 rounded-md bg-gradient-to-br from-[#050505]/30 to-[#050505]/10 border border-[#050505]/20 z-10"></div>
      </div>
    </div>
  );
}
