import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import { siteConfig } from "./src/config/site.config";

export default defineConfig({
  site: siteConfig.url,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [
    mdx(),
    sitemap(),
    react(),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  image: {
    layout: "constrained",
  },
  security: {
    checkOrigin: true,
  },
});
