import React from "react";
import PropTypes from "prop-types";
import AppHeader from "./AppHeader";

const AppFrame = ({ title, body }) => {
  return (
    <div>
      <div className="app-frame">
        <AppHeader title={title} />
        <div>{body}</div>
        <div>Aplicación de ejemplo</div>
      </div>
    </div>
  );
};

AppFrame.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
};

export default AppFrame;
