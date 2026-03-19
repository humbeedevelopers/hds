import { Instrument_Serif, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utils/Navbar";
import SmoothScroll from "@/components/Utils/SmoothScroll";
import AppProvider from "@/providers/AppProvider";
import GlobalLoaderWrapper from "@/components/Utils/GlobalLoaderWrapper";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
});

// export const metadata = {
//   title: "Humbee Design Studio",
//   description: "Digital Agency",
// };

export const metadata = {
  title: {
    default: "Humbee Design Studio",
    template: "%s | Humbee Design Studio",
  },
  description: "Digital Agency specializing in modern web design and development",

  keywords: ["web design", "digital agency", "next.js", "UI/UX"],

  authors: [{ name: "Humbee Studio" }],

  openGraph: {
    title: "Humbee Design Studio",
    description: "We build modern, high-performance websites",
    url: "https://yourdomain.com",
    siteName: "Humbee Studio",
    images: [
      {
        url: "/logo.png", // put in public
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Humbee Design Studio",
    description: "Digital Agency",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${montserrat.variable} ${openSans.variable} antialiased bg-bg-light relative`}
      >
        <div
          className="fixed inset-0 -z-10 opacity-[0.15] bg-noise pointer-events-none"
          aria-hidden="true"
        />
          <SmoothScroll>
            <div className="relative z-10">
              <AppProvider>
                <Navbar />
                <GlobalLoaderWrapper>
                  {children}
                </GlobalLoaderWrapper>
              </AppProvider>
            </div>
          </SmoothScroll>
      </body>
    </html>
  );
}