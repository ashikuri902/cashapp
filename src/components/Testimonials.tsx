interface Testimonial {
  name: string;
  initials: string;
  location: string;
  rating: number;
  text: string;
  time: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus T.",
    initials: "M",
    location: "Austin, TX",
    rating: 5,
    text: "Honestly didn't expect this to actually work. Got my Cash App card within minutes of checking eligibility. Smooth process, no nonsense.",
    time: "2 hours ago",
    verified: true,
  },
  {
    name: "Elena R.",
    initials: "E",
    location: "Miami, FL",
    rating: 5,
    text: "The interface feels like a premium fintech app. I've used other reward sites before but FluxReward is on another level entirely.",
    time: "5 hours ago",
    verified: true,
  },
  {
    name: "Jordan K.",
    initials: "J",
    location: "Seattle, WA",
    rating: 5,
    text: "Quick, clean, secure. Got my reward and was on my way in under a minute. The verification felt professional — not sketchy like other sites.",
    time: "1 day ago",
    verified: true,
  },
  {
    name: "Priya S.",
    initials: "P",
    location: "Chicago, IL",
    rating: 5,
    text: "I'm a designer and the UX here is genuinely impressive. The animations, the glass UI — feels like a $100M startup. And the rewards are real.",
    time: "1 day ago",
    verified: true,
  },
  {
    name: "Daniel M.",
    initials: "D",
    location: "Denver, CO",
    rating: 5,
    text: "Was skeptical at first but the live activity feed showing real people getting rewards convinced me. Got mine the same day.",
    time: "2 days ago",
    verified: true,
  },
  {
    name: "Aisha B.",
    initials: "A",
    location: "Atlanta, GA",
    rating: 5,
    text: "The scarcity counter and live status updates make it feel legitimate. I appreciated the transparency throughout the whole process.",
    time: "3 days ago",
    verified: true,
  },
  {
    name: "Chris L.",
    initials: "C",
    location: "Boston, MA",
    rating: 5,
    text: "Finally a rewards platform that doesn't feel scammy. Premium experience from start to finish. Will be back for more.",
    time: "3 days ago",
    verified: true,
  },
  {
    name: "Sofia N.",
    initials: "S",
    location: "Phoenix, AZ",
    rating: 5,
    text: "The 3D card animation sold me. Then the actual reward delivered. Best in class, no doubt. Highly recommended.",
    time: "4 days ago",
    verified: true,
  },
];

export default function Testimonials() {
  // Split into two rows for marquee effect
  const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
  const row2 = [...testimonials.slice(4), ...testimonials.slice(4)];

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">
      <div className="orb orb-3 top-1/2 -right-32 opacity-15" />
      <div className="orb orb-2 -left-32 top-1/3 opacity-15" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 mb-12 md:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,213,75,0.08)] border border-[rgba(0,255,133,0.25)] text-[#00FF85] text-xs font-semibold tracking-wider uppercase mb-5">
            <i className="fa-solid fa-star"></i>
            <span>Member Reviews</span>
          </div>
          <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.05]">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#00D54B] to-[#00FF85] bg-clip-text text-transparent">
              thousands.
            </span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#A0A0A0] leading-relaxed">
            Real feedback from verified members who accessed their rewards.
          </p>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-5 marquee-pause">
        <div className="overflow-hidden">
          <div className="marquee-track" style={{ animationDuration: "60s" }}>
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="marquee-track"
            style={{ animationDuration: "70s", animationDirection: "reverse" }}
          >
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="glass-card rounded-2xl p-5 md:p-6 w-[320px] md:w-[380px] shrink-0">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <i key={i} className="fa-solid fa-star text-amber-400 text-sm star-glow"></i>
        ))}
      </div>
      <p className="text-sm md:text-base text-white/90 leading-relaxed mb-5">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D54B]/30 to-[#00FF85]/10 border border-[#00FF85]/30 flex items-center justify-center font-['Space_Grotesk'] font-bold text-white text-sm">
          {testimonial.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-white truncate">
              {testimonial.name}
            </span>
            {testimonial.verified && (
              <i className="fa-solid fa-circle-check text-[#00FF85] text-xs"></i>
            )}
          </div>
          <div className="text-xs text-[#A0A0A0]">{testimonial.location}</div>
        </div>
        <div className="text-xs text-[#A0A0A0]">{testimonial.time}</div>
      </div>
    </div>
  );
}
