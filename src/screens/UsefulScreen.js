import React from "react";
import Card_Imm from "../components/Card_Imm";
import Card_Muscle from "../components/Card_Muscle";
import Card_Power from "../components/Card_Power";

import muscle_icon from "../assets/muscle_up.svg";
import lightning from "../assets/lightning.svg";
import delivery_icon from "../assets/delivery-icon.svg";
import anti_pills from "../assets/anti-pills.svg";
import protection from "../assets/protection.svg";

// Styles
import "../styles/useful-styles/useful_styles.css";

import { useTranslation } from "react-i18next";

const UsefulScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="useful-fin">
      <div className="useful-container">
        <div className="useful-heading-container">
          <h2 className="useful-heading">{t("useful-heading.key")}</h2>
          <p className="best-hormone">{t("best-hormone.key")}</p>
          <p className="best-hormone-white">{t("best-hormone-white.key")}</p>
        </div>
        <section className="cards">
          <div className="card-one-li">
            <img className="muscle-up-icon" src={muscle_icon} />
            <p className="paragraph">{t("paragraph-one.key")}</p>
          </div>
          <div className="card-one-li">
            <img className="lightning-icon" src={lightning} />
            <p className="paragraph">{t("paragraph-two.key")}</p>
          </div>
          <div className="card-one-li">
            <img className="protection-icon" src={protection} />
            <p className="paragraph">{t("paragraph-three.key")}</p>
          </div>
          <div className="card-one-li">
            <img className="anti-pills-icon" src={anti_pills} />
            <p className="paragraph">{t("paragraph-four.key")}</p>
          </div>
          <div className="card-one-li">
            <img className="delivery-icon" src={delivery_icon} />
            <p className="paragraph">{t("paragraph-five.key")}</p>
          </div>
        </section>
        <div className="button-container">
        <p className="qualified-product">{t("qualified-product.key")}</p>
        <a
              className="main-button"
              href="https://wa.me/77772886600"
              target="_blank"
            >
              {t("show-drug.key")}
            </a>
        </div>
      </div>
    </div>
  );
};

export default UsefulScreen;
