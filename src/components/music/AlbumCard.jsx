import React from "react";
import SongCard from "./SongCard";

const AlbumCard = () => {
    return (
        <div className={`p-6`}>
            {/* Song Gallery header */}
            <div className="flex justify-between pb-2">
                <h3 className="font-bold text-2xl hover:underline">Trending Songs</h3>
                <span className="text-sm font-bold text-[#b3b3b3]">Show all</span>
            </div>

            {/* Album Card */}
            <div className="flex overflow-x-auto spotify-x-scrollbar">
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
            </div>
        </div>
    )
}

export default AlbumCard