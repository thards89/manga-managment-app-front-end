/* eslint-disable import/no-anonymous-default-export */
import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "user/loading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "user/mangaByIdFetched": {
      console.log("reducerUsersManga", action.payload);
      return {
        ...state,
        mangaById: action.payload,
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

    default:
      return state;
  }
};
