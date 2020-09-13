import React, { useState } from 'react';
import './App.css';
import Tabs from "./components/Tabs/Tabs";
import { tabsContext } from './components/Tabs/TabContext';


function App() {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="App">
      <tabsContext.Provider value={{ activeTab, setActiveTab }}>
      <Tabs></Tabs>
      <div>{activeTab}</div>
      </tabsContext.Provider> 
      </div>

  );
}

export default App;
