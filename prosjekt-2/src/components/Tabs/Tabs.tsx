import React, { useContext } from 'react';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import './Tabs.css';

function Tabs() {
  const { tabProvider } = useContext(GlobalStateContext)!;

  return (
    <div className="buttonContainer">
      <button className={`button ${tabProvider.activeTab === 1 ? 'activeButton' : ''}`} onClick={() => tabProvider.setActiveTab(1)}>
        1
      </button>
      <button className={`button ${tabProvider.activeTab === 2 ? 'activeButton' : ''}`} onClick={() => tabProvider.setActiveTab(2)}>
        2
      </button>
      <button className={`button ${tabProvider.activeTab === 3 ? 'activeButton' : ''}`} onClick={() => tabProvider.setActiveTab(3)}>
        3
      </button>
    </div>
  );
}

export default Tabs;
