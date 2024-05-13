import React from "react";
import music from "./ratuanom.mp3";

function Sound({ isPlaying, toggleAudio }) {
  return (
    <div className="tampungSound">
      <img
        id="play"
        src="https://res.cloudinary.com/dchan630/image/upload/v1481676817/play_ierlvl.png"
        alt="Play Button"
        className="img-fluid"
        style={{ display: isPlaying ? "none" : "inline" }}
        onClick={toggleAudio}
      />
      <img
        id="pause"
        src="https://res.cloudinary.com/dchan630/image/upload/v1481676820/pause_nqfaht.png"
        alt="Pause Button"
        className="img-fluid"
        style={{ display: isPlaying ? "inline" : "none" }}
        onClick={toggleAudio}
      />
      <audio id="player" src={music} />
    </div>
  );
}

export default Sound;
