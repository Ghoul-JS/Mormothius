import Link from "next/link"


const LinkSection = () => {
    return (
        <div className="flex text-blue-400 justify-around text-4xl ">
            <Link className="hover:text-red-600 border-b-2 border-b-blue-400 pb-1 hover:border-b-red-600" href="https://mormoth.bandcamp.com" target="_blank">𝕭𝖆𝖓𝖉𝕮𝖆𝖒𝖕</Link>
            <Link className="hover:text-red-600 border-b-2 border-b-blue-400 pb-1 hover:border-b-red-600" href="https://open.spotify.com/intl-es/artist/4RXulgsJNLHoTCqHSGEo5S?si=VLZpmXV5SXqpcsorlRKiXw" target="_blank">𝕾𝖕𝖔𝖙𝖎𝖋𝖞</Link>
            <Link className="hover:text-red-600 border-b-2 border-b-blue-400 pb-1 hover:border-b-red-600" href="https://www.youtube.com/@Mormoth" target="_blank">𝖄𝖔𝖚𝕿𝖚𝖇𝖊</Link>
            <Link className="hover:text-red-600 border-b-2 border-b-blue-400 pb-1 hover:border-b-red-600" href="https://soundcloud.com/ghoul-js" target="_blank">𝕾𝖔𝖚𝖓𝖉𝖈𝖑𝖔𝖚𝖉</Link>
            <Link className="hover:text-red-600 border-b-2 border-b-blue-400 pb-1 hover:border-b-red-600" href="https://www.metal-archives.com/bands/Mormoth/3540547816" target="_blank">𝕸𝖊𝖙𝖆𝖑𝖑𝖚𝖒</Link>
        </div>
    )
}

export default LinkSection