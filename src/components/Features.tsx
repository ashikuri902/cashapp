interface FeaturesProps {}

const features = [
  {
    icon: "fa-bolt",
    title: "Fast Access",
    description:
      "Get redirected to your reward offer in under 60 seconds with our streamlined verification.",
  },
  {
    icon: "fa-shield-halved",
    title: "Secure Process",
    description:
      "Bank-grade 256-bit SSL encryption protects every interaction on our platform.",
  },
  {
    icon: "fa-mobile-screen",
    title: "Mobile Friendly",
    description:
      "Optimized for iPhone and Android — flawless experience on any device, anywhere.",
  },
  {
    icon: "fa-user-shield",
    title: "Privacy Protection",
    description:
      "Zero data harvesting. Your information stays yours — always encrypted, never sold.",
  },
  {
    icon: "fa-headset",
    title: "Premium Support",
    description:
      "24/7 priority support team ready to assist with any question about your reward.",
  },
  {
    icon: "fa-rocket",
    title: "Instant Availability",
    description:
      "Real-time inventory means if you see it, you can claim it — no waiting lists.",
  },
];

export default function Features(_: FeaturesProps) {
  return (
    <section id="features" className="relative py-20 md:py-28 overflow-hidden">
      <div className="orb orb-1 top-1/3 -right-40 opacity-15" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,213,75,0.08)] border border-[rgba(0,255,133,0.25)] text-[#00FF85] text-xs font-semibold tracking-wider uppercase mb-5">
            <i className="fa-solid fa-sparkles"></i>
            <span>Why FluxReward</span>
          </div>
          <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.05]">
            Built for those who
            <br />
            <span className="bg-gradient-to-r from-[#00D54B] to-[#00FF85] bg-clip-text text-transparent">
              move first.
            </span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#A0A0A0] leading-relaxed">
            Premium infrastructure, transparent process, and rewards that actually arrive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card glass-card rounded-2xl p-6 md:p-7 clickable group"
            >
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(0, 255, 133, 0.3)" }}
              ></div>

              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[rgba(0,213,75,0.2)] to-[rgba(0,255,133,0.05)] border border-[#00FF85]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <i className={`fa-solid ${feature.icon} text-[#00FF85] text-xl md:text-2xl`}></i>
                </div>

                <h3 className="font-['Space_Grotesk'] font-bold text-xl md:text-2xl text-white mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#00FF85] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
