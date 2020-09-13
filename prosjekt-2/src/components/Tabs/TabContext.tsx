import { createContext } from "react";

type tabsContextType = {
    activeTab: number;
    setActiveTab: (value: number) => void;
}

export const tabsContext = createContext<tabsContextType | undefined>(undefined);
