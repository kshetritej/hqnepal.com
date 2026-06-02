"use client";

import { motion } from "framer-motion";

const categories = [
  { title: "Services", items: ["Software Development", "Marketing", "IT Solutions", "Cloud Architecture"] },
  { title: "Industries", items: ["Fintech", "E-Commerce", "Healthcare", "SaaS"] },
  { title: "Company", items: ["About", "Work", "Pricing", "Contact"] },
];

const support = [
  { title: "Support & Socials", items: ["Help Center", "Status", "Contact Support"] },
];

const cubes = [
  { x: "5%", y: "30%", size: 40, opacity: 0.06, delay: "0s" },
  { x: "15%", y: "60%", size: 28, opacity: 0.04, delay: "1s" },
  { x: "75%", y: "20%", size: 52, opacity: 0.05, delay: "0.5s" },
  { x: "85%", y: "65%", size: 34, opacity: 0.04, delay: "1.5s" },
  { x: "45%", y: "75%", size: 60, opacity: 0.03, delay: "2s" },
  { x: "92%", y: "40%", size: 22, opacity: 0.05, delay: "0.8s" },
];

function IsoCube({ size }: { size: number }) {
  const s = size;
  const hw = s * 0.5;
  const hh = s * 0.288;
  const cx = 50;
  const cy = 50;
  const t = { x: cx, y: cy - hh * 2 };
  const r = { x: cx + hw, y: cy - hh };
  const b = { x: cx, y: cy };
  const l = { x: cx - hw, y: cy - hh };
  const br = { x: cx + hw, y: cy + hh };
  const bl = { x: cx - hw, y: cy + hh };

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <g fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d={`M${t.x},${t.y} L${r.x},${r.y} L${b.x},${b.y} L${l.x},${l.y} Z`} strokeDasharray="2 2" />
        <path d={`M${l.x},${l.y} L${b.x},${b.y} L${br.x},${br.y} L${bl.x},${bl.y} Z`} />
        <path d={`M${r.x},${r.y} L${br.x},${br.y}`} />
        <path d={`M${b.x},${b.y} L${t.x},${t.y}`} strokeDasharray="2 2" />
      </g>
    </svg>
  );
}

function Crosshairs() {
  return (
    <svg viewBox="0 0 120 120" className="absolute inset-0 size-full">
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.25">
        <line x1="0" y1="60" x2="120" y2="60" strokeDasharray="3 3" />
        <line x1="60" y1="0" x2="60" y2="120" strokeDasharray="3 3" />
        <circle cx="60" cy="60" r="28" fill="none" />
        <circle cx="60" cy="60" r="1.5" fill="currentColor" />
      </g>
    </svg>
  );
}

export function HQFooter() {
  return (
    <footer
      id="contact"
      className="bp-section"
      style={{
        background: "#f4f4f6",
        backgroundImage: "radial-gradient(#e4e4e7 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
        color: "#161617",
        overflow: "hidden",
      }}
    >
      <div className="bp-body" style={{ border: "none" }}>
        <div className="bp-row" style={{ paddingTop: 0, borderTop: "none" }}>
          <div className="flex flex-wrap gap-2">
            {["Software", "Marketing", "IT", "Branding", "Cloud", "DevOps", "Security"].map((t) => (
              <span
                key={t}
                className="border border-dotted text-xs font-display font-bold uppercase tracking-widest"
                style={{
                  borderColor: "oklch(0 0 0 / 0.15)",
                  color: "oklch(0 0 0 / 0.4)",
                  padding: "6px 16px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="bp-row">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            style={{ borderLeft: "1px solid oklch(0 0 0 / 0.08)" }}
          >
            <div className="relative flex items-center justify-center min-h-[180px]">
              <Crosshairs />
              <div
                className="size-14 bg-brand-dark text-white grid place-items-center font-display font-bold text-xl relative z-10"
                style={{ border: "1px solid oklch(1 1 1 / 0.15)" }}
              >
                HQ
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="text-xs font-display font-bold uppercase tracking-widest" style={{ color: "oklch(0 0 0 / 0.3)" }}>
                Company
              </div>
              <ul className="mt-5 space-y-2.5">
                {["About", "Blog", "Careers", "Press"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-black transition-colors" style={{ color: "oklch(0 0 0 / 0.55)" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1">
              <div className="text-xs font-display font-bold uppercase tracking-widest" style={{ color: "oklch(0 0 0 / 0.3)" }}>
                Support &amp; Socials
              </div>
              <ul className="mt-5 space-y-2.5">
                {["Help Center", "Status", "Contact Support"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-black transition-colors" style={{ color: "oklch(0 0 0 / 0.55)" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3">
                <a href="#" className="size-8 border border-dotted grid place-items-center" style={{ borderColor: "oklch(0 0 0 / 0.15)" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="size-4 text-brand-crimson">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" stroke="currentColor" strokeWidth="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" className="size-8 border border-dotted grid place-items-center" style={{ borderColor: "oklch(0 0 0 / 0.15)" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="size-4 text-brand-crimson">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" className="size-8 border border-dotted grid place-items-center" style={{ borderColor: "oklch(0 0 0 / 0.15)" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="size-4 text-brand-crimson">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" className="size-8 border border-dotted grid place-items-center" style={{ borderColor: "oklch(0 0 0 / 0.15)" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="size-4 text-brand-crimson">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bp-row" style={{ paddingBottom: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 md:py-20 relative"
            style={{ borderTop: "1px dotted oklch(0 0 0 / 0.1)", borderBottom: "1px solid oklch(0 0 0 / 0.08)" }}
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight">
              Let&apos;s build something <span className="text-brand-crimson">remarkable.</span>
            </h2>
            <p className="mt-5 text-sm leading-[1.8] max-w-md mx-auto" style={{ color: "oklch(0 0 0 / 0.5)" }}>
              Tell us about your product, campaign or system. We&apos;ll come back within one business day with a plan.
            </p>
            <a
              href="mailto:hello@hqnepal.com"
              className="mt-8 inline-block bg-brand-dark text-white px-10 py-4 font-display font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              hello@hqnepal.com
            </a>
          </motion.div>
        </div>

        <div className="bp-row" style={{ paddingBottom: 0 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between text-xs"
            style={{ color: "oklch(0 0 0 / 0.4)" }}
          >
            <div>© {new Date().getFullYear()} HQNepal Pvt. Ltd. — Pokhara, Nepal</div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0" style={{ perspective: "800px" }}>
        {cubes.map((cube, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: cube.x,
              top: cube.y,
              width: cube.size,
              height: cube.size,
              opacity: cube.opacity,
              color: "#161617",
              animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: cube.delay,
            }}
          >
            <IsoCube size={cube.size} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
      `}</style>
    </footer>
  );
}
