
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
async function AuthRootLayout({ children }: { children: React.ReactNode }) {


  const auth = await isAuthnticated();

  if (auth) {
    redirect("/dashboard");
  }

  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >

        <QueryProvider>{children} </QueryProvider>

        <Toaster />


      </body>
    </html>
  )
}

export default AuthRootLayout