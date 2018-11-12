import { combineReducers } from "redux";
import authorReducer from "./authorReducer";
import postReducer from "./postReducer";
import commonReducer from "./commonReducer";

const allReducer = combineReducers({
  authorReducer,
  postReducer,
  commonReducer
});

export default allReducer;
