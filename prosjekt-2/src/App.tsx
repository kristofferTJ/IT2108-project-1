import React, { useContext, useState } from 'react';
import './App.css';
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
  const [darkMode, setDarkmode] = useState(false);


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

  console.log(darkMode);

  return (
    <div className={`App ${darkMode ? 'darkBody' : ''}`}>
      <div className={`Header ${darkMode ? 'darkBody' : ''}`}><Header></Header></div> 
      <div className="Container">
        <tabsContext.Provider value={{ activeTab, setActiveTab }}>
        <Tabs></Tabs>
        <div className="space"></div>
        <div className="Main_and_sidebar">
          <div className="Main"> 
            <Main />
          </div>
        </div>
        </tabsContext.Provider>
        <div className="space"></div>
        <div className="buttonContainer2">
          <div className="fav1">
            <button className="favorite" onClick={favoritt}>Save favorite</button>
            <button className="favorite" onClick={getFavoritt}>Get favorite</button>
          </div>
          <div className="fav2">
            <button className="favorite" onClick={() => setDarkmode(!darkMode)}>Change theme</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
