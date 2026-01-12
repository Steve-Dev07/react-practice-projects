import { useState } from "react";
import { ActiveTabContext } from "./contexts/ActiveTabContext";

function App() {

  const [activeTab, setActiveTab] = useState(1);

  return(
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
    </ActiveTabContext.Provider>
  );
}

export default App;