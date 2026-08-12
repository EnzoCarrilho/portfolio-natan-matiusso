import { useRef, useState } from "react";

function VideoPlayer({ src, className = "" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <video
      ref={videoRef}
      className={`cursor-pointer ${className}`}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      // remove o menu de contexto nativo (download, PIP, etc.)
      onContextMenu={(e) => e.preventDefault()}
      onClick={togglePlay}
    />
  );
}

export default VideoPlayer;