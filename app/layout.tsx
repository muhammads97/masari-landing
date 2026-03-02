import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Masari",
  description: "AI-powered expense tracking",
  openGraph: {
    title: "Masari",
    description: "AI-powered expense tracking",
    url: "https://masari.salahslab.com",
    siteName: "Masari",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
