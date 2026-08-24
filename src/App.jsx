import React from "react";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Playview from "./components/music/Playview";
import MusicPlayer from "./components/music/MusicPlayer";

const App = () => {
  return (
    <div className="h-screen grid grid-rows-[66px_1fr_70px] text-white bg-black overflow-auto">
      <Navbar />
      <div className="grid grid-cols-[315px_1fr_45px] gap-2 overflow-hidden">
        <Sidebar />
        <Home />
        <Playview />
      </div>
      <MusicPlayer />
    </div>
  )
}

export default App