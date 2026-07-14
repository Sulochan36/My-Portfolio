import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'

import Container from "./components/Container";


const geist_mono = Geist_Mono({
  subsets: ["latin"],
  weight : ["400" , "500" , "600" , "700", "800", "900"]
});

export const metadata = {
  metadataBase: new URL("https://sulochanmahajan.com/"),

  title: {
    default: "Sulochan Mahajan | Full Stack Developer",
    template: "%s | Sulochan Mahajan",
  },

  description:
    "MERN Stack & Next.js developer building full-stack web apps. Open to remote internships and roles.",

  openGraph: {
    title: "Sulochan Mahajan | Full Stack Developer",
    description:
      "Portfolio of Sulochan Mahajan, a MERN Stack & Next.js developer. Open to remote internships and jobs.",
    url: "/",
    siteName: "Sulochan Mahajan",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Sulochan Mahajan Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sulochan Mahajan | MERN Stack Developer",
    description:
      "MERN Stack & Next.js developer building full-stack web apps.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geist_mono.className} antialiased scroll-smooth`}
      >
        <div className="flex flex-grow min-h-screen flex-col">
          <Container className='min-h-screen bg-container-background border-[4px] border-black/10 dark:border-white/10 '>
            <Navbar />
            <div className="min-h-screen mt-20">
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
