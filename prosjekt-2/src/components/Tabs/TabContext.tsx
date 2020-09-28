import { createContext } from 'react';

interface TabInterface {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

export const tabsContext = createContext<TabInterface | undefined>(undefined);
