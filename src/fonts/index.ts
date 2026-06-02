import { Anybody, DM_Sans } from "next/font/google";

export const anybody = Anybody({
  variable: "--font-display",
  display: "swap",
  preload: true,
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  variable: "--font-body",
  display: "swap",
  preload: true,
  subsets: ["latin"],
});
