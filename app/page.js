import Image from "next/image";
import TopStatus from "@/components/Top_Status";
import Header from "@/components/Header";
import LandingFirst from "@/components/LandingFirst";
import LandingSecond from "@/components/LandingSecond";
import LandingThird from "@/components/LandingThird";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <TopStatus/>
      <LandingFirst/>
      <LandingSecond/>
      <LandingThird/>
      <Banner/>
      <Footer/>
    </>

    
  );
}
