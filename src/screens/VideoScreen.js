import React from "react";

import styles from "../styles/video-styles/video_styles.css";

import { useTranslation, Trans } from "react-i18next";

const VideoScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="video-screen" id="video-screen">
      <div className="video-screen-container">
        <div className="video-screen-heading-container">
          <h3 className="v-screen-heading">{t("helpful-video.key")}</h3>
          <span className="separator"></span>
        </div>
        <div className="video-content">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/wp8LbVkBx1s"
          ></iframe>
          <div className="video-description">
            <h6 className="v-description-h">
              {t("helpful-video-box-heading.key")}
            </h6>
            <p className="v-description-p">{t("v-description-p.key")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoScreen;
