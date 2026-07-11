export interface SiteConfig {
  url: string;
  name: string;
  description: string;
  author: string;
  email: string;
  socialLinks: Array<{
    platform: string;
    url: string;
    label?: string;
  }>;
}

export const siteConfig: SiteConfig = {
  url: "https://hqnepal.com",
  name: "HQNepal",
  description:
    "IT, marketing and software development agency. We build bold digital products, growth systems and brands that stop the scroll.",
  author: "HQNepal",
  email: "hello@hqnepal.com",

  socialLinks: [
    { platform: "github", url: "https://github.com/hqnepal", label: "GitHub" },
    { platform: "linkedin", url: "https://linkedin.com/company/hqnepal", label: "LinkedIn" },
    { platform: "x", url: "https://x.com/hqnepal", label: "X" },
    { platform: "discord", url: "https://discord.gg/hqnepal", label: "Discord" },
  ],
} as const;

export default siteConfig;
