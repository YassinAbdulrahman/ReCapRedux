import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/moviesType";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi)
    console.log(res.data);

    dispatch({
      type: ALLMOVIES,
      payload: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5c195a56db556278b48f1b1eab0b2c30&query=${word}&language=ar`)
    console.log(res.data);

    dispatch({
      type: ALLMOVIES,
      payload: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getCurrentpage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5c195a56db556278b48f1b1eab0b2c30&language=ar-US&page=${page}`)
    console.log(res.data);

    dispatch({
      type: ALLMOVIES,
      payload: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
