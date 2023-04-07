import { createStore } from 'redux';
import { combineReducers } from "redux";
import navReducer from "./data/navReducer";

const reducer = combineReducers({
  nav: navReducer,
});

const store = createStore(reducer);

export default store;