const initialState = {
  loading: true,
};

export default function mangaSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "manga/loading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "manga/getAllMangas": {
      console.log("reducer", action);
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
