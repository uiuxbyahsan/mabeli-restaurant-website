"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

interface Review {
  quote: string;
  name: string;
}

const REVIEWS: Review[] = [
  {
    quote:
      "The ribeye was cooked to absolute perfection and the staff made us feel like regulars from the moment we sat down. The finest dinner we have had in Sarajevo.",
    name: "Emina H.",
  },
  {
    quote:
      "A warm, candle-lit room and a kitchen that clearly cares about every plate. The smoked seafood risotto alone is worth the visit.",
    name: "Marko P.",
  },
  {
    quote:
      "From the first espresso to the last spoon of panna cotta, every detail felt considered. Service was genuinely attentive without ever rushing us.",
    name: "Lejla K.",
  },
  {
    quote:
      "We brought visiting friends and they still talk about it. Refined food, generous portions and an atmosphere that feels effortlessly elegant.",
    name: "Davor S.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ delay: 0.12 + i * 0.05, type: "spring", stiffness: 500, damping: 14 }}
        >
          <Star className="h-4 w-4 fill-gold text-gold" />
        </motion.span>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  className = "",
}: {
  review: Review;
  className?: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-graphite-900 p-6 transition-[border-color,box-shadow] duration-300 ease-out hover:border-gold/40 hover:shadow-gold-soft sm:p-7 ${className}`}
    >
      <Stars />
      <p className="mt-5 flex-1 break-words font-sans text-[0.95rem] font-light leading-relaxed text-cream/80">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-white/5 pt-4">
        <div className="font-sans text-sm font-medium text-cream">
          {review.name}
        </div>
        <div className="mt-1 text-[0.68rem] uppercase tracking-widest2 text-cream/40">
          via Google Reviews
        </div>
      </div>
    </motion.article>
  );
}

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scrollRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    setActive(Math.round(el.scrollLeft / (card.offsetWidth + 16)));
  };

  const goTo = (i: number) => {
    const el = scrollRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    const delta =
      card.getBoundingClientRect().left - el.getBoundingClientRect().left;
    el.scrollTo({
      left: el.scrollLeft + delta - (el.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-graphite-950 py-24 sm:py-32">
      <div className="container-mab">
        {/* heading */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mb-14 text-center sm:mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="display-title title-section text-cream"
          >
            What Our <span className="text-gold">Guests Say</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* mobile: center-snapped swipe carousel + dots */}
      <div className="md:hidden">
        <motion.div
          ref={scrollRef}
          onScroll={onScroll}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[7.5vw] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((review) => (
            <ReviewCard
              key={review.name}
              review={review}
              className="w-[85vw] max-w-sm shrink-0 snap-center"
            />
          ))}
        </motion.div>

        <div className="mt-7 flex justify-center gap-2">
          {REVIEWS.map((review, i) => (
            <button
              key={review.name}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-5 bg-gold" : "w-1.5 bg-cream/25"
              }`}
            />
          ))}
        </div>
      </div>

      {/* desktop: grid */}
      <div className="container-mab hidden md:block">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
