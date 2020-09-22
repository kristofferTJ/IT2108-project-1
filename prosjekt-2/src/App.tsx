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
  };

  const getFavoritt = () => {
    setActiveTab(Number(localStorage.getItem('favorittTab')));
    imgProvider.setActiveImg(Number(localStorage.getItem('FavorittMenu')));
  };

  const favorittCombination = () => {
    sessionStorage.setItem("favorittTab", activeTab.toString());
    sessionStorage.setItem("favorittSound", soundProvider.activeSound.toString());
    sessionStorage.setItem("favorittImage", imgProvider.activeImg.toString());
    sessionStorage.setItem("favorittPoem", poemProvider.activePoem.toString());
  }

  const getFavorittCombination = () => {
    setActiveTab(Number(sessionStorage.getItem("favorittTab")));
    soundProvider.setActiveSound(Number(sessionStorage.getItem("favorittSound")));
    imgProvider.setActiveImg(Number(sessionStorage.getItem("favorittImage")));
    poemProvider.setActivePoem(Number(sessionStorage.getItem("favorittPoem")));
  }

  return (
    <div className="App">
      <Header></Header>
      <tabsContext.Provider value={{ activeTab, setActiveTab }}>
        <div className="Sidebar">
        <div className="Main"><Main></Main></div>
        <Sidebar></Sidebar>
        </div>
        <Tabs></Tabs>
      </tabsContext.Provider>
      <button onClick={favoritt}>Lagre som favorittbilde</button>
      <button onClick={getFavoritt}>Få favorittbilde</button>
      <button onClick={favorittCombination}>Lagre som favoritt installasjon</button>
      <button onClick={getFavorittCombination}>Få favoritt installasjon</button>
    </div>
  );
}

export default App;
