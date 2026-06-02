"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "HQNepal shipped our platform faster than any agency we'd worked with — and the marketing engine they built kept it growing. They feel less like vendors and more like co-founders.",
    name: "Aarav Sharma",
    role: "CEO, Khata+ Fintech",
    industry: "Fintech",
  },
  {
    quote:
      "From brand identity to cloud infrastructure, HQNepal delivered a complete ecosystem for our outdoor retail platform. The team's versatility is unmatched.",
    name: "Maya Gurung",
    role: "Founder, Mountain Mart",
    industry: "E-commerce",
  },
  {
    quote:
      "We came for the software and stayed for the strategy. HQNepal didn't just build our EHR — they showed us how to market it. Revenue doubled in six months.",
    name: "Dr. Rajesh Thapa",
    role: "Co-Founder, ClinicOS",
    industry: "Healthcare",
  },
  {
    quote:
      "Our cloud migration was complex, but HQNepal handled every layer — from security compliance to team training. Zero downtime, zero drama.",
    name: "Sabina Rai",
    role: "CTO, Sherpa Cloud",
    industry: "Cloud Infrastructure",
  },
];

export function HQTestimonial() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bp-section" style={{ background: "#050505", color: "white" }}>
      <div className="bp-body">
        <div className="bp-row" style={{ paddingTop: 0, borderTop: "none" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bp-row-label"
            style={{ color: "oklch(1 0 0 / 0.35)" }}
          >
            Client stories
          </motion.p>
        </div>

        <div className="bp-row">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.1] max-w-4xl tracking-tight"
          >
            Don&apos;t take our word{" "}
            <span className="font-display font-bold text-white">for it, take theirs.</span>
          </motion.h2>
        </div>

        <div className="bp-row">
          <div className="flex gap-3 mb-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 transition-all duration-500 ${
                  i === current ? "w-12 bg-brand-crimson" : "w-8 bg-white/[0.08]"
                }`}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] bg-white/[0.02] border border-dotted border-white/[0.06] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="size-24 md:size-32 mx-auto bg-white/[0.04] border border-dotted border-white/[0.1] grid place-items-center overflow-hidden">
                    <svg viewBox="0 0 100 100" className="size-full text-white/20">
                      <circle cx="50" cy="35" r="18" fill="currentColor" />
                      <ellipse cx="50" cy="80" rx="32" ry="28" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.15em] text-white/30">Featured Story</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div>
              <div className="min-h-[160px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={current}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg md:text-2xl leading-[1.7] text-white/85 max-w-[500px]"
                  >
                    &ldquo;{t.quote}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="mt-10 pt-8 border-t border-dotted border-white/[0.06]">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-white text-base md:text-lg font-medium">{t.name}</div>
                        <div className="text-brand-crimson text-sm md:text-base mt-1.5">{t.role}</div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="shrink-0 border border-dotted border-white/[0.08] px-4 py-2">
                    <span className="text-xs uppercase tracking-[0.15em] text-white/40">{t.industry}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bp-row">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`size-2 transition-colors ${
                    i === current ? "bg-brand-crimson" : "bg-white/[0.12]"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs tracking-widest text-white/30">
                {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="size-10 border border-dotted border-white/[0.08] hover:bg-white/[0.04] transition grid place-items-center"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/60">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="size-10 bg-brand-crimson hover:bg-brand-crimson-deep transition grid place-items-center"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
