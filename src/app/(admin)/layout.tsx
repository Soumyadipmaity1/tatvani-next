import React from 'react'
import { Geist, Geist_Mono } from 'next/font/google';
import "../globals.css";
import QueryProvider from '@/context/QueryProvider';
import { Toaster } from 'react-hot-toast';
import isAuthnticated from '@/hooks/user/isAuthnticated';
import { redirect } from 'next/navigation';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
async function AdminRootLayout({ children }: { children: React.ReactNode }) {
  const auth = await isAuthnticated();

  if (!auth) {
    redirect("/login");
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} suppressHydrationWarning
      >

        <QueryProvider>

          {children}
        </QueryProvider>

        <Toaster />


      </body>
    </html>
  )
}

export default AdminRootLayout