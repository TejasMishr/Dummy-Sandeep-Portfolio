import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/Footer";
import SideNav from '@/components/nav/SideNav';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sandeep Singh",
  description: "A modern web application built with Next.js",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <div className="flex">
          <SideNav />
          <div className="flex-1 min-h-screen transition-all duration-300 
            md:pl-20 pb-20 md:pb-0 pt-16 md:pt-0
            main-content"
          >
            <main className="p-4 sm:p-6 lg:p-8">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
