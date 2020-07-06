import React from "react";
import PropTypes from "prop-types";
import CustomerListItem from "./CustomerListItem";

const CustomerList = ({ customers, urlPath }) => {
  return (
    <div className="customers-list">
      {customers.map((customer) => (
        <CustomerListItem
          key={customer.dni}
          dni={customer.dni}
          name={customer.name}
          editAction="Editar"
          deleteAction="Eliminar"
          urlPath={urlPath}
        />
      ))}
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomerList;
