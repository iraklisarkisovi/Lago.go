import Image from "next/image";
import { Geist_Mono, Inter } from "next/font/google";
import LandingPage from "./Compos/LandingPage";
import Header from "./Compos/Header";
import Sections from "./Compos/Sections";
import MapPage from "./Compos/Map";
import Footer from "./Compos/Footer";
 
export const InterFont = Inter({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <Sections />
      <MapPage/>
      <Footer/>
    </>
  );
}
