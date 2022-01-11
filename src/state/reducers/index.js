import { combineReducers } from "redux";
import accountReducers from "./accountReducer";

const reducers = combineReducers({
  account: accountReducers,
});

export default reducers;
