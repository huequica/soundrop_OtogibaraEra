import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

export function Button(props){
  const [Play, setPlay] = React.useState(false);

  const togglePlay = React.useCallback(
    () => setPlay((prev) => !prev)
  , [setPlay]);

  Button.propTypes = {
    button_label: PropTypes.string.isRequired
  };

  return(
    <div className='column'>
      <ReactPlayer url={ props.audio_src } playing={Play} />
      <button className='button is-rounded' onClick={togglePlay}>{props.button_label}</button>
    </div>
  );
}
