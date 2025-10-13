import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PeakScreens — Summit County's Digital Ad Network",
  description: "Bar TVs, gondolas, hotel lobbies — reach skiers and riders across Summit County.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
