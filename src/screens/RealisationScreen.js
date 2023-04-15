import React from "react";

import styles from "../styles/realisation-styles/realisation_styles.css";



import health_img from "../assets/health-yellow.png";
import laptop_img from "../assets/laptop-card.png";
import delivery_img from "../assets/delivery.png";

import { useTranslation, Trans } from "react-i18next";

const RealisationScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="realisation-screen" id="realisation-screen">
      <div className="realisation-container">
        <div className="realisation-heading-container">
          <h3 className="realisation-heading">
            {t("realisation-conditions.key")}
          </h3>
          <span className="separator"></span>
        </div>
        <div className="realisation-content">
          <div className="realisation-row-1">
            <img className="realisation-img-1" src={health_img}></img>
            <div className="realisation-text-1">
              <h6 className="realisation-heading-1">
                {t("realisation-one.key")}
              </h6>
              <p className="realisation-paragraph-1">
                {t("realisation-one-text.key")}
              </p>
            </div>
          </div>
          <div className="realisation-row-2">
            <img className="realisation-img-2-mob" src={laptop_img}></img>
            {/* <div className="realisation-text-2">
              <h6 className="realisation-heading-2">
                {t("realisation-two.key")}
              </h6>
              <p className="realisation-paragraph-2">
                {t("realisation-two-text.key")}
              </p>
            </div> */}
            <img className="realisation-img-2" src={laptop_img}></img>
            <div className="realisation-text-2">
              <h6 className="realisation-heading-2">
                {t("realisation-two.key")}
              </h6>
              <p className="realisation-paragraph-2">
                {t("realisation-two-text.key")}
              </p>
            </div>
          </div>
          <div className="realisation-row-3">
            <img className="realisation-img-3" src={delivery_img}></img>
            <div className="realisation-text-3">
              <h6 className="realisation-heading-3">
                {t("realisation-three.key")}
              </h6>
              <p className="realisation-paragraph-3">
                {t("realisation-three-text.key")}
                <br />
                <br />
                {t("almaty.key")}
                <br />
                <br />
                {t("kazakhstan.key")}
                <br />
                <br />
                {t("russia.key")}
                <br />
                <br />
                {t("world.key")}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealisationScreen;
