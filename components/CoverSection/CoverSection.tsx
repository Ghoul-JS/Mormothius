import Image from "next/image"

import imperiumSatanaeCover from "@/public/Covers/imp.png"
import gonorreaSplitCover from "@/public/Covers/noise.jpg"
import vampCover from "@/public/Covers/vapm.png"
import kxdSplitCover from "@/public/Covers/kxd.png"
import demoTwoKnockCover from "@/public/Covers/soul.png"
import telekinesiSplitCover from "@/public/Covers/telek.png"

const CoverSection = () => {
    return (
      <div className="flex flex-col items-center gap-4 p-4">
        {/* Primera fila */}
        <div className="flex gap-4">
          <Image src={imperiumSatanaeCover} width={300} height={300} alt="imperium satanae ep cover"/>
          <Image src={kxdSplitCover} width={300} height={300} alt="knockturn y the dragon sorcerer cover slit"/>
          <Image src={demoTwoKnockCover} width={300} height={300} alt="knockturn demo 2 cover"/>
        </div>
        
        {/* Segunda fila */}
        <div className="flex gap-4">
          <Image src={vampCover} width={300} height={300} alt="vampiro sodomizador demo 1 cover"/>
          <Image src={gonorreaSplitCover} width={300} height={300} alt="gonorrea y skum guy split cover"/>
          <Image src={telekinesiSplitCover} width={300} height={300} alt="telekinesis vs shneider vs euthanasi split cover"/>
        </div>
      </div>
    );
  };

export default CoverSection