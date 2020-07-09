import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

const customers = [
  { dni: "11111111", name: "Cliente 1", age: 1 },
  { dni: "22222222", name: "Cliente 2", age: 2 },
  { dni: "33333333", name: "Cliente 3", age: 3 },
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS);
