import { combineReducers } from "redux";
// eslint-disable-next-line
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
