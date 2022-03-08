import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import usersMangaSliceReducer from "./manga/reducer";

export default combineReducers({
  appState,
  user,
  usersMangaSliceReducer,
});
