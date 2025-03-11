import LandingPage from "@/components/LandingPage/LandingPage";
import ColOne from "@/components/ColOne/ColOne";
import ColTwo from "@/components/ColTwo/ColTwo";
import LinkSection from "@/components/LinkSection/LinkSection";
import Genres from "@/components/Genres/Genres";
import Bands from "@/components/Bands/Bands";
import BatSeparator from "@/components/BatSeparator/BatSeparator";
import BatGenres from "@/components/BatSeparator/BatGenres";
import BatProjects from "@/components/BatSeparator/BatProjects"
import CoverSection from "@/components/CoverSection/CoverSection";
import BatStuff from "@/components/BatSeparator/BatStuff";
import Footer from "@/components/Footer/Footer";
import Marquee from "@/components/Marquee/Marquee";

export default function Home() {
  return (
<div className="relative w-full min-h-screen">
  <div className="absolute inset-0 bg-[url('/tek3.png')] bg-repeat animate-scroll"></div>

  <div className="relative z-10 flex items-center justify-center min-h-screen text-white">
    <div className="flex flex-row w-full justify-center">
      <ColOne />
      <LandingPage />
      <ColTwo />
    </div>
  </div>

  <div className="relative z-10">
  <BatSeparator />
  </div>

  <div className="relative z-10">
    <LinkSection />
  </div>

  <div className="relative z-10">
  <BatGenres />
  </div>

  <div className="relative z-10">
    <Genres />
  </div>

  <div className="relative z-10">
  <BatProjects />
  </div>

  <div className="relative z-10">
    <Bands />
  </div>

  <div className="relative z-10">
    <BatStuff />
  </div>

  <div className="relative z-10">
    <CoverSection />
  </div>

  <div className="relative z-10">
    <Marquee />
  </div>
  
  <div className="relative z-10">
    <Footer />
  </div>
</div>

  );
}
