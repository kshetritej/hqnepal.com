import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/services",
    generateId: ({ entry }) => entry.replace(/\.[^/.]+$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().default("Code2"),
    order: z.number().default(0),
    features: z.array(z.string()).default([]),
  }),
});

const faqs = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/faqs",
    generateId: ({ entry }) => entry.replace(/\.json$/, ""),
  }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/testimonials",
    generateId: ({ entry }) => entry.replace(/\.json$/, ""),
  }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    industry: z.string(),
    order: z.number().default(0),
  }),
});

const work = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/work",
    generateId: ({ entry }) => entry.replace(/\.json$/, ""),
  }),
  schema: z.object({
    tag: z.string(),
    title: z.string(),
    description: z.string(),
    span: z.string().default("md:col-span-1"),
    order: z.number().default(0),
  }),
});

const pricing = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/pricing",
    generateId: ({ entry }) => entry.replace(/\.json$/, ""),
  }),
  schema: z.object({
    name: z.string(),
    price: z.string(),
    per: z.string().optional(),
    description: z.string(),
    features: z.array(z.string()).default([]),
    cta: z.string(),
    highlight: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  services,
  faqs,
  testimonials,
  work,
  pricing,
};
