import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import { getCustomerByDNI } from "../selectors/customers";

class CustomerContainer extends Component {
  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match }) =>
        match ? <p>Es edición</p> : <p>No es edición</p>
      }
    />
  );
  //<h1>Datos del cliente {this.props.customer.name}</h1>
  render() {
    return (
      <div>
        <AppFrame
          title={`Cliente ${this.props.dni}`}
          body={this.renderBody()}
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
