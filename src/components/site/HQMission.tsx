"use client";

import { motion } from "framer-motion";

function Ruler() {
  return (
    <div className="flex items-end h-4 mb-6" style={{ color: "oklch(0 0 0 / 0.2)" }}>
      {Array.from({ length: 24 }).map((_, i) => {
        const isLong = i % 4 === 0;
        const isMid = i % 2 === 0 && !isLong;
        return (
          <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
            <div
              className="w-px"
              style={{
                height: isLong ? "100%" : isMid ? "60%" : "40%",
                background: "currentColor",
              }}
            />
            {isLong && (
              <span className="text-[8px] leading-none mt-0.5 select-none" style={{ fontFamily: "var(--font-display)" }}>
                {i * 10}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function HQMission() {
  return (
    <section className="bp-section bp-section-cream">
      <div className="bp-body">
        <Ruler />
        <div className="bp-row" style={{ paddingTop: 0, borderTop: "none" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-[auto_1fr] gap-12 items-start"
          >
            <div className="flex items-center justify-center">
              <div className="size-16 md:size-20 grid place-items-center">
                <svg viewBox="0 0 64 64" className="size-full" style={{ color: "oklch(0 0 0 / 0.25)" }}>
                  <g fill="currentColor">
                    {[0, 60, 120, 180, 240, 300].map((d) => (
                      <ellipse key={d} cx="32" cy="14" rx="4" ry="14" transform={`rotate(${d} 32 32)`} />
                    ))}
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <span className="bp-row-label">Our belief</span>
              <p className="text-3xl md:text-5xl leading-[1.3]" style={{ color: "oklch(0 0 0 / 0.85)" }}>
                We believe great software, sharp marketing and reliable IT should feel like one team — yours. HQNepal brings the three together so every product, campaign and system pushes the business forward.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
