// src/reducers/index.js
import { combineReducers } from "redux";
import todos from "./todoReducer";

export default combineReducers({
  todos,
});
