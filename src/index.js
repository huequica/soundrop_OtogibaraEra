import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import * as Components from './components.js';

import Background1 from './video/OtogibaraEra_Background.mp4'

import GOMI from './audio/ゴミカス_○ね.mp3';
import KUSO from './audio/クソが.mp3';
import DAME from './audio/ダメやん.mp3';

import HEART_ATTACK from './audio/(心臓発作).mp3';
import DASH_SOUND from './audio/(ダッシュ音).mp3';

window.onload = () => {
  
  function App(){
    return(
      <div className='box'>
        <div className='columns'>
          <Components.Button button_label='○ね〜' audio_src={ GOMI }/>
          <Components.Button button_label='クソが！' audio_src={ KUSO }/>
          <Components.Button button_label='ダメやん！' audio_src={ DAME }/>
        </div>
        <div className='columns'>
          <Components.Button button_label='(真相発作)' audio_src={ HEART_ATTACK }/>
          <Components.Button button_label='(ダッシュ音)' audio_src={ DASH_SOUND }/>
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />,document.querySelector('div#app'));
  ReactDOM.render(<Components.Background url={Background1} />, document.querySelector('div#background'));
}