import bat1 from "@/public/bats/bat1.gif"
import text3d from "@/public/text3d/link3d.gif"

import Image from "next/image"

const BatSeparator = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-auto">
            <Image src={bat1} height={100} width={300} alt="bat 3d"/>
            <Image className="absolute top-1" src={text3d} height={500} width={500} alt="text 3d"/>
        </section>
    )
}

export default BatSeparator;