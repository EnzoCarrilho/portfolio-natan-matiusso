import VideoPlayer from "@/components/VideoPlayer";

function MediaContainer({ videoSrc, images, flip = false }) {
  return (
    <div className={`relative w-full h-[420px] ${flip ? "scale-x-[-1]" : ""}`}>
      {/* Vídeo grande de fundo */}
      <div className="absolute top-0 left-0 z-10 w-4/5 h-4/5 overflow-hidden">
        <VideoPlayer
          src={videoSrc}
          className={`w-full h-full object-cover ${flip ? "scale-x-[-1]" : ""}`}
        />
      </div>

      {/* Imagem pequena - canto inferior esquerdo */}
      <div className="absolute bottom-0 -left-12 z-0 w-1/2 h-1/2 overflow-hidden shadow-lg">
        <img
          src={images[0]}
          alt=""
          className={`w-full h-full object-cover ${flip ? "scale-x-[-1]" : ""}`}
        />
      </div>

      {/* Imagem pequena - canto inferior direito */}
      <div className="absolute -bottom-4 right-42 z-20 w-1/5 h-1/3 overflow-hidden shadow-lg">
        <img
          src={images[1]}
          alt=""
          className={`w-full h-full object-cover ${flip ? "scale-x-[-1]" : ""}`}
        />
      </div>
    </div>
  );
}

export default MediaContainer;