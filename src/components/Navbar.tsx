import { useEffect, useState } from "react";

interface NavbarProps {
  onCTA: () => void;
}

export default function Navbar({ onCTA }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "glass"
          }`}
        >
          <a href="#" className="flex items-center gap-2.5 clickable">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D54B] to-[#00FF85] flex items-center justify-center neon-green-soft">
              <i className="fa-solid fa-bolt text-[#050505] text-base"></i>
            </div>
            <span className="font-['Space_Grotesk'] font-bold text-white text-base md:text-lg tracking-tight">
              Gift Access
            </span>
            <span className="hidden sm:inline text-[#00FF85] font-['Space_Grotesk'] font-bold text-base md:text-lg">
              Rewards
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            <a href="#features" className="text-sm text-[#A0A0A0] hover:text-white transition-colors">
              Features
            </a>
            <a href="#rewards" className="text-sm text-[#A0A0A0] hover:text-white transition-colors">
              Rewards
            </a>
            <a href="#testimonials" className="text-sm text-[#A0A0A0] hover:text-white transition-colors">
              Reviews
            </a>
            <a href="#faq" className="text-sm text-[#A0A0A0] hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onCTA}
              className="btn-primary !py-2 !px-4 md:!px-5 !text-xs md:!text-sm"
            >
              <i className="fa-solid fa-shield-halved"></i>
              <span>Check Eligibility</span>
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-white"
            >
              <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="lg:hidden mobile-menu mt-2 glass-strong rounded-2xl p-4 space-y-1">
            <a href="#features" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-colors">
              Features
            </a>
            <a href="#rewards" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-colors">
              Rewards
            </a>
            <a href="#testimonials" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-colors">
              Reviews
            </a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-colors">
              FAQ
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
