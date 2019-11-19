import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import * as Components from './components.js';

import Background1 from './video/OtogibaraEra_Background.mp4';
const PUBLIC_URL = process.env.PUBLIC_URL;

window.onload = () => {
  
  function App(){
    return(
      <div className='box'>
        
        <div className='columns'>
          <Components.Button button_label='○ね〜'      audio_src={ PUBLIC_URL + '/audio/ゴミカス_○ね.mp3' }/>
          <Components.Button button_label='クソが！'    audio_src={  PUBLIC_URL + '/audio/クソが.mp3'  }/>
          <Components.Button button_label='クソが！(2)'  audio_src={  PUBLIC_URL + '/audio/クソが2.mp3'  }/>
        </div>

        <div className='columns'>
          <Components.Button button_label='(心臓発作)'   audio_src={  PUBLIC_URL + '/audio/(心臓発作).mp3'  }/>
          <Components.Button button_label='(ダッシュ音)' audio_src={  PUBLIC_URL + '/audio/(ダッシュ音).mp3'  }/>
          <Components.Button button_label='なんこいつ〜' audio_src={  PUBLIC_URL + '/audio/なんこいつ〜.mp3'  }/>
        </div>

        <div className='columns'>
          <Components.Button button_label='うるせー'  audio_src={  PUBLIC_URL + '/audio/うるせー.mp3'  }/>
          <Components.Button button_label='めっちゃ決め顔'  audio_src={  PUBLIC_URL + '/audio/めっちゃ決め顔してくるやん.mp3'  }/>
          <Components.Button button_label='変態オヤジじゃん'  audio_src={  PUBLIC_URL + '/audio/変態オヤジじゃん.mp3'  }/>
        </div>

        <div className='columns'>
          <Components.Button button_label='ダメやん！'  audio_src={  PUBLIC_URL + '/audio/ダメやん.mp3'  }/>
          <Components.Button button_label='うるせえな！'  audio_src={  PUBLIC_URL + '/audio/うるせえな.mp3'  }/>
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<Components.Document />, document.querySelector('div#document'));
  ReactDOM.render(<App />,document.querySelector('div#app'));
  ReactDOM.render(<Components.Background url={Background1} />, document.querySelector('div#background'));
};