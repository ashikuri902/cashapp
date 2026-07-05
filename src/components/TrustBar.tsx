import AnimatedCounter from "./AnimatedCounter";

export default function TrustBar() {
  const stats = [
    {
      icon: "fa-shield-halved",
      value: 256,
      suffix: "-bit",
      label: "SSL Encryption",
    },
    {
      icon: "fa-users",
      value: 245831,
      label: "Verified Members",
    },
    {
      icon: "fa-chart-line",
      value: 98.7,
      decimals: 1,
      suffix: "%",
      label: "Success Rate",
    },
    {
      icon: "fa-face-smile",
      value: 4.9,
      decimals: 1,
      suffix: "/5",
      label: "User Satisfaction",
    },
  ];

  return (
    <section className="relative py-10 md:py-14 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card relative glass-card rounded-2xl p-5 md:p-6 group"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[rgba(0,213,75,0.18)] to-[rgba(0,255,133,0.05)] border border-[#00FF85]/20 flex items-center justify-center shrink-0">
                  <i className={`fa-solid ${stat.icon} text-[#00FF85] text-base md:text-lg`}></i>
                </div>
                <div className="min-w-0">
                  <div className="font-['Space_Grotesk'] font-bold text-xl md:text-2xl text-white">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix || ""}
                      decimals={stat.decimals || 0}
                      duration={2200}
                    />
                  </div>
                  <div className="text-xs md:text-sm text-[#A0A0A0] mt-0.5 truncate">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
