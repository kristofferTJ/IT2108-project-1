import React, { useContext } from "react";
import { tabsContext } from "./components/Tabs/TabContext";
import './Main.css';

function Main() {
    const tab = useContext(tabsContext);
    
    const getImage = [["Bilde 1","Bilde 2","Bilde 3"], [1,2,3], [1,2,3]]
    const getSound = [["","",""], ["1","",""], ["","",""]]
    const getPoem = [[1,2,3], [1,2,3], [1,2,3]]

    return (
        <div className="installations">
            <div className="flex">
            <div>Dette er dikt {getPoem[0][tab!.activeTab - 1]}</div>
            <div>Dette er lyd {getSound[0][tab!.activeTab - 1]}

            </div>
            </div>
            <div>{getImage[0][tab!.activeTab - 1]}</div>
        </div>

    );
}

export default Main;