import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://masari.salahslab.com"),
  title: {
    default: "Masari – AI-Powered Expense Tracking",
    template: "%s | Masari",
  },
  description:
    "Chat with AI, snap receipts, and track expenses effortlessly. Masari brings intelligent financial management to your fingertips.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/images/logo-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
