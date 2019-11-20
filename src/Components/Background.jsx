import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

export function Background(props) {

  Background.propTypes = {
    url: PropTypes.string.isRequired
  };

  return(
    <ReactPlayer
      className='ReactPlayer'
      url={ props.url }
      width=''
      height=''
      playing={ true }
      muted={ true }
      playsinline={ true }
      volume={ 0 }
      controls={ false }
      loop
    />
  );
}
