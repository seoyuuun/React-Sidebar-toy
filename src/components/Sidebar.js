import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import * as FaIcons from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="nav-menu-icon">
            <FaIcons.FaBars />
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
