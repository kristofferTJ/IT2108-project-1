import React, { useContext } from "react";
import { tabsContext } from "./components/Tabs/TabContext";
import './Main.css';
import { GlobalStateContext } from "./context/GlobalStateContext";
import Basket from "./components/Installations/Basket";
import Football from "./components/Installations/Football";
import Tennis from "./components/Installations/Tennis";
import Coworking from "./components/Installations/Coworking";
import Office from "./components/Installations/Office";
import OutdoorWork from "./components/Installations/OutdoorWork";
import Birthday from "./components/Installations/Birthday";
import Cheers from "./components/Installations/Cheers";
import Party from "./components/Installations/Party";

const Bongos = require("./Media/Bongos.wav");
const OfficeSounds = require("./Media/OfficeSounds.wav");
const SportingEventCrowd = require("./Media/SportingEventCrowd.wav");


function Main() {
    const tab = useContext(tabsContext);
    const menu = useContext(GlobalStateContext);
    
    const getImage = [[<Basket></Basket>,<Football></Football>,<Tennis></Tennis>], 
                    [<Coworking></Coworking>,<Office></Office>,<OutdoorWork></OutdoorWork>], 
                    [<Birthday></Birthday>,<Cheers></Cheers>,<Party></Party>]]


    const audios = [SportingEventCrowd, OfficeSounds,Bongos];
    let audio = audios[menu!.soundProvider.activeSound-1];


    return (
        <div className="installations">  
            <div className="imagediv">
                <div className="image">{getImage[menu!.imgProvider.activeImg-1][tab!.activeTab - 1]}</div>
            </div>     
            <div className="PoemAndSound">
                <div className="poem">
                </div>
                <div>
                    <audio src={(audio!)} controls></audio>
                </div>
            </div>
        </div>
    );
}

export default Main;
