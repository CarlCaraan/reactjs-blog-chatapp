import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// Styles and Components
import "./Sidebar.css";
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import Avatar from "./Avatar";

function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Link to="/">
          <div className="user">
            {/* Avatar and username here later */}
            <Avatar src={user.photoURL} />
            <p>Hey {user.displayName}</p>
          </div>
        </Link>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard-icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add-icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
