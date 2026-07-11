export interface NavItem {
  href: string;
  label: string;
  icon?: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export const footerNav = {
  product: [
    { href: "/#services", label: "Services" },
    { href: "/#pricing", label: "Pricing" },
  ] as const,
  company: [
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ] as const,
  social: [
    { href: "https://github.com/hqnepal", label: "GitHub" },
    { href: "https://linkedin.com/company/hqnepal", label: "LinkedIn" },
    { href: "https://x.com/hqnepal", label: "X" },
  ] as const,
} as const;

export function getFooterNav(section: keyof typeof footerNav): NavItem[] {
  return footerNav[section] as unknown as NavItem[];
}
