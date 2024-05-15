import Sounds from "./sounds";
import React, { useState } from "react";

function SoundApp() {
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    setIsPlaying((prevState) => !prevState);
  }

  return (
    <div className="SoundApp">
      <div className="keisen">
        <label>
          <input className="play-btn" type="checkbox" checked={isPlaying} onChange={togglePlay} />
          <div className="play-icon"></div>
          <div className="pause-icon"></div>
        </label>
      </div>
      <Sounds isPlaying={isPlaying} />
    </div>
  );
}

export default SoundApp;
