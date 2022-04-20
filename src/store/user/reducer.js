/* eslint-disable import/no-anonymous-default-export */
import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  HANDLE_SEARCH_ICONS,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  searchKeyword: "",
  mangaDbs: [],
  userMangaToUpdate: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "user/loading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "user/updatedUserManga": {
      console.log("reducerUpdatedUserManga", action.payload);
      return {
        ...state,
        userMangaToUpdate: action.payload,
        mangaDbs: action.payload.userMangas,
      };
    }
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case "user/postUserManga":
      return { ...state, mangaDbs: action.payload };

    default:
      return state;
  }
};
