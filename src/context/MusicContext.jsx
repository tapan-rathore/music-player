import React, { createContext, useState } from "react";

const MusicContext = createContext();

export const MusicProvider = ({children}) => {

    const [currentSong, setCurrentSong] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)

}
