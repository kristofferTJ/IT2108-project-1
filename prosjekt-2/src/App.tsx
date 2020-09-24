import React, { useContext, useState } from 'react';
import './App.css';
import Sidebar from './components/Menu/Menu';
import { GlobalStateContext } from './context/GlobalStateContext';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import { tabsContext } from './components/Tabs/TabContext';
import Header from './components/Header/Header';
import Main from './Main';



function App() {
  const { imgProvider, soundProvider, poemProvider } = useContext(
    GlobalStateContext
  )!;
  const [activeTab, setActiveTab] = useState(1);


  const favoritt = () => {
    localStorage.setItem('favorittTab', activeTab.toString());
    localStorage.setItem('FavorittMenu', imgProvider.activeImg.toString());
    localStorage.setItem("favorittSound", soundProvider.activeSound.toString());
    localStorage.setItem("favorittPoem", poemProvider.activePoem.toString());
  };

  const getFavoritt = () => {
    setActiveTab(Number(localStorage.getItem('favorittTab')));
    imgProvider.setActiveImg(Number(localStorage.getItem('FavorittMenu')));
    soundProvider.setActiveSound(Number(localStorage.getItem("favorittSound")));
    poemProvider.setActivePoem(Number(localStorage.getItem("favorittPoem")));
  };

  const getLastPicture = () => {
    setActiveTab(Number(sessionStorage.getItem("lastPictureTab")));
    imgProvider.setActiveImg(Number(sessionStorage.getItem("lastPictureMenu")));
  }

  return (
    <div className="App">
      <div className="Header"><Header></Header></div> 
      <div className="Container">
        <tabsContext.Provider value={{ activeTab, setActiveTab }}>
          <Tabs></Tabs>
        <div className="Main_and_sidebar">
        {/* <div className="space"></div> */}
          <div className="Main"> 
            <Main></Main>
          </div>
          {/* <div className="Sidebar">
          </div>
          <div className="space"></div> */}
        </div>
        </tabsContext.Provider>
        <div className="buttonContainer2">
          <div className="fav1">
            <button className="favorite" onClick={favoritt}>Lagre som favorittbilde</button>
            <button className="favorite" onClick={getFavoritt}>Få favorittbilde</button>
          </div>
          <div className="fav2">
            <button className="favorite" onClick={getLastPicture}>Forrige bilde</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
