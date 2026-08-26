import React from "react";
import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat2 } from "lucide-react";
import Button1 from "../common/Button1";
import ProgressBar from "./ProgressBar";
import { useMusic } from "../../context/MusicContext";

const PlayerControls = () => {

    const {isPlaying, togglePlay, } = useMusic();

    return (
        <div className="flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
                <Button1 icon={Shuffle} />
                <Button1 icon={SkipBack} />
                <button onClick={togglePlay}
                    className="p-2 rounded-full bg-red-50">
                    {isPlaying ? <Pause size={18} color="black" /> : <Play size={18} color="black" />}
                </button>
                <Button1 icon={SkipForward} />
                <Button1 icon={Repeat2} />
            </div>
            <ProgressBar />
        </div>
    )
}

export default PlayerControls