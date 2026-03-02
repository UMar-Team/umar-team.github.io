const VideoBackground = () => {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/ocean_hq.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default VideoBackground;
