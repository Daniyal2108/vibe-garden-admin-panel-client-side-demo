import React, { useEffect, useRef, useState } from "react";
import videoIcon from "../assets/icons/video-icon.svg";

const NotificationVideo = ({ data }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(!playing);
    videoRef.current.play();
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [data]);

  return (
    <div className="relative w-[32%] h-[18vh]">
      <video
        controls={playing}
        className="w-full h-full object-fill rounded-md"
        ref={videoRef}
      >
        <source
          src={typeof data == "string" ? data : URL.createObjectURL(data)}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {!playing && (
        <div
          className="absolute top-0 left-0 w-full h-full"
          onClick={handlePlay}
        >
          <img
            src={videoIcon}
            className="absolute w-12 h-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      )}
    </div>
  );
};

export default NotificationVideo;
