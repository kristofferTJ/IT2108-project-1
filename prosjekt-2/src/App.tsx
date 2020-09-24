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


  return (
    <div className="App">
      <div className="Header"><Header></Header></div> 
      <div className="Container">
        <tabsContext.Provider value={{ activeTab, setActiveTab }}>
          <div className="Tabs">
          <Tabs></Tabs>
          <button className="button" onClick={favoritt}>Save favorite</button>
          <button className="button" onClick={getFavoritt}>Get favorite</button>
          </div>
          <div>
            
          </div>
       
        <div className="Main_and_sidebar">
          <div className="Main"> 
            <Main></Main>
          </div>
          <div className="space"></div>
          <div className="Sidebar">
            <Sidebar></Sidebar>
          </div>
          <div className="space"></div>
        </div>
        </tabsContext.Provider>
      </div>
      <p>bilde: {imgProvider.activeImg}</p>
      <p>lyd: {soundProvider.activeSound}</p>
      <p>dikt: {poemProvider.activePoem}</p>
    </div>
  );
}

export default App;
