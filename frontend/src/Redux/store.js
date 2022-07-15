import { legacy_createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
export const Store = legacy_createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);
