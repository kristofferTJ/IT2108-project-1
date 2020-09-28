import React, { Component } from 'react';
import './Header.css';
import Burgermenu from '../Burgermenu/Burgermenu';
import Burger from '../Burgermenu/Burger';

interface Props {
  isOpen: boolean;
  setOpen: (val: boolean) => void;
}

export default class Header extends Component<Props, any> {

  constructor(props: Props){
    super(props);
    this.state = {
      setOpen: this.setOpen.bind(this),
      isOpen: false
    };
  }

  setOpen() {
    this.setState({isOpen: !this.state.isOpen})

  }

  render() {
    return(
      <div>
      <header className='header'>
          <h1 className='title'>Acitvity Gallery</h1>
          <Burger isOpen={this.state.isOpen} setOpen={this.state.setOpen}></Burger>
      </header>
      <Burgermenu isOpen={this.state.isOpen}></Burgermenu> 
    </div>
    )
  }
  
}
