import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Master Contract Drafting & Freelancing | Lawctopus Law School",
  description:
    "6-month expert-level program. Draft 24+ real-world agreements, learn from top industry practitioners, and launch your freelancing career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
