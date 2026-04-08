import Reveal from "../ui/Reveal";
import AnimatedButton from "../ui/AnimatedButton";
import heroBg from "@/assets/hero-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover object-center" />
        {/* Dark overlay — heavier on left so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/75" />
        {/* Subtle amber warmth layer */}
        <div className="absolute inset-0 bg-[#eb9f1c]/8 mix-blend-multiply" />
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eb9f1c]/50 to-transparent" />
      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eb9f1c]/30 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-12 lg:px-20">

        {/* Label */}
        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="inline-flex h-[10px] w-[10px] rounded-full bg-[#eb9f1c]" />
            <span className="text-xs tracking-[0.2em] font-medium text-white/60">
              SOFTECHGENICS ADVANTAGE
            </span>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.05}>
          <h2 className="font-display font-bold text-center text-white leading-[1.08] text-[38px] sm:text-[52px] lg:text-[68px] mb-6">
            Pioneering digital excellence:
            <br />
            discover the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(110deg,#ffffff 0%,#eb9f1c 22%,#ffffff 45%,#eb9f1c 68%,#ffffff 100%)",
              }}
            >
              Softechgenics
            </span>{" "}
            advantage.
          </h2>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={0.1}>
          <p className="mx-auto mb-10 max-w-[500px] text-center text-white/70 text-[16px] sm:text-[18px] leading-[1.6]">
            Elevate your online presence with innovative solutions and strategic digital services—innovate, integrate,
            and grow with a team that puts your outcomes first.
          </p>
        </Reveal>

        {/* CTA row */}
        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton to="/contact" size="lg" showArrow>
              Discover more
            </AnimatedButton>
            <a
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-white/60 text-[15px] font-medium transition-colors duration-200 hover:text-white"
            >
              View portfolio
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>

        {/* Divider + trust line */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-white/10" />
            <p className="shrink-0 text-xs text-white/40 tracking-wide">
              Trusted by teams in 15+ countries
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default CTASection;