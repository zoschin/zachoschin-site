import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import NavLinks from "./nav-links";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zach Oschin",
  description: "Personal website of Zach Oschin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable} font-mono antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <nav className="max-w-2xl w-full mx-auto px-6 pt-10 pb-4">
            <NavLinks />
          </nav>
          <main className="max-w-2xl w-full mx-auto px-6 py-12 flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
