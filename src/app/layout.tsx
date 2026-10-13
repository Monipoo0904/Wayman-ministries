import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Wayman Ministries – We're One Church, Two Locations!",
  description:
    "Wayman Temple AME Church is one of Jacksonville, Florida's most dynamic ministries. We have two worship locations, with various worship times to meet your demanding schedule.",
  keywords: ["Wayman Ministries", "Wayman Temple", "Wayman Temple AME Church", "Jacksonville FL church"],
  openGraph: {
    title: "Wayman Ministries – We're One Church, Two Locations!",
    description:
      "Wayman Temple AME Church — South Campus and West Campus in Jacksonville, Florida. The Ministry that is Making a Difference!",
    url: "https://wayman.org/ministries/",
    siteName: "Wayman Ministries",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
