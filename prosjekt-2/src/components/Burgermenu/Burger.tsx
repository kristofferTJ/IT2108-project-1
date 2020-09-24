import React from 'react';
import './Burger.css';

interface Props{
    setOpen: (val: boolean) => void;
    isOpen: boolean;
}

export default function Burger(props: Props) {
  return (
    <div className="burgermenuContainer" onClick={() => props.setOpen(!props.isOpen)}>
        <div className="burgerBar"></div>
        <div className="burgerBar"></div>
        <div className="burgerBar"></div>
    </div> 
  );
}



