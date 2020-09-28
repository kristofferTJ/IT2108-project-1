import React, { useContext } from 'react';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import './menu.css';

function Sidebar() {
  const { imgProvider, soundProvider, poemProvider } = useContext(
    GlobalStateContext
  )!;

  return (
    <div className="menu">
      <div className="pictureContainer">
        <h4>Picture</h4>
        <button
          className="catagories"
          onClick={() => {
            sessionStorage.setItem(
              'lastPictureMenu',
              imgProvider.activeImg.toString()
            );
            imgProvider.setActiveImg(1);
          }}
        >
          Sport
        </button>
        <button
          className="catagories"
          onClick={() => {
            sessionStorage.setItem(
              'lastPictureMenu',
              imgProvider.activeImg.toString()
            );
            imgProvider.setActiveImg(2);
          }}
        >
          Work
        </button>
        <button
          className="catagories"
          onClick={() => {
            sessionStorage.setItem(
              'lastPictureMenu',
              imgProvider.activeImg.toString()
            );
            imgProvider.setActiveImg(3);
          }}
        >
          Social
        </button>
      </div>
      <div className="soundContainer">
        <h4>Sound</h4>
        <button
          className="catagories"
          onClick={() => soundProvider.setActiveSound(1)}
        >
          Stadium
        </button>
        <button
          className="catagories"
          onClick={() => soundProvider.setActiveSound(2)}
        >
          Office
        </button>
        <button
          className="catagories"
          onClick={() => soundProvider.setActiveSound(3)}
        >
          Bongo
        </button>
      </div>
      <div className="poemContainer">
        <h4>Poem</h4>
        <button
          className="catagories"
          onClick={() => poemProvider.setActivePoem(1)}
        >
          Autum
        </button>
        <button
          className="catagories"
          onClick={() => poemProvider.setActivePoem(2)}
        >
          Winter
        </button>
        <button
          className="catagories"
          onClick={() => poemProvider.setActivePoem(3)}
        >
          Spring
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
