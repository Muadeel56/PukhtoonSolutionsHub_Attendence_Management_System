import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="relative inset-0 h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/bgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
