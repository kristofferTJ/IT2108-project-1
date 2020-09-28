import React, { useContext, useState } from 'react';
import './App.css';
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
 
  const [changeTheme, setchangeTheme] = useState(false);

  const favoritt = () => {
    localStorage.setItem('favorittTab', tabProvider.activeTab.toString());
    localStorage.setItem('FavorittMenu', imgProvider.activeImg.toString());
    localStorage.setItem('favorittSound', soundProvider.activeSound.toString());
    localStorage.setItem('favorittPoem', poemProvider.activePoem.toString());
  };

  const getFavoritt = () => { 
    if(localStorage.getItem("favorittTab")===null){
      return(
        alert("Du har ikke laget en favoritt enda")
      )
    }
    tabProvider.setActiveTab(Number(localStorage.getItem('favorittTab')));
    imgProvider.setActiveImg(Number(localStorage.getItem('FavorittMenu')));
    soundProvider.setActiveSound(Number(localStorage.getItem('favorittSound')));
    poemProvider.setActivePoem(Number(localStorage.getItem('favorittPoem')));
  };

  const setFavoriteSound = () => {
    sessionStorage.setItem("favoriteSound", soundProvider.activeSound.toString());
  }

  const getFavoriteSound = () => {
      if(sessionStorage.getItem("favoriteSound")===null){
       return(
          alert("Du har ikke laget en favoritt enda")
      )
    }
    soundProvider.setActiveSound(Number(sessionStorage.getItem("favoriteSound")))
  }

  return (
    <div className={`App ${changeTheme ? 'darkBody' : ''}`}>
      <Header isOpen={props.isOpen} setOpen={props.setOpen}>
      </Header>
      <div className="Container">
        <Tabs></Tabs> 
        <div className="space"></div>
        <div className="Main">
          <Main></Main>
        </div>
      </div>
      <div className="space"></div>
      <div className="buttonContainer2">
        <div className="fav1">
          <button className="button2" onClick={favoritt}>
            Save favorite installation
          </button>
          <button className="button2" onClick={getFavoritt}>
            Get favorite installation
          </button>
        </div>
        <div className="fav2">
          <button className="button2" onClick={() => setchangeTheme(!changeTheme)}> 
          Change theme
          </button>
        </div>
        <div className="buttonContainer2">
        <div className="fav1">
          <button className="button2" onClick={setFavoriteSound}>Save favorite sound</button>
          <button className="button2" onClick={getFavoriteSound}>Get favorite sound</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
