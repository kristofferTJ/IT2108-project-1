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
      <p>bilde: {imgProvider.activeImg}</p>
      <p>lyd: {soundProvider.activeSound}</p>
      <p>dikt: {poemProvider.activePoem}</p>
    </div>
  );
}

export default App;
