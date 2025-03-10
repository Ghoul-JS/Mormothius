import mmtLogo from "@/public/logos/mmt.gif"
import knLogo from "@/public/logos/kn.gif"
import tekLogo from "@/public/logos/tel.gif"
import vampLogo from "@/public/logos/vamp.gif"
import gonLogo from "@/public/logos/gon.gif"

import Image from "next/image"
import Link from "next/link"

const Bands = () => {
    return(
        <section className="flex justify-around items-center">
            <div className="flex flex-col ">                
                <Link href="https://www.youtube.com/watch?v=6owFOZVhwFM" target="_blank">
                    <Image
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                        src={mmtLogo}
                        alt="mormoth 3d logo"
                        width={300}
                        height={300}
                        // className="animate-spin-3d"
                    />
                <p className="animate-colorChange text-2xl text-center text-white relative bottom-25 ">{`>>𝕸𝖔𝖗𝖒𝖔𝖙𝖍<< ↲`}</p> 
                </Link>
            </div>

            <div className="flex flex-col ">
                <Link href="https://www.youtube.com/watch?v=QMrL89dLgRE" target="_blank">
                    <Image
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                        src={knLogo}
                        alt="knocktuen 3d logo"
                        width={300}
                        height={300}
                        // className="animate-spin-3d"
                    />
                </Link>
                <p className="animate-colorChange text-2xl text-center text-white relative bottom-28 ">{`>>𝕶𝖓𝖔𝖈𝖐𝖙𝖚𝖗𝖓<<↲`}</p>
            </div>

            <div className="flex flex-col ">
                <Link href="https://www.youtube.com/@Ashwinder4444" target="_blank">
                    <Image
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                        src={tekLogo}
                        alt="telekinesis 3d logo"
                        width={300}
                        height={300}
                        // className="animate-spin-3d"
                    />
                </Link>
                <p className="animate-colorChange text-2xl text-center text-white relative bottom-15 ">{`>>𝕿𝖊𝖑𝖊𝕶𝖎𝖓𝖊𝖘𝖎𝖘<<↲`}</p>
            </div>

            <div className="flex flex-col ">
                <Link href="https://www.youtube.com/watch?v=-7E-H6jJZwA" target="_blank">
                    <Image
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                        src={vampLogo}
                        alt="vampiro sodomizador 3d logo"
                        width={300}
                        height={300}
                        // className="animate-spin-3d"
                    />
                </Link>
                <p className="animate-colorChange text-2xl text-center text-white relative bottom-10 ">{`>>𝖁𝖆𝖒𝖕𝖎𝖗𝖔 𝕾𝖔𝖉𝖔𝖒𝖎𝖟𝖆𝖉𝖔𝖗<<↲`}</p>
            </div>

            <div className="flex flex-col ">
                <Link href="https://www.youtube.com/watch?v=jRm3vyJ31wk&t=128s" target="_blank">
                    <Image
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                        src={gonLogo}
                        alt="gonorrea 3d logo"
                        width={300}
                        height={300}
                        // className="animate-spin-3d"
                    />
                </Link>
                <p className="animate-colorChange text-2xl text-center text-white relative bottom-25 ">{`>>𝕲𝖔𝖓𝖔𝖗𝖗𝖊𝖆<<↲`}</p>
            </div>
        </section>
    )
}

export default Bands