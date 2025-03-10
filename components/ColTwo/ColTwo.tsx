import goatSwip from "@/public/goatSwip.png"
import Image from "next/image"
import goat from "@/public/goat3D.gif"

const ColTwo = () => {
    return(
        <div className="w-full flex flex-col pt-20  items-center">
            <div>
            <Image
                src={goat}
                alt="goat is swipping"
                width={250}
                height={250}
                // className="animate-spin-3d"
             />
            </div>
            <div>
            <Image
                src={goat}
                alt="goat is swipping"
                width={250}
                height={250}
                // className="animate-spin-3d"
             />
            </div>
            <div>
            <Image
                src={goat}
                alt="goat is swipping"
                width={250}
                height={250}
                // className="animate-spin-3d"
             />
            </div>
        </div>
    )
}

export default ColTwo