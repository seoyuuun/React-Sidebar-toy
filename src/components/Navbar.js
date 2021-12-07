import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="nav-menu-icon">
          <FaIcons.FaBars />
        </Link>
        <div className="sidebar-container">
          <ul className="sidebar-items">
            <li className="sidebar-toggle">
              <Link to="/" className="nav-menu-icon">
                <FaIcons.FaWindowClose />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
