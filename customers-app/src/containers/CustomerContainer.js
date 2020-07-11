import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import { getCustomerByDNI } from "../selectors/customers";

class CustomerContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame
          title={`Cliente ${this.props.dni}`}
          body={<h1>Datos del cliente {this.props.customer.name}</h1>}
        />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDNI(state, props),
});

export default connect(mapStateToProps, null)(CustomerContainer);
