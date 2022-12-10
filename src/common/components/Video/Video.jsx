import React, { useEffect, useRef } from "react";
import video from "../../../assets/video8.mp4";
const Video = () => {
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
        maxWidth: "100%",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
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
