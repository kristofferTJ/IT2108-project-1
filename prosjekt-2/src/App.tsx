import React, { useContext, useState } from 'react';
import './App.css';
import Sidebar from './components/Menu/Menu';
import Header from './components/Header/Header';
import { GlobalStateContext } from './context/GlobalStateContext';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import { tabsContext } from './components/Tabs/TabContext';
import Birthday from './components/Installations/Birthday';

function App() {
  const { imgProvider, soundProvider, poemProvider } = useContext(
    GlobalStateContext
  )!;
  const [activeTab, setActiveTab] = useState(1);

  const favoritt = () => {
    localStorage.setItem('favoritt', activeTab.toString());
  };

  const getFavoritt = () => {
    setActiveTab(Number(localStorage.getItem('favoritt')));
    return favoritt;
  };

  const getImage = [
    ['bilde 1 her', 'Bilde 2', 'Bilde 3'],
    [1, 2, 3],
    [1, 2, 3],
  ];

  return (
    <div className="App">
      <Header></Header>
      <div>{getImage[0][activeTab - 1]}</div>

      <tabsContext.Provider value={{ activeTab, setActiveTab }}>
        <Tabs></Tabs>
        <div>{activeTab}</div>
      </tabsContext.Provider>
      <button onClick={favoritt}>Favoritt</button>
      <button onClick={getFavoritt}>Få favoritt</button>
      <Sidebar></Sidebar>
      <p>bilde: {imgProvider.activeImg}</p>
      <p>lyd: {soundProvider.activeSound}</p>
      <p>dikt: {poemProvider.activePoem}</p>
    </div>
  );
}

export default App;
