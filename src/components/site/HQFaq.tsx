"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services does HQNepal offer?", a: "We cover software development, digital marketing and IT solutions — from MVPs and SaaS platforms to brand campaigns, SEO, cloud infrastructure and cybersecurity." },
  { q: "Where is HQNepal based?", a: "Our team is headquartered in Pokhara, Nepal, and we work with clients across South Asia, the Gulf, Europe and North America." },
  { q: "How long does a typical project take?", a: "MVPs usually ship in 6–10 weeks. Brand and marketing engagements start delivering inside the first month. We share a clear timeline before kickoff." },
  { q: "Do you work with startups or only enterprise?", a: "Both. Our Startup tier is built for early-stage founders, while Scale and Custom serve growing teams and enterprise clients." },
  { q: "Can you take over an existing project?", a: "Yes — we frequently audit and rescue codebases, ad accounts and infrastructure. We'll start with a paid discovery to map the path forward." },
  { q: "What does support look like after launch?", a: "Every project ships with a support window. Ongoing retainers include monitoring, iteration, reporting and a dedicated Slack channel." },
];

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

export function HQFaq() {
  return (
    <section id="faq" className="bp-section bp-section-cream">
      <div className="bp-body">
        <Ruler />
        <div className="bp-row" style={{ paddingTop: 0, borderTop: "none" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bp-row-label"
          >
            Common questions
          </motion.p>
        </div>

        <div className="bp-row">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-16"
          >
            FAQ
          </motion.h2>

          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-dotted" style={{ borderColor: "oklch(0 0 0 / 0.08)" }}>
                <AccordionTrigger className="text-left font-semibold text-base md:text-lg py-6 tracking-wide">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-[1.8]" style={{ color: "oklch(0 0 0 / 0.6)" }}>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
