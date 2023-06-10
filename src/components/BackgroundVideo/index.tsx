import React from "react";

type VideoProps = {
  src: string;
}

const Video = ({ src }: VideoProps) => (
  <video
    key={src}
    autoPlay
    muted
    loop
    style={{
      position: 'fixed',
      width: '100%',
      height: '100%',
      left: '50%',
      top: '50%',
      objectFit: 'cover',
      transform: 'translate(-50%, -50%)',
      zIndex: '-1'
    }}
  >
    <source 
      src={src}
      type='video/mp4'
    />
  </video>
)

export default Video;