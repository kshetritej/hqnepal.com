import type { Metadata } from "next";
import { anybody, dmSans } from "@/fonts";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "HQNepal — IT, Marketing & Software Development Agency",
  description:
    "HQNepal builds bold digital products, marketing systems and software that move businesses forward.",
  openGraph: {
    title: "HQNepal — IT, Marketing & Software",
    description:
      "Software, marketing and IT services that make your business impossible to ignore.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anybody.variable} ${dmSans.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
