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
        <div>
          <Container className='min-h-screen shadow-2xl shadow-neutral-400  bg-container-background rounded-2xl border-[2px] border-neutral-200 dark:border-neutral-600 '>
            <Navbar />
            <div>
              {children}
            </div>
            <Footer />
          </Container>
        </div>


        <GoogleAnalytics gaId="G-3BL8QZS5ND" />
      </body>

    </html >
  );
}
