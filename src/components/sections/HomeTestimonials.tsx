import { Star } from "lucide-react";

import fiverrReviewImg2 from "@/assets/review screenshorts/1.png";
import fiverrReviewImg3 from "@/assets/review screenshorts/2.png";
import fiverrReviewImg4 from "@/assets/review screenshorts/3.png";
import fiverrReviewImg5 from "@/assets/review screenshorts/4.png";
import fiverrReviewImg6 from "@/assets/review screenshorts/5.png";
import fiverrReviewImg7 from "@/assets/review screenshorts/6.png";
import fiverrReviewImg8 from "@/assets/review screenshorts/7.png";
import fiverrReviewImg9 from "@/assets/review screenshorts/8.png";
import fiverrReviewImg10 from "@/assets/review screenshorts/9.png";
import fiverrReviewImg11 from "@/assets/review screenshorts/10.png";
import fiverrReviewImg12 from "@/assets/review screenshorts/11.png";
import fiverrReviewImg13 from "@/assets/review screenshorts/12.png";
import fiverrReviewImg14 from "@/assets/review screenshorts/13.png";
import fiverrReviewImg15 from "@/assets/review screenshorts/14.png";
import fiverrReviewImg16 from "@/assets/review screenshorts/15.png";
import fiverrReviewImg17 from "@/assets/review screenshorts/16.png";
import fiverrReviewImg18 from "@/assets/review screenshorts/17.png";
import fiverrReviewImg19 from "@/assets/review screenshorts/18.png";
import fiverrReviewImg20 from "@/assets/review screenshorts/19.png";
import fiverrReviewImg21 from "@/assets/review screenshorts/20.png";
import fiverrReviewImg22 from "@/assets/review screenshorts/21.png";
import fiverrReviewImg23 from "@/assets/review screenshorts/22.png";
import fiverrReviewImg24 from "@/assets/review screenshorts/23.png";
import fiverrReviewImg25 from "@/assets/review screenshorts/24.png";
import fiverrReviewImg26 from "@/assets/review screenshorts/25.png";
import fiverrReviewImg27 from "@/assets/review screenshorts/26.png";
import fiverrReviewImg28 from "@/assets/review screenshorts/27.png";
import fiverrReviewImg29 from "@/assets/review screenshorts/28.png";
import fiverrReviewImg30 from "@/assets/review screenshorts/29.png";
import fiverrReviewImg31 from "@/assets/review screenshorts/30.png"; 
import fiverrReviewImg32 from "@/assets/review screenshorts/31.png";
import fiverrReviewImg33 from "@/assets/review screenshorts/32.png";
import fiverrReviewImg34 from "@/assets/review screenshorts/33.png";
import fiverrReviewImg35 from "@/assets/review screenshorts/34.png";
import fiverrReviewImg36 from "@/assets/review screenshorts/35.png";
import fiverrReviewImg37 from "@/assets/review screenshorts/36.png";
import fiverrReviewImg38 from "@/assets/review screenshorts/37.png";
import fiverrReviewImg40 from "@/assets/review screenshorts/39.png";
import fiverrReviewImg41 from "@/assets/review screenshorts/40.png";
import fiverrReviewImg42 from "@/assets/review screenshorts/41.png";
import fiverrReviewImg43 from "@/assets/review screenshorts/42.png";
import fiverrReviewImg44 from "@/assets/review screenshorts/43.png";
import fiverrReviewImg45 from "@/assets/review screenshorts/44.png";
import fiverrReviewImg46 from "@/assets/review screenshorts/45.png";
import fiverrReviewImg47 from "@/assets/review screenshorts/46.png";
import fiverrReviewImg48 from "@/assets/review screenshorts/47.png";
import fiverrReviewImg49 from "@/assets/review screenshorts/48.png";
import fiverrReviewImg50 from "@/assets/review screenshorts/49.png";

const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-[#0a0a0a] text-[#0a0a0a]" : "fill-transparent text-[#0a0a0a]/40"}`}
        />
      ))}
    </div>
  );
};

const HomeTestimonials = () => {
  const SCROLL_SECONDS = 75;

  // Add more screenshots here as you collect them.
  const reviewImages = [

    { src: fiverrReviewImg2, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg3, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg4, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg5, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg6, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg7, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg8, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg9, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg10, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg11, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg12, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg13, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg14, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg15, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg16, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg17, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg18, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg19, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg20, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg21, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg22, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg23, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg24, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg25, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg26, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg27, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg28, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg29, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg30, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg31, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg32, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg33, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg34, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg35, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg36, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg37, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg38, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg40, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg41, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg42, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg43, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg44, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg45, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg46, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg47, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg48, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg49, alt: "Fiverr review screenshot" },
    { src: fiverrReviewImg50, alt: "Fiverr review screenshot" },
  ];

  const row1 = reviewImages.filter((_, idx) => idx % 3 === 0);
  const row2 = reviewImages.filter((_, idx) => idx % 3 === 1);
  const row3 = reviewImages.filter((_, idx) => idx % 3 === 2);

  const rows = [
    { items: row1, direction: "normal" as const },
    { items: row2, direction: "reverse" as const },
    { items: row3, direction: "normal" as const },
  ];

  return (
    <section className="bg-[#f6f6f6] px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-24">
      {/* Keyframe defined inline so it's self-contained and not overridden */}
      <style>{`
        @keyframes testimonialsScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div className="w-full mx-auto">
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-[10px] w-[10px] bg-[#eb9f1c] rounded-full" />
            <span className="text-xs tracking-[0.2em] font-medium text-[#9c9c9c]">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.12] font-display font-bold text-[#0a0a0a]">
            Client feedback
            <br />
            <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0a0a0a_0%,#eb9f1c_22%,#0a0a0a_45%,#eb9f1c_68%,#0a0a0a_100%)]">
              and reviews
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <div
                className="flex gap-4"
                style={{
                  width: "max-content",
                  animation: `testimonialsScroll ${SCROLL_SECONDS}s linear infinite`,
                  animationDirection: row.direction,
                  willChange: "transform",
                }}
              >
                {[...row.items, ...row.items].map((item, i) => (
                  <article
                    key={`${item.src}-${i}`}
                    style={{ width: "400px", flexShrink: 0 }}
                    className="bg-white rounded-2xl border border-[#ededed] shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-3 flex flex-col"
                  >
                    <div className="relative rounded-xl overflow-hidden border border-[#eaeaea] bg-[#fafafa]">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-[200px] object-cover object-left"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* <div
                        className="absolute top-3 right-3 inline-flex h-7 w-7 items-center justify-center rounded-full shadow-sm border border-white/40"
                        style={{ background: "#1dbf73" }}
                        aria-label="Fiverr"
                        title="Fiverr"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M9.7 17.8c-.2 0-.4-.1-.6-.2-.2-.2-.3-.4-.3-.6V8.4c0-.2.1-.4.3-.6.2-.2.4-.2.6-.2h2.7c.2 0 .4.1.6.2.2.2.3.4.3.6v.7c.8-1.1 2.1-1.7 3.7-1.7 1.4 0 2.5.5 3.3 1.4.8.9 1.2 2.1 1.2 3.7V17c0 .2-.1.4-.3.6-.2.2-.4.2-.6.2h-2.8c-.2 0-.4-.1-.6-.2-.2-.2-.3-.4-.3-.6v-3.8c0-.8-.2-1.5-.6-1.9-.4-.5-1-.7-1.7-.7s-1.3.2-1.7.7c-.4.5-.6 1.1-.6 1.9V17c0 .2-.1.4-.3.6-.2.2-.4.2-.6.2H9.7z"
                            fill="#ffffff"
                          />
                        </svg>
                      </div> */}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;