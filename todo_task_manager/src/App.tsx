import { useState } from "react";
import { ActiveTabContext } from "./contexts/ActiveTabContext";
import Sidebar from "./components/Sidebar";
import TaskPanel from "./components/TaskPanel";

function App() {

  const [activeTab, setActiveTab] = useState(1);

  return(
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
      <Sidebar />
      <TaskPanel />
      </div>
    </ActiveTabContext.Provider>
  );
}

export default App;