import type { Metadata } from "next";
import { Nunito, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight : ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Beachland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="min-h-screen">
          <Header/>
          {children}
        </main>
      </body>
    </html>
  );
}
