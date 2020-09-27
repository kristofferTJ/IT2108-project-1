import React, { useContext } from 'react';
import './App.css';
import Poem from './components/Poems/poem';
import Header from './components/Header/Header';
import { GlobalStateContext } from './context/GlobalStateContext';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import Main from './Main';

interface Props {
  isOpen: boolean;
  setOpen: (val: boolean) => void;
}

function App(props: Props) {
  const { imgProvider, soundProvider, poemProvider, tabProvider } = useContext(
    GlobalStateContext
  )!;

  const favoritt = () => {
    localStorage.setItem('favorittTab', tabProvider.activeTab.toString());
    localStorage.setItem('FavorittMenu', imgProvider.activeImg.toString());
    localStorage.setItem('favorittSound', soundProvider.activeSound.toString());
    localStorage.setItem('favorittPoem', poemProvider.activePoem.toString());
  };

  const getFavoritt = () => {
    tabProvider.setActiveTab(Number(localStorage.getItem('favorittTab')));
    imgProvider.setActiveImg(Number(localStorage.getItem('FavorittMenu')));
    soundProvider.setActiveSound(Number(localStorage.getItem('favorittSound')));
    poemProvider.setActivePoem(Number(localStorage.getItem('favorittPoem')));
  };

  const getLastPicture = () => {
    tabProvider.setActiveTab(Number(sessionStorage.getItem('lastPictureTab')));
    imgProvider.setActiveImg(Number(sessionStorage.getItem('lastPictureMenu')));
  };

  return (
    <div className="App">
      <div className="Header">
        <Header isOpen={props.isOpen} setOpen={props.setOpen}></Header>
      </div>
      <div className="Container">
        <Tabs></Tabs>
        <div className="space"></div>
        <div className="Main_and_sidebar"></div>
        <div className="Main">
          <Main></Main>
        </div>
      </div>
      /*{' '}
      <div>
        /*{' '}
        <Poem
          tabNumb={tabProvider.activeTab}
          menuNumb={poemProvider.activePoem}
        />
      </div>{' '}
      */
      <div className="space"></div>
      <div className="buttonContainer2">
        <div className="fav1">
          <button className="favorite" onClick={favoritt}>
            Lagre som favorittbilde
          </button>
          <button className="favorite" onClick={getFavoritt}>
            Få favorittbilde
          </button>
        </div>
        <div className="fav2">
          <button className="favorite" onClick={getLastPicture}>
            Forrige bilde
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
