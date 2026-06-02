"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function HQHero() {
  return (
    <section className="hero-shader text-white">
      <div className="bp-body">
        <div className="flex items-center justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="size-10 bg-white text-brand-crimson grid place-items-center font-display font-bold text-lg">HQ</div>
          </motion.div>
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
            {["Services", "Work", "Pricing", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-70 transition-opacity">
                {item}
              </a>
            ))}
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-white text-brand-crimson px-5 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Start a project <ArrowUpRight className="size-4" />
          </motion.a>
        </div>

        <div className="bp-row" style={{ paddingTop: 0, borderTop: "none" }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold uppercase leading-[0.9] text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] max-w-4xl tracking-tighter"
          >
            <span className="relative inline-block group">
              2ND
              <span className="absolute left-0 top-full mt-2 text-xs font-sans font-normal normal-case tracking-normal whitespace-nowrap bg-white/10 backdrop-blur px-3 py-1.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "var(--font-body)" }}>
                since everyone else is #1
              </span>
            </span>
	    {" "}
            Best<br />Company in<br />Nepal
          </motion.h1>
        </div>

        <div className="bp-row">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-12 items-end"
          >
            <p className="md:col-span-2 max-w-xl text-base md:text-lg leading-[1.8] text-white/80">
              HQNepal is an IT, marketing and software development agency. We build bold digital products, growth systems and brands that stop the scroll.
            </p>
            <div className="flex md:justify-end gap-4">
              <a href="#contact" className="bg-white text-brand-crimson px-7 py-3.5 font-bold text-sm tracking-wide">Work with us</a>
              <a href="#work" className="border border-dotted border-white/30 px-7 py-3.5 font-bold text-sm tracking-wide">See our work</a>
            </div>
          </motion.div>
        </div>

        <div className="bp-row">
          <div className="grid grid-cols-2 md:grid-cols-4 text-sm font-semibold">
            {["120+ Projects shipped", "5 yrs of craft", "Pokhara × Worldwide", "Available Q3 2026"].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="py-5"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
