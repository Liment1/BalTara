import Sounds from "./sounds";
import React, { useState } from "react";
function SoundApp() {
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    setIsPlaying((prevState) => !prevState);
  }
  function handlePlay() {
    // Change isPlaying state when play button is clicked
    setIsPlaying(true);
  }

  return (
    <div className="SoundApp">
      <button className="play" onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <Sounds isPlaying={isPlaying} />
    </div>
  );
}

export default SoundApp;
