import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

const URL = "http://localhost:5000/customers";

const apiFetchCustomers = () => fetch(URL).then((result) => result.json());

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiFetchCustomers);
