"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionDivider from "./ui/SectionDivider";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

const GOLD_GLOW = "0 24px 60px -18px rgba(201,168,106,0.5)";

const FLOATS = [
  {
    src: "/img/dish-steak.jpg",
    rotate: -5,
    slideX: -60,
    floatDur: 5,
    delay: 0,
    pos: "bottom-24 left-[5%] xl:left-[13%]",
  },
  {
    src: "/img/dish-grill.jpg",
    rotate: 4,
    slideX: 60,
    floatDur: 6,
    delay: 0.15,
    pos: "top-24 right-[5%] xl:right-[13%]",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="grain relative overflow-hidden bg-graphite-900 py-24 sm:py-32"
    >
      {/* floating food images (desktop) — flanking the heading */}
      {FLOATS.map((f) => (
        <motion.div
          key={f.src}
          aria-hidden
          // entrance: slide in + base tilt (settles, then hands off to idle float)
          initial={{ x: f.slideX, opacity: 0, rotate: f.rotate }}
          whileInView={{ x: 0, opacity: 1, rotate: f.rotate }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: "easeOut", delay: f.delay }}
          className={`absolute z-0 hidden w-[240px] lg:block ${f.pos}`}
        >
          <motion.div
            // idle: gentle continuous float
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: f.floatDur,
              ease: "easeInOut",
              repeat: Infinity,
              delay: f.delay + 0.8,
            }}
          >
            <motion.div
              // interaction: scale up, straighten tilt by half, gold glow
              initial={{ boxShadow: "0 40px 80px -40px rgba(0,0,0,0.85)" }}
              whileHover={{ scale: 1.05, rotate: -f.rotate / 2, boxShadow: GOLD_GLOW }}
              whileTap={{ scale: 1.05, rotate: -f.rotate / 2, boxShadow: GOLD_GLOW }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <Image
                src={f.src}
                alt=""
                fill
                sizes="280px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      <div className="container-mab relative z-10">
        <SectionDivider className="mx-auto mb-12 max-w-md" />

        {/* small decorative thumbnails for tablet / mobile */}
        <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
          {FLOATS.map((f, i) => (
            <motion.div
              key={f.src}
              initial={{ opacity: 0, y: 16, rotate: i === 0 ? -6 : 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: i === 0 ? -6 : 3 }}
              whileTap={{ scale: 1.07 }}
              whileHover={{ scale: 1.07 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="relative h-24 w-20 overflow-hidden rounded-xl shadow-plate ring-1 ring-white/10"
            >
              <Image src={f.src} alt="" fill sizes="80px" className="object-cover" />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.1rem] font-light leading-[1.12] text-cream sm:text-[3.1rem]"
          >
            Born from a love of great food and{" "}
            <span className="italic text-gold">genuine</span> hospitality.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed tracking-wide text-cream/70 sm:text-lg"
          >
            Tucked into the Aria quarter of Sarajevo, Mabelli blends Mediterranean
            craft with the warmth of Balkan tradition. Every plate begins with
            carefully sourced ingredients: dry-aged beef, line-caught fish and
            seasonal produce, brought together with modern technique in an
            unhurried, candle-lit room. Stay for one course, or linger for the
            evening.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
