"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MENU } from "@/lib/menuData";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import MenuTabs from "./MenuTabs";
import MenuList from "./MenuList";

export default function MenuSection() {
  const [active, setActive] = useState("food");
  const category = MENU.find((c) => c.key === active) ?? MENU[0];

  return (
    <section id="menu" className="relative bg-graphite-900">
      {/* heading */}
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="container-mab pb-10 pt-24 text-center sm:pt-32"
      >
        <motion.h2
          variants={fadeUp}
          className="display-title title-section text-cream"
        >
          A Taste of <span className="text-gold">Mabelli</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-cream/60"
        >
          From slow-pulled espresso to dry-aged steaks. Browse by category.
          Prices shown in KM.
        </motion.p>
      </motion.div>

      {/* sticky tabs */}
      <MenuTabs active={active} onChange={setActive} />

      {/* active category */}
      <div className="container-mab min-h-[60vh] py-14">
        <AnimatePresence mode="wait">
          <MenuList key={category.key} category={category} />
        </AnimatePresence>
      </div>
    </section>
  );
}
