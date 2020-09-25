import React, { useContext } from 'react';
import './Main.css';
import { GlobalStateContext } from './context/GlobalStateContext';
import Basket from './components/Installations/Basket';
import Football from './components/Installations/Football';
import Tennis from './components/Installations/Tennis';
import Coworking from './components/Installations/Coworking';
import Office from './components/Installations/Office';
import OutdoorWork from './components/Installations/OutdoorWork';
import Birthday from './components/Installations/Birthday';
import Cheers from './components/Installations/Cheers';
import Party from './components/Installations/Party';

function Main() {
  // const tab = useContext(tabsContext);
  // const menu = useContext(GlobalStateContext);

  const { imgProvider, soundProvider, tabProvider } = useContext(
    GlobalStateContext
  )!;

  const getImage = [
    [<Basket></Basket>, <Football></Football>, <Tennis></Tennis>],
    [<Coworking></Coworking>, <Office></Office>, <OutdoorWork></OutdoorWork>],
    [<Birthday></Birthday>, <Cheers></Cheers>, <Party></Party>],
  ];
  const getSound = [
    [
      require('./Media/BirdSongs.wav'),
      require('./Media/Elephant.wav'),
      require('./Media/HerdSheep.wav'),
    ],
    ['2', '2-2', '2-2-2'],
    ['hei', 'hei2', 'hei22'],
  ];
  const getPoem = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ];

  return (
    <div>
      <div>
        {getImage[imgProvider.activeImg - 1][tabProvider.activeTab - 1]}
      </div>
      <div className="flex">
        <div>Dette er dikt {getPoem[0][tabProvider.activeTab - 1]}</div>
        <div>
          Dette er lyd{' '}
          {getSound[soundProvider.activeSound - 1][tabProvider.activeTab - 1]}
        </div>
        <audio controls id="audio">
          <source
            src={
              getSound[soundProvider.activeSound - 1][tabProvider.activeTab - 1]
            }
            type="audio/wav"
          />
        </audio>
      </div>
    </div>
  );
}

export default Main;
