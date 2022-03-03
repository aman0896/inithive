import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [hambergerClicked, isHambergerClicked] = useState(false);

  const onhambergerClick = () => {
    isHambergerClicked(!hambergerClicked);
  };

  return (
    <nav id="navbar" className="NavbarItems">
      <div className="navbar-container">
        <a className="navbar-logo" href="#logo">
          <div>Init Hive</div>
        </a>

        <div className="menu-icon" onClick={onhambergerClick}>
          <i className={hambergerClicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={hambergerClicked ? "navbar-menu active" : "navbar-menu"}
          onClick={onhambergerClick}
        >
          <li className="nav-item">
            <a className="navbar-links active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="navbar-links" href="/#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="navbar-links" href="/#services">
              Service
            </a>
          </li>
          <li className="nav-item">
            <a className="navbar-links" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
