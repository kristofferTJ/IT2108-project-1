import React, { useMemo, useState, createContext } from 'react';

interface GlobalStateContextProps {
  imgProvider: ImgProvider;
  soundProvider: SoundProvider;
  poemProvider: PoemProvider;
}

interface ImgProvider {
  activeImg: number;
  setActiveImg: (value: number) => void;
}

interface SoundProvider {
  activeSound: number;
  setActiveSound: (value: number) => void;
}

interface PoemProvider {
  activePoem: number;
  setActivePoem: (value: number) => void;
}

export const GlobalStateContext = createContext<
  GlobalStateContextProps | undefined
>(undefined);

export const GlobalStateProvider: React.FC = ({ children }) => {
  const [activeImg, setActiveImg] = useState(1);
  const [activeSound, setActiveSound] = useState(1);
  const [activePoem, setActivePoem] = useState(1);

  const imgProvider = useMemo(
    () => ({
      activeImg,
      setActiveImg,
    }),
    [activeImg, setActiveImg]
  );

  const soundProvider = useMemo(
    () => ({
      activeSound,
      setActiveSound,
    }),
    [activeSound, setActiveSound]
  );

  const poemProvider = useMemo(
    () => ({
      activePoem,
      setActivePoem,
    }),
    [activePoem, setActivePoem]
  );

  return (
    <GlobalStateContext.Provider
      value={{ imgProvider, soundProvider, poemProvider }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
