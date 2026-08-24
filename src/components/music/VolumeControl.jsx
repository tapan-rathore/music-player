import React from "react";
import ProgressBar from "./ProgressBar";
import { MicVocal, ListMusic, Smartphone, Volume2, PictureInPicture, Maximize } from "lucide-react";

const VolumeControl = () => {
    return (
        <div className="flex gap-2 justify-end">
            <MicVocal size={18}/>
            <ListMusic size={18} />
            <Smartphone size={18} />
            <Volume2 size={18} />
            <ProgressBar />
            <PictureInPicture size={18} />
            <Maximize size={18} />
        </div>
    )
}

export default VolumeControl