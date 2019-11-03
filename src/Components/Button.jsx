import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

export function Button(props){
  const [Pray, setPray] = React.useState(false);

  
  Button.propTypes = {
    button_label: PropTypes.string.isRequired
  };

  return(
    <div className='column'>
      <ReactPlayer url={ props.audio_src } playing={true} />
      <button className='button is-rounded'>{props.button_label}</button>
    </div>
  );
}
