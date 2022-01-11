import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

export const store = createStore(
  reducers,
  {},
  //Middleware function that allows for async functions to run
  applyMiddleware(thunk)
);
