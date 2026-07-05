import { useEffect, useState } from "react";

interface Notification {
  id: number;
  name: string;
  location: string;
  amount: string;
  time: string;
  action: string;
}

const names = [
  "Michael", "Sarah", "David", "Emma", "James", "Olivia", "Daniel", "Sophia",
  "Liam", "Ava", "Noah", "Isabella", "Ethan", "Mia", "Lucas", "Charlotte"
];
const locations = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
  "San Antonio", "San Diego", "Dallas", "Austin", "Miami", "Atlanta",
  "Seattle", "Boston", "Denver", "Portland"
];

function generateNotification(id: number): Notification {
  return {
    id,
    name: names[Math.floor(Math.random() * names.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    amount: "$1,000",
    time: "just now",
    action: ["claimed", "received", "accessed", "unlocked"][Math.floor(Math.random() * 4)],
  };
}

export default function LiveActivity() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [current, setCurrent] = useState<Notification | null>(null);

  useEffect(() => {
    let idCounter = 1;

    // Initial notifications
    const initial = Array.from({ length: 6 }, () => generateNotification(idCounter++));
    setNotifications(initial);

    // Popup notification
    const showPopup = () => {
      const n = generateNotification(idCounter++);
      setCurrent(n);
      setTimeout(() => {
        setCurrent((c) => (c?.id === n.id ? null : c));
      }, 4500);
    };

    const popupInterval = setInterval(showPopup, 5500);
    const initialDelay = setTimeout(showPopup, 2000);

    // Update existing notifications
    const refreshInterval = setInterval(() => {
      const n = generateNotification(idCounter++);
      setNotifications((prev) => [n, ...prev.slice(0, 8)]);
    }, 3500);

    return () => {
      clearInterval(popupInterval);
      clearInterval(refreshInterval);
      clearTimeout(initialDelay);
    };
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="orb orb-3 top-1/4 left-1/4 opacity-15" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,213,75,0.08)] border border-[rgba(0,255,133,0.25)] text-[#00FF85] text-xs font-semibold tracking-wider uppercase mb-5">
            <span className="pulse-dot"></span>
            <span>Live Activity</span>
          </div>
          <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.05]">
            Real users.{" "}
            <span className="bg-gradient-to-r from-[#00D54B] to-[#00FF85] bg-clip-text text-transparent">
              Real rewards.
            </span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#A0A0A0] leading-relaxed">
            Members across the country are accessing their Cash App rewards right now.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-2 md:p-3">
            <div className="space-y-2 max-h-[420px] overflow-hidden">
              {notifications.map((n, i) => (
                <div
                  key={n.id}
                  className="flex items-center gap-3 md:gap-4 px-3 py-3 md:px-4 md:py-3.5 rounded-2xl bg-[rgba(13,13,13,0.6)] border border-white/5 hover:border-[#00FF85]/20 transition-all"
                  style={{
                    opacity: 1 - i * 0.08,
                    transform: `translateY(0) scale(${1 - i * 0.015})`,
                  }}
                >
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#00D54B]/30 to-[#00FF85]/10 border border-[#00FF85]/30 flex items-center justify-center font-['Space_Grotesk'] font-bold text-white text-sm md:text-base">
                      {n.name[0]}
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00FF85] border-2 border-[#0D0D0D]"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm md:text-base text-white">
                      <span className="font-semibold">{n.name}</span>{" "}
                      <span className="text-[#A0A0A0]">from {n.location}</span>{" "}
                      <span className="text-[#A0A0A0]">{n.action}</span>{" "}
                      <span className="font-semibold text-[#00FF85]">{n.amount}</span>
                    </div>
                    <div className="text-xs text-[#A0A0A0] mt-0.5 flex items-center gap-1.5">
                      <i className="fa-solid fa-clock text-[10px]"></i>
                      <span>{n.time}</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(0,213,75,0.1)] border border-[#00FF85]/20">
                    <i className="fa-solid fa-check text-[#00FF85] text-[10px]"></i>
                    <span className="text-[10px] font-bold text-[#00FF85] uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-[#A0A0A0]">
            <i className="fa-solid fa-shield text-[#00FF85] mr-2"></i>
            Activity feed updates in real time. All identities remain anonymous.
          </div>
        </div>
      </div>

      {/* Floating Notification Popup */}
      {current && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 notification-enter">
          <div className="glass-strong rounded-2xl p-4 pr-5 shadow-2xl neon-green-soft max-w-xs">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D54B] to-[#00FF85] flex items-center justify-center font-['Space_Grotesk'] font-bold text-[#050505] text-sm">
                  {current.name[0]}
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00FF85] border-2 border-[#0D0D0D]"></span>
              </div>
              <div className="min-w-0">
                <div className="text-sm text-white font-semibold truncate">
                  {current.name} <span className="text-[#A0A0A0] font-normal">{current.action}</span>
                </div>
                <div className="text-xs text-[#00FF85] font-bold">
                  {current.amount} Reward Unlocked
                </div>
              </div>
              <i className="fa-solid fa-circle-check text-[#00FF85] text-lg shrink-0"></i>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
