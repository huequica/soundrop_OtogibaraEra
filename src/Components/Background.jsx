import React from 'react';
import ReactPlayer from 'react-player';

export function Background(props) {
  return(
    <ReactPlayer
      className='ReactPlayer'
      url={ props.url }
      width=''
      height=''
      playing={true}
      muted={true}
      playsinline={true}
      volume={0}
      controls={false}
      loop
    />
  );
}
