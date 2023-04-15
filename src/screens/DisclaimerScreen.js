import React from "react";

import disclaimer from "../assets/disclaimer_icon.svg";

import styles from "../styles/disclaimer-styles/disclaimer_styles.css";

import { useTranslation, Trans } from "react-i18next";

const DisclaimerScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="disclaimer-screen" id="disclaimer-screen">
      <div className="disclaimer-container">
        <div className="disclaimer-heading-container">
          <h3 className="disclaimer-heading">Дисклеймер</h3>
          <span className="separator"></span>
        </div>
        <div className="disclaimer-content">
          <p className="disclaimer-paragraph">{t("disclaimer-text.key")}</p>
          <p className="disclaimer-bold-paragraph">
            {t("disclaimer-text-bold.key")}
          </p>
          <img className="disclaimer-icon" src={disclaimer}></img>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerScreen;
