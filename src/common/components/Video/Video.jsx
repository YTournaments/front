import React, { useEffect, useRef } from "react";

const Video = (props) => {
  const { video } = props;
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <video
      style={{
        maxWidth: "100wh",
        maxHeight: "100vh",
        width: "100%",
        height: "100%",
        objectPosition: "center",
        aspectRatio: "16/9",
        objectFit: "cover",
        position: "absolute",
        controlsList: "nodownload",
        playsinline: "true",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
      playsInline
      loop
      muted
      alt="video presentation"
      src={video}
      ref={videoEl}
    />
  );
};

export default Video;
