import axios from "axios";

import { GET_SNEAKERS, SEARCH_SNEAKER } from "./actionTypes";

export const getSneakers = () => {
   return async (dispatch) => {
      try {
         const response = await axios.get("/sneakers");
         //console.log(response)
         dispatch({
            type: GET_SNEAKERS,
            payload: response, //data
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