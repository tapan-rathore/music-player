import React, { useState } from "react";
import AlbumCard from "../music/AlbumCard";

const Home = () => {
    const [showScrollbar, setShowScrollbar] = useState(false)
    return (
        <div onMouseEnter={() => (setShowScrollbar(true))}
            onMouseLeave={() => (setShowScrollbar(false))}
            className={`min-h-0 bg-[#121212] overflow-y-auto rounded-md spotify-scrollbar ${showScrollbar ? "scrollbar-visible" : ""}`}>
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
        </div>
    )
}

export default Home