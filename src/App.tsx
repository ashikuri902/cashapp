import { useState } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import MouseGlow from "./components/MouseGlow";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import RewardShowcase from "./components/RewardShowcase";
import LiveActivity from "./components/LiveActivity";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import CTAFlow from "./components/CTAFlow";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [ctaOpen, setCtaOpen] = useState(false);

  const openCTA = () => setCtaOpen(true);
  const closeCTA = () => setCtaOpen(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <CustomCursor />
      <MouseGlow />
      <Particles />

      <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        {/* Global gradient backdrop */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 15% 10%, rgba(0, 213, 75, 0.08) 0%, transparent 35%), radial-gradient(circle at 85% 80%, rgba(0, 255, 133, 0.06) 0%, transparent 40%), radial-gradient(circle at 50% 50%, transparent 0%, rgba(5, 5, 5, 1) 60%)",
            }}
          />
        </div>

        <Navbar onCTA={openCTA} />

        <main className="relative z-10">
          <Hero onCTA={openCTA} />
          <TrustBar />
          <RewardShowcase onCTA={openCTA} />
          <LiveActivity />
          <Features />
          <Testimonials />
          <FAQ />
          <FinalCTA onCTA={openCTA} />
        </main>

        <Footer />

        <CTAFlow open={ctaOpen} onClose={closeCTA} />
      </div>
    </>
  );
}
