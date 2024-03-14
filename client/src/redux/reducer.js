import { GET_SONGS, GET_CATEGORIES } from "./action-types";

let initialState = {
  allSongs: [],
  allSongsCopy: [],
  allCategories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        allSongs: action.payload.data,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload.data,
      };
  }
};

export default reducer;
