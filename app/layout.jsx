import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'

import Container from "./components/Container";


const inter = Inter({
  subsets: ["latin"],
  weight : ["400" , "500" , "600" , "700" , "800" , "900"]
});

export const metadata = {
  title: "Sulochan Mahajan",
  description: "Portfolio of Sulochan Mahajan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="flex flex-grow min-h-screen flex-col">
          <Container className='min-h-screen bg-container-background rounded-2xl border-[4px] border-black/10 dark:white/10 '>
            <Navbar />
            <div className="min-h-screen mt-30">
              {children}
            </div>
            <Footer />
          </Container>
        </div>


        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>

    </html >
  );
}
