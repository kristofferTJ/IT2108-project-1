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
        <button className="button" onClick={() => imgProvider.setActiveImg(1)}>
          Sport
        </button>
        <button className="button" onClick={() => imgProvider.setActiveImg(2)}>
          Work
        </button>
        <button className="button" onClick={() => imgProvider.setActiveImg(3)}>
          {' '}
          Chill
        </button>
      </div>

      <div className="soundContainer">
        <h4>Sound</h4>
        <button
          className="button"
          onClick={() => soundProvider.setActiveSound(1)}
        >
          Dyr
        </button>
        <button
          className="button"
          onClick={() => soundProvider.setActiveSound(2)}
        >
          Sound 2
        </button>
        <button
          className="button"
          onClick={() => soundProvider.setActiveSound(3)}
        >
          Sound 3
        </button>
      </div>
      <div className="poemContainer">
        <h4>Poem</h4>
        <button
          className="button"
          onClick={() => poemProvider.setActivePoem(1)}
        >
          Poem 1
        </button>
        <button
          className="button"
          onClick={() => poemProvider.setActivePoem(2)}
        >
          Poem 2
        </button>
        <button
          className="button"
          onClick={() => poemProvider.setActivePoem(3)}
        >
          Poem 3
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
