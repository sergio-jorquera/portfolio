import { useState, useRef } from "react";
import PlayLogo from "./PlayLogo";
import StopLogo from "./StopLogo";
import song from "../assets/Music/portfolio.mp3";

export default function MusicButton({ className = "" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(song));

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      audio.loop = true;
      audio.volume = 0.4;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className={`
        p-4
        text-black dark:text-red-500
        hover:scale-110 transition-transform duration-300
        ${className}
      `}
      aria-label={isPlaying ? "Stop music" : "Play music"}
    >
      {isPlaying ? (
        <StopLogo className="h-10 w-10" />
      ) : (
        <PlayLogo className="h-10 w-10" />
      )}
    </button>
  );
}
