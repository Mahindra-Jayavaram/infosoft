import axios from "axios";
import * as types from "./actionTypes";

const getMoviesDataRequest = () => {
  return {
    type: types.GET_MOVIES_DATA_REQUEST,
  };
};
const getMoviesDataSuccess = (payload) => {
  return {
    type: types.GET_MOVIES_DATA_SUCCUSS,
    payload,
  };
};
const getMoviesDataFailure = () => {
  return {
    type: types.GET_MOVIES_DATA_FAILURE,
  };
};
const getMovies = () => (dispatch) => {
  dispatch(getMoviesDataRequest());
  axios
    .get("https://notioninfosoft.herokuapp.com/movies")
    .then((res) => {
      dispatch(getMoviesDataSuccess(res.data));
    })
    .catch((err) => dispatch(getMoviesDataFailure(err)));
};
export const getSortData = (res) => (dispatch) =>{
  dispatch(getMoviesDataSuccess(res))
  console.log("res",res);
}

export {
  getMoviesDataRequest,
  getMoviesDataSuccess,
  getMoviesDataFailure,
  getMovies,
};
