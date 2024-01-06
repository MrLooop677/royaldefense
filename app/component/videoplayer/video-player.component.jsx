const VideoPlayer = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        style={{ width: "100%", height: "100vh", objectFit: "inherit" }}
      >
        <source src="/videos/loadingvideo.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default VideoPlayer;
