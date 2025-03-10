import Image from "next/image"
import tns from "@/public/tns.png"
import tns3d from "@/public/tans3D.gif"
const Genres = () => {
    return(
        <section className="flex justify-center items-center pt-6">
            <div>
            <Image
                src={tns3d}
                alt="telekinesis is sping"
                width={300}
                height={300}
                // className="animate-spin-3d"
             />
            </div>
            <p className="text-white text-4xl text-center">
                𝕽𝖆𝖜 𝕭𝖑𝖆𝖈𝖐𝕸𝖊𝖙𝖆𝖑/𝕯𝖚𝖓𝖌𝖊𝖔𝖓 𝕾𝖞𝖓𝖙𝖍/𝕯𝖆𝖗𝖐 𝕬𝖒𝖇𝖎𝖊𝖓𝖙/𝕶𝖊𝖑𝖑𝖊𝖗 𝕾𝖞𝖓𝖙𝖍/𝕿𝖆𝖓𝖟𝖊𝖑𝖈𝖔𝖗𝖊/𝕿𝖊𝖈𝖍𝖓𝖔/𝕭𝖑𝖆𝖈𝖐 𝕹𝖔𝖎𝖘𝖊
            </p>
            <div>
            <Image
                src={tns3d}
                alt="telekinesis is sping"
                width={300}
                height={300}
                // className="animate-spin-3d"
             />
            </div>
        </section>
    )
}

export default Genres