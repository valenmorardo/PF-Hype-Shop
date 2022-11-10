import axios from "axios";


import {
  GET_SNEAKERS,
} from "./actionTypes"

export const getSneakers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/sneakers");
      //console.log(response)
      dispatch({
        type: GET_SNEAKERS,
        payload: response,//data
      });
    } catch (error) {
      console.log("error trying to GET_SNEAKERS",error);
    }
  };
};