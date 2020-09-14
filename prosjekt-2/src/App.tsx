import React, { useContext } from 'react';
import './App.css';
import Sidebar from './components/Menu/Menu';
import { GlobalStateContext } from './context/GlobalStateContext';

function App() {
  const { imgProvider, soundProvider, poemProvider } = useContext(
    GlobalStateContext
  )!;

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <p>bilde: {imgProvider.activeImg}</p>
      <p>lyd: {soundProvider.activeSound}</p>
      <p>dikt: {poemProvider.activePoem}</p>
    </div>
  );
}

export default App;
