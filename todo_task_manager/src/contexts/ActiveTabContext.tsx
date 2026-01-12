import { createContext } from "react";

type ActiveTabContextValue = {
  activeTab: number,
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
};

export const ActiveTabContext = createContext<ActiveTabContextValue>({
  activeTab: 1,
  setActiveTab: () => {}
});