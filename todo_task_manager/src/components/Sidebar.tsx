import SidebarBtn from "./SidebarBtn";
import "../css/sidebar.css";

function Sidebar() {
  return(
    <div id="sidebar-container">
      <h5 className="ps-3 mt-4"><b><i className="bi bi-list-check"></i>&ensp;Manage Tasks</b></h5>
      <div className="mt-5">
        <SidebarBtn icon="calendar-date" label="Today" activeTabIndex={1} />
        <SidebarBtn icon="calendar3" label="Upcoming" activeTabIndex={2} />
        <SidebarBtn icon="bookmark-star" label="Filter & Tags" activeTabIndex={3} />
        <SidebarBtn icon="check2-circle" label="Completed" activeTabIndex={4} />
      </div>
    </div>
  );
}

export default Sidebar;