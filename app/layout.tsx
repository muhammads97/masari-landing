import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
