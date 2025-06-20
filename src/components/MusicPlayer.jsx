import { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import "../styles/MusicPlayer.css";

const MusicPlayer = () => {
  const playerRef = useRef(null);
  const audioRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState(isMobile ? { x: 0, y: 0 } : { x: 20, y: 20 });
  const [showControls, setShowControls] = useState(!isMobile);

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
    { title: "Here I Am Again - CLOY", src: "/audio/here_i_am_again.mp3" },
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
      if (state.position && !isMobile) {
        setPosition(state.position);
      }
    }

    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [isMobile]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    
    const playPromise = isPlaying ? audio.play().catch(e => {
      console.log("Play error:", e);
      setIsPlaying(false);
    }) : audio.pause();

    localStorage.setItem(
      "musicPlayerState",
      JSON.stringify({ isPlaying, volume, trackIndex, position })
    );
  }, [isPlaying, volume, trackIndex, position]);

  const togglePlay = () => setIsPlaying(p => !p);
  const nextTrack = () => setTrackIndex(prev => (prev + 1) % tracks.length);
  const prevTrack = () => setTrackIndex(prev => (prev - 1 + tracks.length) % tracks.length);
  
  const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));
  const handleClose = () => setIsVisible(false);
  const handleDrag = (_, data) => !isMobile && setPosition({ x: data.x, y: data.y });

  const toggleControls = () => {
    setShowControls(prev => !prev);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  };

  if (!isVisible) return null;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, pointerEvents: "none" }}>
      <Draggable
        nodeRef={playerRef}
        position={position}
        onStop={handleDrag}
        bounds="parent"
        handle=".music-header"
        disabled={isMobile}
      >
        <div 
          className="music-player" 
          ref={playerRef}
          style={{ pointerEvents: "auto" }}
        >
          <audio ref={audioRef} src={tracks[trackIndex].src} loop />
          
          <div className="music-header" onClick={toggleControls}>
            <div className="track-info" title={tracks[trackIndex].title}>
              {isPlaying ? "♫ " : "❚❚ "}{tracks[trackIndex].title}
            </div>
            <button className="btn-close" onClick={handleClose}>✖</button>
          </div>

          {showControls && (
            <div className="music-controls">
              <button onClick={prevTrack} title="Anterior">⏮</button>
              <button onClick={togglePlay} title={isPlaying ? "Pausar" : "Reproducir"}>
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button onClick={nextTrack} title="Siguiente">⏭</button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                title="Volumen"
              />
            </div>
          )}
        </div>
      </Draggable>
    </div>
  );
};

export default MusicPlayer;