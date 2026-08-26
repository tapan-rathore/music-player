import React from "react";
import { useMusic } from "../../context/MusicContext";

const SongCard = ({ song }) => {

    const { playSong } = useMusic();

    return (
        <div onClick={()=> playSong(song)} 
        className="w-44 h-full p-2 shrink-0 rounded-lg bg-[#121212] hover:bg-[#1f1f1f] transition-colors duration-200">
            <img
                className="w-full aspect-square rounded-md object-cover"
                src={song.cover}
                alt="cover image" />

            <h3 className="mt-2 text-base font-semibold text-white line-clamp-2 hover:underline">{song.title}</h3>
            <p className="mt-1 text-sm font-semibold text-[#a7a7a7] line-clamp-2">{song.artist}</p>
        </div>
    )
}

export default SongCard