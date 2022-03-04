import React, { useEffect, useState } from "react";
import { initHiveLogoImage } from "../../Values/Image";
import { ButtonComponentNew } from "../Button/ButtonComponent";
import Scrollspy from "react-scrollspy";
import "./NavBar.css";

function NavBar() {
  const [hambergerClicked, isHambergerClicked] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const onhambergerClick = () => {
    isHambergerClicked(!hambergerClicked);
  };

  const onClickLogin = () => {
    window.location.href = "#";
  };

  useEffect(() => {
    console.log(window.location.pathname, "pathname");
    if (window.location.pathname === "/service/") {
      setActiveMenu("services");
    }
    if (window.location.pathname === "/") {
      setActiveMenu("#");
      if (window.location.hash === "#about") {
        setActiveMenu("about");
      } else if (window.location.hash === "#services") {
        setActiveMenu("services");
      } else if (window.location.hash === "#contact") {
        setActiveMenu("contact");
      }
    }
  }, []);

  const handleNavMenuClicked = (id) => {
    setActiveMenu(id);
  };

  return (
    <nav id="navbar" className="NavbarItems">
      <div className="navbar-container">
        <a className="navbar-logo" href="#logo">
          <img src={initHiveLogoImage} alt="logo" />
        </a>

        <div className="menu-icon" onClick={onhambergerClick}>
          <i className={hambergerClicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={hambergerClicked ? "navbar-menu active" : "navbar-menu"}
          onClick={onhambergerClick}
        >
          <li className="nav-item">
            <a
              onClick={() => handleNavMenuClicked("#")}
              className={
                activeMenu === "#" ? "navbar-links active" : "navbar-links"
              }
              href="/#"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => handleNavMenuClicked("about")}
              className={
                activeMenu === "about" ? "navbar-links active" : "navbar-links"
              }
              href="/#about"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => handleNavMenuClicked("services")}
              className={
                activeMenu === "services"
                  ? "navbar-links active"
                  : "navbar-links"
              }
              href="/#services"
            >
              Service
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => handleNavMenuClicked("contact")}
              className={
                activeMenu === "contact"
                  ? "navbar-links active"
                  : "navbar-links"
              }
              href="/#contact"
            >
              Contact
            </a>
          </li>
          <li className="navbar-button-mobile">
            <ButtonComponentNew onClick={onClickLogin} type="button">
              Login In
            </ButtonComponentNew>
          </li>
        </ul>
        <div className="navbar-button">
          <ButtonComponentNew onClick={onClickLogin} type="button">
            Login In
          </ButtonComponentNew>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
