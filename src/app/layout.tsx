import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// The Figma source specifies Satoshi for display type, which isn't
// distributable via next/font/google; Inter at heavy weights is the closest
// same-family substitute and is also the source's own body/UI face, so one
// family covers both roles cleanly.
const inter = Inter({
  variable: "--font-mhmw",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "My House My Way — find a house that suits the ways you live",
  description:
    "Save ideas, connect with designers, and get personalised home recommendations — all in one place.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
