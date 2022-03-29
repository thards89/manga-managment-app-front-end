import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";


const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

export const postUserManga = (data) => {
  return {
    type: "user/postUserManga",
    payload: data
}};

export const updatedUserManga = (data) => {
  return {
    type: "user/updateUserManga",
    payload: data,
  };
};

export function startLoading() {
  return {
    type: "user/loading",
  };
}

//thunks
   export const updateUserManga = (
     volumesOwned,
     reading,
     lastVolumeRead,
     collectionComplete,
     star,
     userId,
     mangaDbId
   ) => {
     return async (dispatch, getState) => {
       dispatch(appLoading());
       const token = selectToken(getState());
       try {
         const response = await axios.put(
           `${apiUrl}/manga/updateusermanga`,
           {
             volumesOwned,
             reading,
             lastVolumeRead,
             collectionComplete,
             star,
             userId,
             mangaDbId,
           },
           { headers: { Authorization: `Bearer ${token}` } }
         );

         dispatch(updatedUserManga(response.data));
         dispatch(showMessageWithTimeout("success", true, "Success"));
         dispatch(appDoneLoading());
       } catch (error) {
         if (error.response) {
           console.log(error.response.data.message);
           dispatch(setMessage("danger", true, error.response.data.message));
         } else {
           console.log(error.message);
           dispatch(setMessage("danger", true, error.message));
         }
         dispatch(appDoneLoading());
       }
     };
   };

    export const postManga = (
        userId,
        mangaId,
        title,
        author,
        publisher,
        totalVolumes,
        imgUrl,
        volumesOwned,
        reading,
        lastVolumeRead,
        collectionComplete,
        star
      ) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const token = selectToken(getState());
    try {
      const response = await axios.post(`${apiUrl}/manga/userManga`, {
        userId,
        mangaId,
        title,
        author,
        publisher,
        totalVolumes,
        imgUrl,
        volumesOwned,
        reading,
        lastVolumeRead,
        collectionComplete,
        star,
      },
        {headers: { Authorization: `Bearer ${token}` }},
      );
      console.log("postUserManga", response)
      dispatch(postUserManga(response.data));
      dispatch(showMessageWithTimeout("success", true, "Success"));
      dispatch(appDoneLoading());
 
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true,"error"));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};


export const signUp = (name, email, password, userName) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
        userName,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "Account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      console.log("logged in user", response.data);
      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};
