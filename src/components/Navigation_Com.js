import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { useContext } from "react";

// Styles
import styles from "../styles/navigation-styles/navigation_styles.css";

// Assets
import Logo from "../assets/jintropin-original-logo.svg";
import Pills from "../assets/jintropin-mobile-logo.svg";

// Links
import { Link, animateScroll as scroll } from "react-scroll";

// Icons
import { FaBars, FaCaretDown, FaCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

// Hooks
import { useState } from "react";
import Nav_Links from "./Nav_Links";

import { slide as Menu } from "react-burger-menu";
import Hamburger_Menu from "./Hamburger_Menu";

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [open, setOpen] = useState(false);

  const hamburgerMenu = (
    <FaBars className="bars" onClick={() => setOpen(!open)}></FaBars>
  );

  const closeMenu = (
    <RxCross2 className="cross-icon" onClick={() => setOpen(!open)}></RxCross2>
  );

  return (
    <div className="nav-container" id="nav-container">
      <nav className="nav">
        <img className="logo" src={Logo} alt="logo"></img>
        <Hamburger_Menu outerContainerId={"nav-container"}></Hamburger_Menu>
      </nav>
      <nav className="nav-mob">
        <img className="mobile-logo" src={Pills}></img>
        <div className="for-burger-menu">
          {open ? closeMenu : hamburgerMenu}
          {open && <Nav_Links></Nav_Links>}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
