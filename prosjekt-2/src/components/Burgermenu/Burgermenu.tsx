import React from "react";
import Sidebar from "../Menu/Menu";
<<<<<<< HEAD
// import Burger from '../Burgermenu/Burger';
// import { booleanLiteral } from "@babel/types";
=======
>>>>>>> 8ddcc153087d0a413c6481becd7e087fa179a8be

interface Props{
    isOpen: boolean;
}

function Burgermenu(props: Props) {
    return(
        <div>
            { 
               props.isOpen && <Sidebar></Sidebar>
            }     
           
        </div>
    );
}

export default Burgermenu;
