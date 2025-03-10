const Marquee = () => {
    return (
      <div className="relative overflow-hidden whitespace-nowrap bg-black py-1 w-full">
        <div className="flex justify-around gap-8 animate-marquee text-white text-2xl font-bold uppercase w-max will-change-transform">
          <span>𝕿𝖗𝖛𝖊 𝕱𝖛𝖐𝖎𝖓𝖌 𝕮𝖔𝖑𝖔𝖒𝖇𝖎𝖆𝖓 𝕽𝖆𝖜 𝕭𝖑𝖆𝖈𝖐 𝕸𝖊𝖙𝖆𝖑</span>
          <span>𝕿𝖗𝖛𝖊 𝕱𝖛𝖐𝖎𝖓𝖌 𝕮𝖔𝖑𝖔𝖒𝖇𝖎𝖆𝖓 𝕽𝖆𝖜 𝕭𝖑𝖆𝖈𝖐 𝕸𝖊𝖙𝖆𝖑</span>
        </div>
      </div>
    );
  };
  
  export default Marquee;