import axios from "axios";

const API_URL = "http://localhost:4000";

export function startLoading() {
  return {
    type: "manga/loading",
  };
}

export function usersMangasFetched(data) {
  console.log(data);
  return {
    type: "manga/usersMangasFetched",
    payload: data,
  };
}

export const fetchUsersMangas = (userId) => {
  return async (dispatch, getState) => {
    try {
      const usersMangas = await axios.get(
        `${API_URL}/manga/usermanga/${userId}`
      );
      dispatch(usersMangasFetched(usersMangas.data));
    } catch (e) {
      console.log(e);
    }
  };
};
