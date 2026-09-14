import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wayman Ministries – Making a Difference in Jacksonville, FL",
  description:
    "Wayman Ministries is one of Jacksonville, Florida's most dynamic ministries with two worship locations. We are the Ministry that is Making a Difference!",
  keywords: ["Wayman Ministries", "Wayman Temple", "church Jacksonville FL", "AME church"],
  openGraph: {
    title: "Wayman Ministries – Making a Difference",
    description:
      "Dynamic ministry serving Jacksonville, FL. Two worship locations, charter school, and community development.",
    url: "https://wayman.org",
    siteName: "Wayman Ministries",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
