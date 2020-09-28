import React from 'react';
import Sidebar from '../Menu/Menu';

interface Props {
  isOpen: boolean;
}

function Burgermenu(props: Props) {
  return <div>{props.isOpen && <Sidebar></Sidebar>}</div>;
}

export default Burgermenu;
