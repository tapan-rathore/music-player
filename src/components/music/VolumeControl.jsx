import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { MicVocal, ListMusic, Smartphone, Volume2, VolumeX, PictureInPicture, Maximize } from "lucide-react";
import Button1 from "../common/Button1";

const VolumeControl = () => {
    const [ismute, setIsMute] = useState(false)

    const handleClick = () => {
        setIsMute(!ismute)
    }

    return (
        <div className="flex gap-2 justify-end">
            <Button1 icon={MicVocal} />
            <Button1 icon={ListMusic} />
            <Button1 icon={Smartphone} />
            <Button1 onClick={handleClick}
                icon={ismute ? VolumeX: Volume2 } />
            <ProgressBar />
            <Button1 icon={PictureInPicture} />
            <Button1 icon={Maximize} />
        </div>
    )
}

export default VolumeControl