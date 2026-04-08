import { ArrowUpRight } from "lucide-react";
import { portfolioImages } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const [a, b, c, d, e, f, g, h, i, j] = portfolioImages;

const CardShell = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#1a1412] border border-[#e8e8e8] shadow-sm",
      className
    )}
  >
    {children}
  </div>
);

const CaseStudyCta = () => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white pl-5 pr-1.5 py-1.5 text-sm font-semibold text-[#0a0a0a] shadow-lg">
    View case study
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a0a0a] text-white">
      <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
    </span>
  </span>
);

const ImageCard = ({
  item,
  className = "",
  showCaseCta = true,
}: {
  item: (typeof portfolioImages)[number];
  className?: string;
  showCaseCta?: boolean;
}) => (
  <CardShell className={className}>
    <div className="absolute inset-0 bg-[#1a0f0a]" aria-hidden />
    <img
      src={item.image}
      alt={item.alt}
      className="relative z-[1] h-full w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.04]"
    />
    <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
    {showCaseCta ? (
      <div className="absolute inset-0 z-[3] flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
        <CaseStudyCta />
      </div>
    ) : null}
  </CardShell>
);

const PortfolioProjects = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="relative z-[1] w-full px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="w-full mx-auto">
          <header className="text-center pt-2 sm:pt-4 pb-12 sm:pb-14 lg:pb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a]/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#0a0a0a] border border-[#e8e8e8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#eb9f1c]" />
              Our Projects
            </div>
            <h2 className="mt-6 font-display text-[34px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.08] text-[#0a0a0a] max-w-[720px] mx-auto">
              Innovation and creativity in action
            </h2>
            <p className="mt-4 text-[15px] sm:text-[17px] text-[#666] max-w-[560px] mx-auto leading-relaxed">
              A curated look at interfaces, platforms, and outcomes we&apos;ve delivered—built for clarity, performance,
              and measurable growth.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-5">
            {/* Left column */}
            <div className="flex flex-col gap-4 sm:gap-5 order-2 lg:order-1">
              <ImageCard item={a} className="h-[200px] sm:h-[240px] lg:h-[220px]" />
              <ImageCard item={b} className="h-[200px] sm:h-[240px] lg:h-[220px]" />
              <ImageCard item={c} className="h-[160px] sm:h-[190px] lg:h-[180px]" />
            </div>

            {/* Center column — featured */}
            <div className="flex flex-col gap-4 sm:gap-5 order-1 lg:order-2">
              <CardShell className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] border-[#f0dcc4] bg-gradient-to-br from-[#ffd89e] via-[#ffc978] to-[#e8a855] shadow-md">
                <img
                  src={d.image}
                  alt={d.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.35] mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6 z-[2] transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="relative w-full max-w-[200px] sm:max-w-[240px] aspect-[9/18] rounded-2xl overflow-hidden shadow-2xl border border-white/30 rotate-[-4deg]">
                    <img src={e.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute w-full max-w-[180px] sm:max-w-[200px] aspect-[9/18] rounded-2xl overflow-hidden shadow-xl border border-white/20 rotate-[6deg] translate-x-[28%] translate-y-[8%] opacity-95">
                    <img src={f.image} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-90 pointer-events-none group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 z-[4] flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                  <CaseStudyCta />
                </div>
              </CardShell>

              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                <ImageCard item={g} className="h-[140px] sm:h-[160px]" />
                <ImageCard item={h} className="h-[140px] sm:h-[160px]" />
              </div>

              <ImageCard item={i} className="h-[180px] sm:h-[220px] lg:h-[200px]" />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4 sm:gap-5 order-3">
              <ImageCard item={j} className="h-[200px] sm:h-[240px] lg:h-[220px]" />
              <ImageCard item={b} className="h-[200px] sm:h-[240px] lg:h-[220px]" />
              <ImageCard item={a} className="h-[200px] sm:h-[240px] lg:h-[220px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
