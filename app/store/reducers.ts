import { combineReducers } from "redux";
import userReducer from "../modules/user/userSlice";

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
