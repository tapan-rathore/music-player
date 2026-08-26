import React, { useState } from "react";
import { useMusic } from "../../context/MusicContext";

const ProgressBar = () => {

    const { currentTime, duration, seek } = useMusic()

    const progress = duration ? (currentTime / duration) * 100 : 0;

    const formatTime = (time) => {
        if (!time || !Number.isFinite(time)) {
            return "0:00";
        }

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");

        return `${minutes}:${seconds}`;
    }


    return (
        <div className="flex items-center gap-2">
            <span className="text-xs text-white">{formatTime(currentTime)}</span>
            <input
                type="range"
                min={0}
                max={100}
                value={progress}
                onChange={(e) => seek(Number(e.target.value))}
                style={{ "--progress": `${progress}%` }}
                className="spotify-seekbar"
            />
            <span className="text-xs text-white">{formatTime(duration)}</span>
        </div>
    )
}

export default ProgressBar