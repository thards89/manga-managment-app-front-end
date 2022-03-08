const initialState = {
  loading: true,
  manga: [],
};

export default function usersMangaSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "manga/loading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "manga/usersMangasFetched": {
      console.log("reducerUsersManga", action);
      return {
        ...state,
        manga: [...action.payload],
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
