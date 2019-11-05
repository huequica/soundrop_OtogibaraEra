import React from 'react';

export function Document() {

  const [Active, setActive] = React.useState(false);

  const toggleActive = React.useCallback(
    () => setActive((prev) => !prev)
  , [setActive]);

  return (

    <React.Fragment >
      <button className='button is-rounded for-document' onClick={toggleActive}>
        <span className="icon">
          <img src={ process.env.PUBLIC_URL + '/information.svg' }></img>
        </span>
      </button>

      <div className={Active? 'modal is-active' : 'modal'}>
      <div className="modal-background" onClick={toggleActive}></div>

      <div className="modal-card">
        
        <header className="modal-card-head">
          <p className="modal-card-title">About this webapp</p>
          <button className="delete" aria-label="close" onClick={toggleActive}></button>
        </header>

        <section className="modal-card-body">
          <h1 className='title'>なにこれ？</h1>
          <h2 className='subtitle'>
            いつでもどこでも罵声を出せる神みたいなアプリ。
          </h2>
          <hr />

          <h1 className='title'>あそびかた</h1>
          <h2 className='subtitle'>
            ボタンを押すとギバラが叫んだり喋ったりする。
          </h2>
          <hr />

          <h1 className='title'>音声増やしたいよ</h1>
          <h2 className='subtitle'>
            + GitHubのリポジトリにPRを飛ばす<br />
            + Twitterに連絡を飛ばす(音声素材はくれ)<br />
            このどちらかでどうぞ。リンクは下記にあります
          </h2>
          <hr />

          <h1 className='title'>リンク</h1>
          <h2 className='subtitle'>
            + <a rel='noopener noreferrer' target='_blank' href='https://github.com/huequica/soundrop_OtogibaraEra'>GitHub.com/huequica/soundrop_OtogibaraEra</a><br />
            + 作者Twitter: <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/huequica'>@huequica</a><br />
          </h2>

        </section>
         
        <footer className="modal-card-foot">
        </footer>

      </div>
    </div>

    </React.Fragment >
  );
}