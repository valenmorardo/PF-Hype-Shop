import axios from "axios";

import { GET_SNEAKERS, SEARCH_SNEAKER } from "./actionTypes";

export const getSneakers = () => {
  return async (dispatch) => {
    try {
      const sneakers = await axios.get("http://localhost:3001/sneakers");
      /* console.log(response) */

      return dispatch({
        type: GET_SNEAKERS,
        payload: sneakers.data,
      });
    } catch (error) {
      console.log("error trying to GET_SNEAKERS", error);
    }
  };
};

export const getSearchSneaker = (sneaker) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`RutaBack=${sneaker}`);
      return dispatch({
        type: SEARCH_SNEAKER,
        payload: response.data,
      });
    } catch (error) {
      console.log("error trying to SEARCH_SNEAKER");
    }
  };
};

/* CREAR PRODUCTO */

export function CreateNewProduct(payload) {
  return async function () {
    const response = await axios.post("RutaBack", payload);
    return response;
  };
}
