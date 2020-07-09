import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";

class CustomerContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame title="Cliente ###" body={<h1>Datos del cliente</h1>} />
      </div>
    );
  }
}

CustomerContainer.propTypes = {};

export default connect(null, null)(CustomerContainer);
