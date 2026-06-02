"use client";

import { Code2, Megaphone, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    body: "Custom web apps, SaaS platforms, and APIs engineered for scale, speed and reliability.",
    items: ["Web & mobile apps", "SaaS platforms", "API & integrations", "Cloud architecture"],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    body: "Performance-driven campaigns, brand systems and content that compounds attention into revenue.",
    items: ["Brand strategy", "Performance ads", "SEO & content", "Social campaigns"],
  },
  {
    icon: Cpu,
    title: "IT Solutions",
    body: "Infrastructure, automation and security to keep your business resilient and ready to grow.",
    items: ["Cloud & DevOps", "IT consulting", "Cybersecurity", "Automation"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HQServices() {
  return (
    <section id="services" className="bp-section bp-section-dark">
      <div className="bp-body">
        <div className="bp-row" style={{ paddingTop: 0, borderTop: "none" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bp-row-label"
          >
            What we do
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="bp-row"
        >
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((s) => (
              <motion.div key={s.title} variants={cardVariants}>
                <s.icon className="size-8 text-brand-crimson" strokeWidth={1.5} />
                <h3 className="mt-8 font-display font-bold text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-[1.8] text-white/55 max-w-sm">{s.body}</p>
                <ul className="mt-8 space-y-2.5 text-sm text-white/65">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3">
                      <span className="size-1 bg-brand-crimson shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
