"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Startup",
    price: "$1,499",
    per: "/ project",
    desc: "For founders launching their first product or campaign.",
    features: ["Landing page or MVP", "Brand kit", "Basic SEO setup", "2 revisions"],
    cta: "Start a project",
    highlight: false,
  },
  {
    name: "Scale",
    price: "$4,999",
    per: "/ month",
    desc: "For growing teams who need a steady delivery partner.",
    features: ["Dedicated dev + designer", "Performance marketing", "Monthly reporting", "Priority Slack support"],
    cta: "Book a call",
    highlight: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    per: "",
    desc: "Full product, marketing & IT — built to your scale.",
    features: ["Custom team allocation", "24/7 support SLA", "Dedicated PM", "Enterprise security"],
    cta: "Contact sales",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

export function HQPricing() {
  return (
    <section id="pricing" className="bp-section bp-section-cream">
      <div className="bp-body">
        <Ruler />
        <div className="bp-row" style={{ paddingTop: 0, borderTop: "none" }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="bp-row-label">Plans & pricing</p>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.1] tracking-tight max-w-2xl">
              Simple pricing. Real outcomes.
            </h2>
            <p className="mt-5 text-base leading-[1.8] max-w-xl" style={{ color: "oklch(0 0 0 / 0.55)" }}>
              Start small, scale when you&apos;re ready. No lock-in, no surprises — every engagement begins with a free strategy call.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="bp-row"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <motion.div
                key={p.name}
                variants={cardVariants}
                className="p-8 md:p-10 border border-dotted"
                style={{
                  background: "#161617",
                  color: "white",
                  borderColor: p.highlight ? "oklch(1 0 0 / 0.15)" : "oklch(1 0 0 / 0.06)",
                }}
              >
                <div className="text-xs uppercase tracking-[0.15em] opacity-50">{p.name}</div>
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-display font-bold text-5xl tracking-tight">{p.price}</span>
                  <span className="opacity-50 text-sm">{p.per}</span>
                </div>
                <p className="mt-4 text-sm leading-[1.7] opacity-65">{p.desc}</p>
                <ul className="mt-8 space-y-3 text-sm border-t border-dotted border-white/[0.08] pt-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check className="size-4 shrink-0 text-brand-crimson" /> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-10 w-full py-3.5 font-bold text-sm tracking-wide"
                  style={{
                    background: p.highlight ? "#2a2a2b" : "#0B0B0C",
                    color: "white",
                    border: p.highlight ? "1px solid oklch(1 0 0 / 0.1)" : "none",
                  }}
                >
                  {p.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
