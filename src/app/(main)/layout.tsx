"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Menubars/Footer";
import Navbar from "@/components/Menubars/Navbar";
import { usePathname } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mutate, setMutate] = useState(false);
  useEffect(() => {
    setMutate(true)
  })
  const pathname = usePathname();
  const noLayoutRoutes = ["/dashboard", "/add-post", "/review-posts"];
  const showLayout = pathname ? !noLayoutRoutes.includes(pathname) : false;
  const queryClient = new QueryClient()
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} suppressHydrationWarning
      >
        <QueryClientProvider client={queryClient}>

          {showLayout && <Navbar />}
          {children}
          {showLayout && <Footer />}
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}