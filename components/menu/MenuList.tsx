"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { type MenuCategory } from "@/lib/menuData";
import MenuItem from "./MenuItem";
import { stagger, EASE } from "@/lib/motion";
import {
  MENU_GROUP_IMAGES,
  MENU_ITEM_IMAGES,
  CATEGORY_IMAGES,
} from "@/lib/siteData";

export default function MenuList({ category }: { category: MenuCategory }) {
  const categoryDefault =
    CATEGORY_IMAGES[category.key] ??
    MENU_GROUP_IMAGES[category.groups[0]?.name] ??
    "/img/dish-steak.jpg";

  // the single panel's currently displayed image
  const [activeImage, setActiveImage] = useState(categoryDefault);
  // mobile accordion: one row open at a time
  const [openId, setOpenId] = useState<string | null>(null);

  const groupDefault = useRef(categoryDefault); // idle image (scroll-spy driven)
  const hovering = useRef(false);
  const itemsRef = useRef<HTMLDivElement>(null);

  const imgFor = (groupName: string, itemName: string) =>
    MENU_ITEM_IMAGES[itemName] ??
    MENU_GROUP_IMAGES[groupName] ??
    categoryDefault;

  // scroll-spy: whichever group sits next to the sticky panel sets the idle image,
  // so the panel always shows a relevant photo even before anything is hovered.
  useEffect(() => {
    const sections = Array.from(
      itemsRef.current?.querySelectorAll<HTMLElement>("section[data-img]") ?? []
    );
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const inBand = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (!inBand.length) return;
        const img =
          inBand[0].target.getAttribute("data-img") || categoryDefault;
        groupDefault.current = img;
        if (!hovering.current) setActiveImage(img);
      },
      {
        rootMargin: `-150px 0px -${Math.max(0, window.innerHeight - 330)}px 0px`,
        threshold: 0,
      }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category.key]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-x-12"
    >
      {/* all groups (item columns) */}
      <div
        ref={itemsRef}
        onMouseLeave={() => {
          hovering.current = false;
          setActiveImage(groupDefault.current);
        }}
      >
        {category.groups.map((group) => (
          <section
            key={group.name}
            data-img={MENU_GROUP_IMAGES[group.name] ?? categoryDefault}
            className="mb-14 last:mb-0"
          >
            <div className="mb-5 border-b border-white/5 pb-3">
              <h3 className="font-display text-xl font-normal uppercase tracking-widest2 text-gold sm:text-2xl">
                {group.name}
              </h3>
            </div>

            <motion.div
              variants={stagger(0.035)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 gap-x-14 md:grid-cols-2"
            >
              {group.items.map((item) => {
                const id = `${group.name}|${item.name}`;
                const img = imgFor(group.name, item.name);
                return (
                  <MenuItem
                    key={item.name}
                    item={item}
                    image={img}
                    isOpen={openId === id}
                    onToggle={() =>
                      setOpenId((cur) => (cur === id ? null : id))
                    }
                    onHover={() => {
                      hovering.current = true;
                      setActiveImage(img);
                    }}
                  />
                );
              })}
            </motion.div>
          </section>
        ))}
      </div>

      {/* ONE sticky preview panel — a single image at a time, crossfades on hover */}
      <aside className="hidden lg:block">
        <div className="sticky top-[136px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gold/30 shadow-plate">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeImage}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite-950/45 to-transparent" />
          </div>
        </div>
      </aside>
    </motion.div>
  );
}
