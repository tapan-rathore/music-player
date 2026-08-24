import React from "react";
import PlayerControls from "./PlayerControls";
import VolumeControl from "./VolumeControl";
import { Download } from "lucide-react";
import Button1 from "../common/Button1";
import SidePlayerCard from "./SidePlayerCard";

const MusicPlayer = () => {
    return (
        <div className="flex justify-between p-2 h-full items-center gap-20">
            <div className="w-1/3">
                <SidePlayerCard />
            </div>
            <div className="w-1/3">
                <PlayerControls />
            </div>
            <div className="w-1/3">
                <VolumeControl />
            </div>
        </div>
    )
}

export default MusicPlayer