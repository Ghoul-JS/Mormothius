import bat1 from "@/public/bats/bat1.gif"
import bat2 from "@/public/bats/bat2.gif"
import bat3 from "@/public/bats/bat3.gif"

import stuff3d from "@/public/text3d/stuff3d.gif"

import Image from "next/image"

const BatStuff = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-auto">
            <Image src={bat1} height={100} width={300} alt="bat 3d"/>
            <Image className="absolute top-1" src={stuff3d} height={500} width={500} alt="text 3d"/>
        </section>
    )
}

export default BatStuff;