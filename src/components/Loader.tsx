import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    let current = 0;
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      current = Math.floor(eased * 100);
      setProgress(current);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setHidden(true);
          setTimeout(onComplete, 600);
        }, 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div className={`loader-screen ${hidden ? "hidden" : ""}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-1" style={{ top: "20%", left: "30%" }} />
        <div className="orb orb-2" style={{ bottom: "20%", right: "25%" }} />
      </div>
      <div className="loader-logo relative z-10">
        <div className="loader-logo-icon w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00D54B] to-[#00FF85] flex items-center justify-center neon-green-soft">
          <i className="fa-solid fa-bolt text-[#050505] text-xl"></i>
        </div>
        <span className="text-white">Premium Access</span>
      </div>
      <div className="loader-bar-track relative z-10">
        <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="loader-percent relative z-10 tabular-nums">
        {progress}% LOADING
      </div>
    </div>
  );
}
