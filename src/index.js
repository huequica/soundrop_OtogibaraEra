import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import * as Components from './components.js';

import Background1 from './video/OtogibaraEra_Background.mp4'

const PUBLIC_URL = process.env.PUBLIC_URL;

window.onload = () => {
  
  function App(){
    return(
      <div className='box'>
        <div className='columns'>
          <Components.Button button_label='○ね〜'      audio_src={ PUBLIC_URL + '/audio/ゴミカス_○ね.mp3' }/>
          <Components.Button button_label='クソが！'    audio_src={  PUBLIC_URL + '/audio/クソが.mp3'  }/>
          <Components.Button button_label='ダメやん！'  audio_src={  PUBLIC_URL + '/audio/ダメやん.mp3'  }/>
        </div>
        <div className='columns'>
          <Components.Button button_label='(心臓発作)'   audio_src={  PUBLIC_URL + '/audio/(心臓発作).mp3'  }/>
          <Components.Button button_label='(ダッシュ音)' audio_src={  PUBLIC_URL + '/audio/(ダッシュ音).mp3'  }/>
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<Components.Document />, document.querySelector('div#document'))
  ReactDOM.render(<App />,document.querySelector('div#app'));
  ReactDOM.render(<Components.Background url={Background1} />, document.querySelector('div#background'));
}