import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomerData from "../components/CustomerData";
import CustomerEdit from "../components/CustomerEdit";
import { getCustomerByDNI } from "../selectors/customers";

class CustomerContainer extends Component {
  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match }) => {
        const CustomerControl = match ? CustomerEdit : CustomerData;
        return <CustomerControl {...this.props.customer} />;
      }}
    />
  );
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
