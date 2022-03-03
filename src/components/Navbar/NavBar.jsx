import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [hambergerClicked, isHambergerClicked] = useState(false);

  const onhambergerClick = () => {
    isHambergerClicked(!hambergerClicked);
  };

  return (
    <nav className="NavbarItems">
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
          <li>
            <a className="navbar-links" href="#Home">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-links" href="#About">
              About
            </a>
          </li>
          <li>
            <a className="navbar-links" href="#Service">
              Service
            </a>
          </li>
          <li>
            <a className="navbar-links" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
