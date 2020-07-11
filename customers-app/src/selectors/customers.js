import { createSelector } from "reselect";

export const getCustomersSelector = (state) => state.customers;

export const getCustomerByDNI = createSelector(
  (state, props) => state.customers.find((c) => c.dni === props.dni),
  (customer) => customer
);
