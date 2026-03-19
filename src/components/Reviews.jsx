import React from "react";
import WordRotator from "@/Animations/WordRotator";
import RevealCards from "@/Animations/RevealCards";
import WordReveal from "@/Animations/WordReveal";

const reviews = [
  {
    logo: "/clutch_logo.svg",
    rating: 4.5,
    desc: "Top Branding Agency\nTop UI Design Agency",
  },
  {
    logo: "/iTRate.co_logo.svg",
    desc: "Top Design Agency",
  },
  {
    logo: "/designrush_logo.svg",
    rating: 4.6,
    desc: "Top Branding Agency",
  },
  {
    logo: "/ambitionbox_logo.svg",
    rating: 4.5,
  },
  {
    logo: "/trustpilot_logo.svg",
    rating: 4.0,
  },
];

const StarRating = ({ rating }) => {
  if (!rating) return null;

  return (
    <div className="flex justify-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-xl ${
            star <= Math.floor(rating)
              ? "text-surface"
              : "text-text-muted/40"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const animatedWords = ["agency", "team"];

const Reviews = () => {
  return (
    <section className="p-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <h2 className="text-5xl md:text-7xl leading-tight font-instrument text-center">
          <WordReveal>
            One
          </WordReveal>
          <WordRotator words={animatedWords} className="min-w-[190px] text-left italic text-text-muted" /> 
          <br />
          <WordReveal>
            to rule them all!!
          </WordReveal>
        </h2>

        <RevealCards className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-bg-soft rounded-xl p-8 shadow-sm hover:scale-105 transition-transform h-full"
            >
              <div className="flex flex-col items-center text-center gap-3">
                
                {/* Logo */}
                <img src={item.logo} alt="Partner Logo" className="min-h-8 object-contain" />

                {/* Rating Number */}
                {item.rating && (
                  <div className="text-3xl font-serif text-slate-600">
                    {Number(item.rating).toFixed(1)}
                  </div>
                )}

                {/* Stars */}
                <StarRating rating={item.rating} />

                {/* Description */}
                {item.desc && (
                  <p className="text-xs uppercase tracking-wider text-text-muted whitespace-pre-line leading-relaxed">
                    {item.desc}
                  </p>
                )}

              </div>
            </div>
          ))}
        </RevealCards>
      </div>
    </section>
  );
}

export default Reviews;