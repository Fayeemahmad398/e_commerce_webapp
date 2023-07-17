import axios from "axios";
import * as action from "./actionstypes";
// console.log(action);

export const fetch_request = () => {
  return {
    type: action.FETCH_REQUEST,
  };
};
export const fetch_success = (data) => {
  return {
    type: action.FETCH_SUCCESS,
    payload: data,
  };
};
export const fetch_failure = (error) => {
  return {
    type: action.FETCH_FAILURE,
    payload: error,
  };
};

export const fetchProductsData = () => {
  return (dispatch) => {
    dispatch(fetch_request());
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        dispatch(fetch_success(response.data.products));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetch_failure(error.message));
      });
  };
};
