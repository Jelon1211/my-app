import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { SidebarItem } from "../../../models/Sidebar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {SidebarData.map((item: SidebarItem, index: number) => {
          return (
            <li key={index} className="sidebarListItem">
              <NavLink to={item.path}>
                <div className="navLink-wrapper">
                  <item.icon className="sidebarIcon" />
                  <span>{item.title}</span>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
