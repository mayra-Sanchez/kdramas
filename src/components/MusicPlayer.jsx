import { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import "../styles/MusicPlayer.css";

const MusicPlayer = () => {
  const playerRef = useRef(null); // 👈 ESTE ref se usa para nodeRef
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const tracks = [
    {
      title: "Stay With Me - Goblin OST",
      src: "/audio/stay_with_me.mp3"
    },
    {
      title: "Spring - WTLGT OST",
      src: "/audio/Spring.mp3"
    },
    {
      title: "Start Over - Itaewon Class OST",
      src: "/audio/start_over.mp3"
    },
    { title: "Here I Am Again - Crash Landing on You", src: "/audio/here_i_am_again.mp3" },
    { title: "Love So Fine - True Beauty", src: "/audio/love_so_fine.mp3" },
    { title: "Beautiful - Goblin", src: "/audio/beautiful.mp3" },
  ];


  useEffect(() => {
    const saved = localStorage.getItem("musicPlayerState");
    if (saved) {
      const state = JSON.parse(saved);
      setIsPlaying(state.isPlaying);
      setVolume(state.volume);
      setTrackIndex(state.trackIndex);
      setPosition(state.position);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    isPlaying ? audio.play() : audio.pause();

    localStorage.setItem(
      "musicPlayerState",
      JSON.stringify({ isPlaying, volume, trackIndex, position })
    );
  }, [isPlaying, volume, trackIndex, position]);

  const togglePlay = () => setIsPlaying((p) => !p);
  const nextTrack = () => setTrackIndex((prev) => (prev + 1) % tracks.length);
  const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));
  const handleClose = () => setIsVisible(false);
  const handleDrag = (_, data) => setPosition({ x: data.x, y: data.y });

  if (!isVisible) return null;

  return (
    <Draggable nodeRef={playerRef} position={position} onStop={handleDrag}>
      <div className="music-player" ref={playerRef}>
        <audio ref={audioRef} src={tracks[trackIndex].src} loop />
        <div className="music-header">
          <strong>{tracks[trackIndex].title}</strong>
          <button className="btn-close" onClick={handleClose}>✖</button>
        </div>
        <div className="music-controls">
          <button onClick={togglePlay}>
            {isPlaying ? "⏸️ Pausa" : "▶️ Reproducir"}
          </button>
          <button onClick={nextTrack}>⏭️ Cambiar</button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default MusicPlayer;
