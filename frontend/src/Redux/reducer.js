import React from "react";
import * as types from "./actionTypes";
const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MOVIES_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_MOVIES_DATA_SUCCUSS: {
    // console.log("payload",payload)
      return {
        ...state,
        movies: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_MOVIES_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};

