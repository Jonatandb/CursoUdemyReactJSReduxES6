import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import CustomerList from "../components/CustomerList";
import CustomersActions from "../components/CustomersActions";
import { fetchCustomers } from "../actions/fetchCustomers";

const customers = [
  { dni: "11111111", name: "Cliente 1", age: 1 },
  { dni: "22222222", name: "Cliente 2", age: 2 },
  { dni: "33333333", name: "Cliente 3", age: 3 },
];

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
          body={this.renderBody(customers)}
        />
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
};

export default withRouter(
  connect(null, { fetchCustomers })(CustomersContainer)
);
