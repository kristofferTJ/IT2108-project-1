import React, { useContext, useState } from 'react';
import './App.css';
import { GlobalStateContext } from './context/GlobalStateContext';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import { tabsContext } from './components/Tabs/TabContext';
import Header from './components/Header/Header';
import Main from './Main';
import ThemeProvider, {themes, useTheme} from './theme';



function App() {
  const { imgProvider, soundProvider, poemProvider } = useContext(
    GlobalStateContext
  )!;
  const [activeTab, setActiveTab] = useState(1);


  const favoritt = () => {
    localStorage.setItem('favorittTab', activeTab.toString());
    localStorage.setItem('FavorittMenu', imgProvider.activeImg.toString());
    localStorage.setItem("favorittSound", soundProvider.activeSound.toString());
    localStorage.setItem("favorittPoem", poemProvider.activePoem.toString());
  };

  const getFavoritt = () => {
    setActiveTab(Number(localStorage.getItem('favorittTab')));
    imgProvider.setActiveImg(Number(localStorage.getItem('FavorittMenu')));
    soundProvider.setActiveSound(Number(localStorage.getItem("favorittSound")));
    poemProvider.setActivePoem(Number(localStorage.getItem("favorittPoem")));
  };

  // const getLastPicture = () => {
  //   setActiveTab(Number(sessionStorage.getItem("lastPictureTab")));
  //   imgProvider.setActiveImg(Number(sessionStorage.getItem("lastPictureMenu")));
  // }

  const {theme, setTheme} = useTheme()!;

  const toggleTheme = () => {
    switch(theme) {
      case themes.blue:
        setTheme(themes.pink);
        sessionStorage.setItem("themes", "pink");
        console.log(sessionStorage.getItem("themes"))
        console.log("pink")
        break;
      case themes.pink:
        setTheme(themes.green);
        sessionStorage.setItem("themes", "green");
        console.log(sessionStorage.getItem("themes"))
        console.log("green")
        break;
      case themes.green:
        setTheme(themes.blue);
        sessionStorage.setItem("themes", "blue");
        console.log(sessionStorage.getItem("themes"))
        console.log("blue")
        break;
    }
  }

  return (
    <ThemeProvider>
    <div className="App">
      <div className="Header"><Header></Header></div> 
      <div className="Container">
        <tabsContext.Provider value={{ activeTab, setActiveTab }}>
        <Tabs></Tabs>
        <div className="space"></div>
        <div className="Main_and_sidebar">
          <div className="Main"> 
            <Main></Main>
          </div>
        </div>
        </tabsContext.Provider>
        <div className="space"></div>
        <div className="buttonContainer2">
          <div className="fav1">
            <button className="favorite" onClick={favoritt}>Save favorite</button>
            <button className="favorite" onClick={getFavoritt}>Get favorite</button>
          </div>
          <div className="fav2">
            <button className="favorite" onClick={toggleTheme}>Change theme</button>
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>

  );
}

export default App;
