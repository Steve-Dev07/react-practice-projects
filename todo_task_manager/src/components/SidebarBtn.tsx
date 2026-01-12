import { useContext } from "react";
import { ActiveTabContext } from "../contexts/ActiveTabContext";

type SideBarBtnProps = {
  icon: string,
  label: string,
  activeTabIndex: number
};

function SidebarBtn({ icon, label, activeTabIndex }: SideBarBtnProps) {
  
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);

  return(
    <button className={`sidebar-btn ps-4 py-2 text-start${activeTab == activeTabIndex ? " sidebar-active-btn" : ""}`} 
      onClick={() => setActiveTab(activeTabIndex)}>
      <i className={`bi bi-${icon}`}></i>&emsp;{label}
    </button>
  );
}

export default SidebarBtn;