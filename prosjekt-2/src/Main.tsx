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
import Poem from './components/Poems/poem';

const Bongos = require('./Media/Bongos.wav');
const OfficeSounds = require('./Media/OfficeSounds.wav');
const SportingEventCrowd = require('./Media/SportingEventCrowd.wav');

function Main() {
  const { imgProvider, soundProvider, tabProvider, poemProvider } = useContext(
    GlobalStateContext
  )!;

  const audios = [SportingEventCrowd, OfficeSounds, Bongos];
  let audio = audios[soundProvider.activeSound - 1];

  const getImage = [
    [<Basket></Basket>, <Football></Football>, <Tennis></Tennis>],
    [<Coworking></Coworking>, <Office></Office>, <OutdoorWork></OutdoorWork>],
    [<Birthday></Birthday>, <Cheers></Cheers>, <Party></Party>],
  ];

  return (
    <div className="installations">
      <div className="imagediv">
        <div className="image">
          {getImage[imgProvider.activeImg - 1][tabProvider.activeTab - 1]}
        </div>
        </div>
      <div className="PoemAndSound">
        <div className="poem">
        <Poem
          tabNumb={tabProvider.activeTab}
          menuNumb={poemProvider.activePoem}
        ></Poem>
        </div>
        <div>
          <audio src={audio!} controls id="audiobar"></audio>
        </div>
      </div>
    </div>
  );
}

export default Main;
