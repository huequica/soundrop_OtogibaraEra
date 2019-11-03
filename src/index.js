import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import * as Components from './components.js';
import GOMI from './audio/ゴミカス_○ね.mp3'

window.onload = () => {
  
  function App(){
    return(
      <div className='box'>
        <div className='columns'>
          <Components.Button button_label='hoge' audio_src={ GOMI }/>
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />,document.querySelector('div#app'));
  ReactDOM.render(<Components.Background />, document.querySelector('div#background'));
}