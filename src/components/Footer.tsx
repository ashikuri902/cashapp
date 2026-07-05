export default function Footer() {
  return (
    <footer className="relative pt-16 md:pt-20 pb-8 border-t border-white/5 overflow-hidden">
      <div className="orb orb-3 top-0 left-1/3 opacity-10" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D54B] to-[#00FF85] flex items-center justify-center neon-green-soft">
                <i className="fa-solid fa-bolt text-[#050505] text-base"></i>
              </div>
              <span className="font-['Space_Grotesk'] font-bold text-white text-lg">
                Prime Access <span className="text-[#00FF85]">Rewards</span>
              </span>
            </a>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-5">
              Premium access to exclusive rewards. Built with security, speed, and transparency at the core.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: "fa-x-twitter", label: "X" },
                { icon: "fa-instagram", label: "Instagram" },
                { icon: "fa-tiktok", label: "TikTok" },
                { icon: "fa-discord", label: "Discord" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[rgba(0,213,75,0.15)] border border-white/10 hover:border-[#00FF85]/30 flex items-center justify-center text-[#A0A0A0] hover:text-[#00FF85] transition-all"
                >
                  <i className={`fa-brands ${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-['Space_Grotesk'] font-bold text-white text-sm uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {["Featured Rewards", "How It Works", "Members", "Testimonials"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-[#A0A0A0] hover:text-[#00FF85] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-['Space_Grotesk'] font-bold text-white text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {["Help Center", "Contact Us", "FAQ", "Live Chat"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-[#A0A0A0] hover:text-[#00FF85] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-['Space_Grotesk'] font-bold text-white text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-[#A0A0A0] hover:text-[#00FF85] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-7 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#A0A0A0]">
            © {new Date().getFullYear()} Prime Access Rewards. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-[#A0A0A0]">
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-shield-halved text-[#00FF85]"></i>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-lock text-[#00FF85]"></i>
              <span>256-bit Encrypted</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-7 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-[11px] md:text-xs text-[#A0A0A0] leading-relaxed text-center max-w-3xl mx-auto">
            <i className="fa-solid fa-circle-info text-[#00FF85] mr-1.5"></i>
            Prime Access Rewards is an independent rewards access platform. Cash App is a trademark of Block, Inc. This site is not affiliated with, endorsed by, or sponsored by Block, Inc. Reward availability, terms, and conditions are subject to the third-party offer provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
