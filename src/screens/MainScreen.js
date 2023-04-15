import React from "react";

// Components
import Navigation from "../components/Navigation_Com";
import Navigation_Com_Two from "../components/Navigation_Com_Two";

// Styles
import styles from "../styles/main-screen-styles/main_screen.css";

// Assets
import photo from "../assets/main-man.png";
import arrow from "../assets/main_arrow.svg";
import phoneMan from "../assets/main-man-phone.png";

// Icons
import { FaTelegramPlane } from "react-icons/fa";

// Fonts
import { Link } from "react-scroll";

// Translation
import { useTranslation, Trans } from "react-i18next";

const MainScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="main-screen" id="main-screen">
      <Navigation></Navigation>
      <div className="container">
        <div className="main-content">
          <h1 className="main-heading">
            {t("main-heading.key")}{" "}
            <span className="hormone">{t("hormone.key")}</span>
          </h1>
          <p className="description">{t("description.key")}</p>
          <div className="buttons">
            <a
              className="main-button"
              href="https://t.me/jintropine"
              target="_blank"
            >
              {t("main-button.key")}{" "}
            </a>
          </div>
        </div>
        <img className="proto-photo" src={photo} alt="mains_screen_photo"></img>
        <img
          className="proto-photo-phone"
          src={phoneMan}
          alt="mains_screen_photo_phone"
        ></img>
      </div>
      <img src={arrow} className="arrow-blue"></img>
    </main>
  );
};

export default MainScreen;
