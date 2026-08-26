import React, { useState } from "react";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Playview from "../music/Playview";
import MusicPlayer from "../music/MusicPlayer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const [showScrollbar, setShowScrollbar] = useState(false)
    return (
        <div className="h-screen grid grid-rows-[66px_1fr_70px] text-white bg-black overflow-auto">
            <Navbar />
            <div className="grid grid-cols-[315px_1fr_45px] gap-2 overflow-hidden">
                <Sidebar />
                <main
                    onMouseEnter={() => (setShowScrollbar(true))}
                    onMouseLeave={() => (setShowScrollbar(false))}
                    className={`min-h-0 bg-[#121212] overflow-y-auto rounded-md spotify-scrollbar ${showScrollbar ? "scrollbar-visible" : ""}`}>
                    <Outlet />
                </main>
                <Playview />
            </div>
            <MusicPlayer />
        </div>
    )
}

export default MainLayout