import React, { createContext, useContext, useEffect, useRef, useState } from "react";

// Context created
const MusicContext = createContext();

// Initialize musicprovider
export const MusicProvider = ({ children }) => {

    const [currentSong, setCurrentSong] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const audioRef = useRef(null);

    const playSong = (song) => {
        setCurrentSong(song)
        setIsPlaying(true)
    };

    const togglePlay = () => {
        setIsPlaying((prev) => !prev)
    };

    const seek = (percentage) => {
        if (!audioRef.current || !duration) return;

        const newTime = (percentage / 100) * duration;

        audioRef.current.currentTime = newTime;

    };

    useEffect(() => {
        if (!currentSong) return;

        const audio = audioRef.current;

        audio.src = currentSong.audio;
        audio.load();

        const handleLoadMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener(
            "loadedmetadata",
            handleLoadMetadata
        );

        return () => {
            audio.removeEventListener(
                "loadedmetadata",
                handleLoadMetadata
            );
        };
    }, [currentSong]);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio || !currentSong) return;

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying, currentSong]);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            audio.removeEventListener(
                "timeupdate", handleTimeUpdate
            );
        };
    }, [])


    return (
        <MusicContext.Provider value={{
            currentSong,
            isPlaying,
            currentTime,
            duration,
            playSong,
            togglePlay,
            seek
        }}>
            {children}
            <audio ref={audioRef} />

        </MusicContext.Provider>
    );

};

// context has been use
export const useMusic = () => {
    const context = useContext(MusicContext);

    if (!context) {
        throw new Error("useMusic must be used inside MusicProvider")
    }

    return context
}
