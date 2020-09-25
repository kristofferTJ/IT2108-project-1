import React, { useContext } from 'react';
import './App.css';
import Sidebar from './components/Menu/Menu';
import Poem from './components/Poems/poem';
import Header from './components/Header/Header';
import { GlobalStateContext } from './context/GlobalStateContext';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import Main from './Main';

function App() {
  const { imgProvider, soundProvider, poemProvider, tabProvider } = useContext(
    GlobalStateContext
  )!;

  const favoritt = () => {
    localStorage.setItem('favorittTab', tabProvider.activeTab.toString());
    localStorage.setItem('FavorittMenu', imgProvider.activeImg.toString());
  };

  const getFavoritt = () => {
    tabProvider.setActiveTab(Number(localStorage.getItem('favorittTab')));
    imgProvider.setActiveImg(Number(localStorage.getItem('FavorittMenu')));
  };

  return (
    <div className="App">
      <Header></Header>

      <div className="Sidebar">
        <div className="Main">
          <Main></Main>
        </div>
        <Sidebar></Sidebar>
      </div>
      <div>
        <Tabs></Tabs>
      </div>

      <div>
        <Poem
          tabNumb={tabProvider.activeTab}
          menuNumb={poemProvider.activePoem}
        />
      </div>
      <button onClick={favoritt}>Lagre som favorittbilde</button>
      <button onClick={getFavoritt}>Få favorittbilde</button>
      <p>bilde: {imgProvider.activeImg}</p>
      <p>lyd: {soundProvider.activeSound}</p>
      <p>dikt: {poemProvider.activePoem}</p>
    </div>
  );
}

export default App;
