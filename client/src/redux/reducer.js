import { GET_SONGS, GET_CATEGORIES, GET_SONG_BY_ID } from "./action-types";

const initialState = {
  allSongs: [],
  allSongsCopy: [],
  songDetail: [],
  allCategories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        allSongs: action.payload,
      };

    case GET_SONG_BY_ID:
      return {
        ...state,
        songDetail: action.payload,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
