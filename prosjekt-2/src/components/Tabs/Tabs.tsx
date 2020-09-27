import React, { useContext } from "react";
import {tabsContext} from "./TabContext";
import "./Tabs.css";
import {useTheme} from "../../theme";


function Tabs() {

    const tabContext = useContext(tabsContext);
    const {theme} = useTheme()!;

    return (
        <div className="buttonContainer">
            <button className="button" style={theme.button} onClick={() => {sessionStorage.setItem('lastPictureTab', tabContext!.activeTab.toString()); tabContext?.setActiveTab(1)}}>1</button>
            <button className="button" style={theme.button} onClick={() => {sessionStorage.setItem('lastPictureTab', tabContext!.activeTab.toString()); tabContext?.setActiveTab(2)}}>2</button>
            <button className="button" style={theme.button} onClick={() => {sessionStorage.setItem('lastPictureTab', tabContext!.activeTab.toString()); tabContext?.setActiveTab(3)}}>3</button>
        </div>
    );
 }
  


export default Tabs;