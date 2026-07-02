"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SIGNATURE_DISHES } from "@/lib/siteData";
import { formatKM } from "@/lib/menuData";
import { fadeUp, scaleIn, stagger, VIEWPORT } from "@/lib/motion";

export default function SignatureDishes() {
  return (
    <section className="relative bg-graphite-950 py-24 sm:py-32">
      <div className="container-mab">
        {/* heading */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <motion.h2
              variants={fadeUp}
              className="display-title title-section text-cream"
            >
              Signature <span className="text-gold">Creations</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="max-w-sm text-sm font-light leading-relaxed text-cream/60"
          >
            Prices in KM.
          </motion.p>
        </motion.div>

        {/* cards: snap-carousel on mobile, grid on desktop */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {SIGNATURE_DISHES.map((dish) => (
            <motion.article
              key={dish.name}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative aspect-[3/4] min-w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl shadow-plate transition-shadow duration-300 hover:shadow-gold sm:min-w-[46%] md:min-w-0"
            >
              <Image
                src={dish.img}
                alt={dish.name}
                fill
                sizes="(max-width: 768px) 80vw, 33vw"
                className="object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.08]"
              />
              {/* legibility gradient + hover-intensify overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/30 to-transparent" />
              <div className="absolute inset-0 bg-graphite-950/0 transition-colors duration-500 group-hover:bg-graphite-950/15" />
              {/* gold ring on hover (glow comes from hover:shadow-gold on the card) */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition-all duration-300 group-hover:ring-gold/45" />

              {dish.tag && (
                <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-graphite-950/40 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-widest2 text-gold backdrop-blur-sm">
                  {dish.tag}
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-[1.75rem] uppercase leading-none tracking-[0.05em] text-cream">
                    {dish.script}
                  </h3>
                  <p className="mt-2 text-xs font-light leading-snug text-cream/65 transition-colors duration-300 group-hover:text-cream/90">
                    {dish.note}
                  </p>
                </div>
                <span className="tnum shrink-0 origin-right font-display text-lg text-gold transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">
                  {formatKM(dish.price)}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
