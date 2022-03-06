import React, { useEffect, useState } from "react";
import { initHiveLogoImage } from "../../Values/Image";
import { ButtonComponentNew } from "../Button/ButtonComponent";
import Scrollspy from "react-scrollspy";
import "./NavBar.css";
import { useHistory, useLocation } from "react-router-dom";

function NavBar() {
  const [hambergerClicked, isHambergerClicked] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const history = useHistory();

  const onhambergerClick = () => {
    isHambergerClicked(!hambergerClicked);
  };

  const onClickLogin = () => {
    window.location.href = "#";
  };

  const handleNavMenuClicked = (id) => {
    setActiveMenu(id);
    onhambergerClick();
    if (window.location.pathname !== "/") {
      history.push({ pathname: "/", state: id });
    }
  };

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  useEffect(() => {
    const element = document.getElementById(activeMenu);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  }, [activeMenu]);

  return (
    <nav id="navbar" className="NavbarItems">
      <div className="navbar-container">
        <a className="navbar-logo" href="/#">
          <img src={initHiveLogoImage} alt="logo" />
        </a>

        <div className="menu-icon" onClick={onhambergerClick}>
          <i className={hambergerClicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <Scrollspy
          className={hambergerClicked ? "navbar-menu active" : "navbar-menu"}
          items={["hero-area", "about", "services", "contact"]}
          currentClassName="navbar-links"
          offset={-70}
          onUpdate={(el) => {
            console.log(window.location.pathname, "path");
            if (window.location.pathname === "/") {
              setActiveMenu("");
            }
          }}
        >
          <li className="nav-item">
            <span
              onClick={() => handleNavMenuClicked("hero-area")}
              className={
                activeMenu === "hero-area"
                  ? "navbar-links active"
                  : "navbar-links"
              }
            >
              Home
            </span>
          </li>
          <li className="nav-item">
            <span
              onClick={() => handleNavMenuClicked("about")}
              className={
                activeMenu === "about" ? "navbar-links active" : "navbar-links"
              }
              href=""
            >
              About
            </span>
          </li>
          <li className="nav-item">
            <span
              onClick={() => handleNavMenuClicked("services")}
              className={
                activeMenu === "services"
                  ? "navbar-links active"
                  : "navbar-links"
              }
            >
              Service
            </span>
          </li>
          <li className="nav-item">
            <span
              onClick={() => handleNavMenuClicked("contact")}
              className={
                activeMenu === "contact"
                  ? "navbar-links active"
                  : "navbar-links"
              }
            >
              Contact
            </span>
          </li>
          <li className="navbar-button-mobile">
            <ButtonComponentNew onClick={onClickLogin} type="button">
              Login In
            </ButtonComponentNew>
          </li>
        </Scrollspy>
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
