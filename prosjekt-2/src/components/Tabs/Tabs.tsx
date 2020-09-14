import React, { useContext } from "react";
import {tabsContext} from "./TabContext";
import "./Tabs.css";


function Tabs() {

    const tabContext = useContext(tabsContext);

    return (
        <div className="buttonContainer">
            <button className="button" onClick={() => tabContext?.setActiveTab(1)}>Bilde 1</button>
            <button className="button" onClick={() => tabContext?.setActiveTab(2)}>Bilde 2</button>
            <button className="button" onClick={() => tabContext?.setActiveTab(3)}>Bilde 3</button>
        </div>
    );
 }
  


export default Tabs;