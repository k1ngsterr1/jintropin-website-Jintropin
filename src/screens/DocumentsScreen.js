import React from "react";

import styles from "../styles/document-styles/document_styles.css";

const DocumentsScreen = () => {
  return (
    <div className="document-screen" id="document-screen">
      <div className="document-container">
        <div className="document-screen-content">
          <div className="document-heading-container">
            <h3 className="document-heading">Официальные документы</h3>
            <span className="separator"></span>
          </div>
          <div className="documents">
            <img className="document-photo" src={document}></img>
            <img className="document-photo" src={document}></img>
            <img className="document-photo" src={document}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsScreen;
