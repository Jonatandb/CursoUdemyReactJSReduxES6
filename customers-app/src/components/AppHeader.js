import React from "react";
import PropTypes from "prop-types";

const AppHeader = ({ title }) => {
  return (
    <div>
      <div className="app-header">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppHeader;
