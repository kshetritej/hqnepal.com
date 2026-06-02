"use client";

import { motion } from "framer-motion";

const tiles = [
  { tag: "Fintech", title: "Khata+", desc: "Mobile-first ledger app", span: "md:col-span-2 md:row-span-2" },
  { tag: "E-commerce", title: "Mountain Mart", desc: "Outdoor retail platform", span: "md:col-span-2" },
  { tag: "SaaS", title: "ClinicOS", desc: "EHR for clinics", span: "md:col-span-1" },
  { tag: "Brand", title: "Himal Coffee", desc: "Identity & packaging", span: "md:col-span-1" },
  { tag: "Marketing", title: "Yeti Outdoors", desc: "Growth campaigns", span: "md:col-span-2" },
  { tag: "IT", title: "Sherpa Cloud", desc: "Cloud migration", span: "md:col-span-2" },
];

export function HQWork() {
  return (
    <section id="work" className="bp-section bp-section-dark">
      <div className="bp-body">
        <div className="bp-row" style={{ paddingTop: 0, borderTop: "none" }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-end justify-between"
          >
            <div>
              <p className="bp-row-label">Selected projects</p>
              <h2 className="font-display font-bold text-3xl md:text-5xl max-w-xl leading-[1.1] tracking-tight">
                Work that moved the needle.
              </h2>
            </div>
            <a href="#" className="hidden md:inline-block text-sm text-white/50 hover:text-white underline underline-offset-4 transition-colors">
              All case studies →
            </a>
          </motion.div>
        </div>

        <div className="bp-row">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[14rem] gap-5">
            {tiles.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`${t.span} p-8 flex flex-col justify-between min-h-[14rem]`}
                style={{ background: "#161617" }}
              >
                <span className="text-xs uppercase tracking-[0.15em] text-white/50">{t.tag}</span>
                <div>
                  <h3 className="font-display font-bold text-2xl md:text-4xl leading-[1.1] text-white">{t.title}</h3>
                  <p className="text-sm text-white/60 mt-2">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
