import { GET_SONGS, GET_SONG_BY_ID, GET_CATEGORIES } from "./action-types";
import axios from "axios";

export const getSongs = () => {
  const endpoint = `http://localhost:3001/songs/`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({ type: GET_SONGS, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getSongById = (id) => {
  const endpoint = `http://localhost:3001/songs/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({ type: GET_SONG_BY_ID, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getCategories = () => {
  const endpoint = "http://localhost:3001/categories/";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({ type: GET_CATEGORIES, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
