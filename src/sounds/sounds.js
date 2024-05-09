import React from "react";
import backgroundMusic from "./ratuanom.mp3"; // Ganti dengan path file musik Anda

function Sounds() {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return <audio src={backgroundMusic} autoPlay={isPlaying} loop={true} />;
}

export default Sounds;
