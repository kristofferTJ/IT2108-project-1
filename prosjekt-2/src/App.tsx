import React, { useState } from 'react';
import './App.css';
import Tabs from "./components/Tabs/Tabs";
import { tabsContext } from './components/Tabs/TabContext';
import Header from "./components/Header/Header";
import Main from "./Main";


function App() {

  const [activeTab, setActiveTab] = useState(1);

  const favoritt = () => {
    localStorage.setItem("favoritt", activeTab.toString());
  }

  const getFavoritt = () => {
    setActiveTab(Number(localStorage.getItem("favoritt")))
    return(favoritt);
  }

  return (
    <div className="App">
      <Header></Header>
      <tabsContext.Provider value={{ activeTab, setActiveTab }}>
      <Main></Main>
      <Tabs></Tabs>
      </tabsContext.Provider> 
      <button onClick={favoritt}>Favoritt</button>
      <button onClick={getFavoritt}>Få favoritt</button>
      </div>

  );
}


export default App;
