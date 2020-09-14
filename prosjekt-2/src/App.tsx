import React, { useState } from 'react';
import './App.css';
import Tabs from "./components/Tabs/Tabs";
import { tabsContext } from './components/Tabs/TabContext';
import Basket from './components/Installations/Basket';
import Header from './components/Header/Header';


function App() {

  const [activeTab, setActiveTab] = useState(1);

  const favoritt = () => {
    localStorage.setItem("favoritt", activeTab.toString());
  }

  const getFavoritt = () => {
    setActiveTab(Number(localStorage.getItem("favoritt")))
    return(favoritt);
  }

  const getImage = [["bilde 1 her","Bilde 2","Bilde 3"], [1,2,3], [1,2,3]]
  

  return (
    <div className="App">
      <div>{getImage[0][activeTab-1]}</div>
      <Header></Header>
      <Basket></Basket>
      <tabsContext.Provider value={{ activeTab, setActiveTab }}>
      <Tabs></Tabs>
      <div>{activeTab}</div>
      </tabsContext.Provider> 
      <button onClick={favoritt}>Favoritt</button>
      <button onClick={getFavoritt}>Få favoritt</button>
      </div>

  );
}


export default App;
