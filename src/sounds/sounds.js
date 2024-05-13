import React, { useEffect } from "react";
import backgroundMusic from "./ratuanom.mp3";

function Sounds({ isPlaying }) {
  useEffect(() => {
    const audioElement = document.getElementById("backgroundAudio");
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);

  return <audio id="backgroundAudio" src={backgroundMusic} loop />;
}

export default Sounds;
