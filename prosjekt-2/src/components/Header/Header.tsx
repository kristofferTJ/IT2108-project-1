import React, { useState } from 'react';
import './Header.css';
import Burgermenu from '../Burgermenu/Burgermenu';
import Burger from '../Burgermenu/Burger';

export default function Header() {
  const [isOpen, setOpen] = useState(false)


  return (
    <div>
      <header className='header'>
          <h1 className='title'>Acitvity Gallery</h1>
          <Burger setOpen={setOpen} isOpen={isOpen}></Burger>
      </header>
      <Burgermenu isOpen={isOpen}></Burgermenu> 
    </div>
  );
}
