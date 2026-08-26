import React from "react";
import { CirclePlus } from "lucide-react";
import { useMusic } from "../../context/MusicContext";

const SidePlayerCard = () => {

    const { currentSong } = useMusic();

    if(!currentSong) {
        return null;
    }

    return (
        <div className="flex items-center justify-start">
            <img
                className="w-14 h-14 aspect-square rounded-md object-cover"
                src={currentSong.cover}
                alt={currentSong.title} />
            <div className="p-2">
                <h3 className="text-sm font-semibold text-white line-clamp-1 hover:underline">{currentSong.title}</h3>
                <p className="text-xs  font-semibold text-[#a7a7a7] line-clamp-1">{currentSong.artist}</p>
            </div>
            <CirclePlus />
        </div>
    )
}

export default SidePlayerCard