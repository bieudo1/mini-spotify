import React, { useState } from "react";
import Track1 from "./music/Titliaan Warga.mp3";
import Track2 from "./music/Naach Meri Rani.mp3";
import Track3 from "./music/JasonDerulo-TakeYouDancing.mp3";
const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Titliaan Warga.mp3",
        file: Track1,
      },
      {
        name: "Naach Meri Rani.mp3",
        file: Track2,
      },
      {
        name: "JasonDerulo-TakeYouDancing.mp3",
        file: Track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }


const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };