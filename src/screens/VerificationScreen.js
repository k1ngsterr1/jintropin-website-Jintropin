import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/verification-styles/verification-styles.css";
import { useNavigate } from "react-router";

import sticker from "../assets/verification-sticker.svg";
import white from "../assets/verification-white.svg";

const VerificationScreen = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="verification-screen" id="verification-screen">
      <div className="verification-container">
        <div className="verification-heading-container">
          <h3 className="verification-heading">{t("link-verification.key")}</h3>
          <span className="separator"></span>
        </div>
        <div className="verification-content">
          <div className="verification-description">
            <h4 className="ver-description-heading">
              {t("ver-description-heading.key")}
            </h4>
            <p className="ver-paragraph-zero">{t("ver-paragraph-zero.key")}</p>
            <p className="ver-paragraph-one"> {t("ver-paragraph-one.key")} </p>
            <p className="ver-paragraph-two"> {t("ver-paragraph-two.key")} </p>
            <img className="verification-sticker-mob" src={sticker}></img>
            <a
              className="verification-button"
              href="http://ppk365.com/jinsaiyaoye/"
              target="_blank"
            >
              {t("verification-button.key")}
            </a>
          </div>
          <img className="verification-sticker" src={sticker}></img>
        </div>
      </div>
    </div>
  );
};

export default VerificationScreen;
