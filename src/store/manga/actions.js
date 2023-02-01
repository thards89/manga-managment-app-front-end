import axios from "axios";
import { API_URL } from "../../config/constants";

export function startLoading() {
  return {
    type: "manga/loading",
  };
}

export function allMangasFetched(data) {
  return {
    type: "manga/getAllMangas",
    payload: data,
  };
}

export default async function fetchMangas(dispatch, getState) {
  dispatch(startLoading());
  const response = await axios.get(`${API_URL}/manga`);
  console.log("thunk manga", response.data);

  dispatch(allMangasFetched(response.data));
}
