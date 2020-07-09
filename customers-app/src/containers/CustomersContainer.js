import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import CustomerList from "../components/CustomerList";
import CustomersActions from "../components/CustomersActions";
import { fetchCustomers } from "../actions/fetchCustomers";

class CustomersContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  handleAddCustomer = () => {
    this.props.history.push("/customers/new");
  };

  renderBody = (customers) => {
    return (
      <>
        <CustomerList customers={customers} urlPath="customers/" />
        <CustomersActions>
          <button onClick={this.handleAddCustomer}>Nuevo Cliente</button>
        </CustomersActions>
      </>
    );
  };
  render() {
    return (
      <div>
        <AppFrame
          title="Listado de clientes"
          body={this.renderBody(this.props.customers)}
        />
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
  customers: [],
};

export default withRouter(
  connect(null, { fetchCustomers })(CustomersContainer)
);
