import { Inter } from "next/font/google";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <Footer/>
    </>
  );
}