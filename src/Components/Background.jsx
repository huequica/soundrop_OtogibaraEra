import React from 'react';
import ReactPlayer from 'react-player';

export function Background() {
  return(
    <ReactPlayer
     url='https://www.youtube.com/watch?v=YAwoRybL1t0'
     width='100vw'
     height='100vh'
     playing={true}
     volume={0}
     controls={false}
    />
  );
}
