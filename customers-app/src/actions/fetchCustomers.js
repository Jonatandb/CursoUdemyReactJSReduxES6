import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

export const fetchCustomers = createAction(FETCH_CUSTOMERS);
