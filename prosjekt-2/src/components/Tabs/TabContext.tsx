import { createContext } from 'react';

// type tabsContextType = {
//     activeTab: number;
//     setActiveTab: (value: number) => void;
// }

interface TabInterface {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

export const tabsContext = createContext<TabInterface | undefined>(undefined);
