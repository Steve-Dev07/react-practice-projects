import { useState } from "react";
import { ActiveTabContext } from "./contexts/ActiveTabContext";
import Sidebar from "./components/Sidebar";

function App() {

  const [activeTab, setActiveTab] = useState(1);

  return(
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      <Sidebar />
    </ActiveTabContext.Provider>
  );
}

export default App;