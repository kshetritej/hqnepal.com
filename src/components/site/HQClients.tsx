"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clientImages = Array.from({ length: 22 }, (_, i) => ({
  src: `/clients/${i + 1}.png`,
  alt: `Client ${i + 1}`,
}));

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

export function HQClients() {
  return (
    <section className="bp-section bp-section-cream">
      <div className="bp-body">
        <Ruler />
        <div className="bp-row" style={{ paddingTop: 0, borderTop: "none" }}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bp-row-label"
          >
            Trusted by 150+ clients across World
          </motion.p>
        </div>

        <div className="bp-row">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-10">
            {clientImages.map((client, i) => (
              <motion.div
                key={client.src}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="flex items-center justify-center"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={180}
                  height={72}
                  className="w-full max-w-[140px] md:max-w-[170px] h-auto object-contain"
                  style={{ filter: "grayscale(100%) contrast(80%) opacity(60%)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
