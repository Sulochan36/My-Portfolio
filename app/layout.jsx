import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sulochan Mahajan",
  description: "Portfolio of Sulochan Mahajan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
      <div>
          <Navbar/>
          <div className="md:mx-24 ">
            {children}
          </div>
          <Footer />
        </div>
        
        <GoogleAnalytics gaId="G-3BL8QZS5ND" />
      </body>
      
    </html>
  );
}
