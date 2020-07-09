import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";

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
  customer: state.customers.find((c) => c.dni === props.dni),
});

export default connect(mapStateToProps, null)(CustomerContainer);
