import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import manga from "./manga/reducer";


export default combineReducers({
  appState,
  user,
  manga,
});
