import React from 'react';
import ICON_INFO from './information.svg';

export function Document() {

  const [Active, setActive] = React.useState(false);

  const toggleActive = React.useCallback(
    () => setActive((prev) => !prev)
  , [setActive]);

  return (

    <React.Fragment >
      <button className='button is-rounded for-document' onClick={toggleActive}>
        <span className="icon">
          <img src={ ICON_INFO }></img>
        </span>
      </button>

      <div className={Active? 'modal is-active' : 'modal'}>
      <div className="modal-background" onClick={toggleActive}></div>

      <div className="modal-card">
        
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close" onClick={toggleActive}></button>
        </header>

        <section className="modal-card-body">
          hogehoge
        </section>
         
        <footer className="modal-card-foot">
        </footer>

      </div>
    </div>

    </React.Fragment >
  );
}