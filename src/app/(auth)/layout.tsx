
import { Geist, Geist_Mono } from 'next/font/google';
import "../globals.css";
import QueryProvider from '@/context/QueryProvider';
import { Toaster } from 'react-hot-toast';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
function AuthRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} suppressHydrationWarning
      >

        <QueryProvider>{children} </QueryProvider>

        <Toaster />


      </body>
    </html>
  )
}

export default AuthRootLayout