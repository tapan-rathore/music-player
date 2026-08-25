import React from "react";
import SongCard from "./SongCard";
import Button1 from "../common/Button1";
import songs from "../../data/song"

const SongSection = () => {
    return (
        <div className={`p-6`}>
            {/* Song Gallery header */}
            <div className="flex justify-between pb-2">
                <h3 className="font-bold text-2xl hover:underline">Trending Songs</h3>
                <Button1 btnName="Show all" translate={false} className="text-sm font-bold" />
            </div>

            {/* Album Card */}
            <div className="flex overflow-x-auto spotify-x-scrollbar">
                {songs.map((song) => (
                    <SongCard key={song.id} song={song} />
                ))}
            </div>
        </div>
    )
}

export default SongSection