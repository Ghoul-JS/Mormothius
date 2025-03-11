import Image from "next/image";
import goat from "@/public/goat.png";

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center relative">
        {/* <Image
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            src={wrapperBg}
            alt="wrapper bg >:)"
            layout="fill"
        /> */}
            
            <h1 className="text-6xl text-center z-10 relative pt-5 animate-colorChange 
               [text-shadow:4px_4px_2px_rgba(0,0,0,0.8)]">
                ⸸𖤐𝕸𝖔𝖗𝖒𝖔𝖙𝖍𝖎𝖚𝖘𖤐⸸
            </h1>   
            <h2 className="text-2xl z-10 text-black text-center animate-colorChangeSubT">
                𝕽𝖆𝖜 𝕭𝖑𝖆𝖈𝖐 𝖒𝖊𝖙𝖆𝖑, 𝕯𝖚𝖓𝖌𝖊𝖔𝖓 𝕾𝖞𝖓𝖙𝖍, 𝕯𝖆𝖗𝖐 𝕬𝖒𝖇𝖎𝖊𝖓𝖙, 𝕶𝖊𝖑𝖑𝖊𝖗 𝖘𝖞𝖓𝖙𝖍 𝖘𝖎𝖓𝖈𝖊 2023
            </h2>
                
            <div className="flex justify-center mt-10">
                <Image 
                    className="transition-transform duration-300 ease-in-out hover:scale-110" 
                    width={400} 
                    height={100} 
                    src={goat} 
                    alt="the goat >:)" 
                />
            </div>
        </div>
    );
}

export default LandingPage;