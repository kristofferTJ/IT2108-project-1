import React from 'react';
import './Burger.css';

interface Props{
    setOpen: (val: boolean) => void;
    isOpen: boolean;
}

export default function Burger(props: Props) {

  const className = props.isOpen ? "burgerCross" : "burgerBar";

  return (
    <div className="burgermenuContainer" onClick={() => props.setOpen(!props.isOpen)}>
        <div className= {className + '1'}></div>
        <div className={className + '2'}></div>
        <div className={className + '3'}></div>
    </div> 
  );
}



