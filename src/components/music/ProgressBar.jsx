import React, { useState } from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(15)
    return (
        <div className="flex items-center gap-2">
            <span className="text-xs text-white">3:38</span>
            <input
                type="range"
                min={0}
                max={100}
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                style={{"--progress":`${progress}%`}}
                className="spotify-seekbar"
            />
            <span className="text-xs text-white">4:56</span>
        </div>
    )
}

export default ProgressBar