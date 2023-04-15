import React from "react";
import { useTranslation, Trans } from "react-i18next";

// Styles
import "../styles/footer-styles/footer_styles.css";
import logo from "../assets/jintropin-original-logo.svg";

// Icons
import { FaInstagram, FaSortUp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { Link } from "react-scroll";

const Footer_Com = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contacts-mob">
          {/* <h4 className="contacts-header-mob">КОНТАКТЫ</h4> */}
          <div className="contacts-container-mob">
            <a
              href="https://www.instagram.com/jintropine_shop/"
              target="_blank"
            >
              <FaInstagram className="instagram-mob"></FaInstagram>
            </a>
            <a href="https://t.me/Jintropine_Bot" target="_blank">
              <FaTelegramPlane className="telegram-mob"></FaTelegramPlane>
            </a>
            {/* <RxEnvelopeClosed className="envelope-mob"></RxEnvelopeClosed> */}
          </div>
        </div>
        <img className="logo-mobile" alt="logo" src={logo}></img>
        <div className="logo-content">
          <img className="logo" alt="logo" src={logo}></img>
        </div>
        <nav className="footer-navigation">
          {/* <h4 className="footer-header">{t("footer-header.key")}</h4> */}
          <div className="footer-links">
            <Link to="main-screen" smooth={true} className="main-link link">
              {t("main-link.key")}
            </Link>
            <Link to="about-jin" smooth={true} className="main-link link">
              {t("about-drug.key")}
            </Link>
            <Link
              to="indication-screen"
              smooth={true}
              className="main-link link"
            >
              {t("indications.key")}
            </Link>
            <Link to="in-stock-screen" smooth={true} className="main-link link">
              {t("available.key")}
            </Link>
            <Link
              className="verification-link link"
              to="verification-screen"
              smooth={true}
            >
              {t("verification-link.key")}
            </Link>
            <Link to="document-screen" smooth={true} className="main-link link">
              {t("document.key")}
            </Link>
          </div>
        </nav>
        <div className="footer-contacts">
          {/* <h4 className="contacts-header">{t("contacts-header.key")}</h4> */}
          <div className="contacts-container">
            <a
              href="https://www.instagram.com/jintropine_shop/"
              target="_blank"
              className="instagram-circle"
            >
              <FaInstagram className="instagram"></FaInstagram>
            </a>
            <a
              className="telegram-circle"
              href="https://t.me/Jintropine_Bot"
              target="_blank"
            >
              <FaTelegramPlane className="telegram"></FaTelegramPlane>
            </a>
            {/* <a className="envelope-circle">
              <RxEnvelopeClosed className="envelope"></RxEnvelopeClosed>
            </a> */}
          </div>
        </div>
        {/* <Link to="main-screen" smooth="true" className="upper-button">
          {t("upper-button.key")} <FaSortUp className="sort-up-icon" />
        </Link> */}
      </div>
    </footer>
  );
};

export default Footer_Com;
