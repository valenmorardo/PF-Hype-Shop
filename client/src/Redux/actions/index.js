import axios from "axios";
import filter from "../../utils/filter";
import orden from "../../utils/orden";

import {
  GET_SNEAKERS,
  SEARCH_SNEAKER,
  GET_DETAIL,
  GET_BRANDS,
  GET_CATEGORIES,
  GET_GENDERS,
  FILTER,
  DETAIL_ZERO,
} from "./actionTypes";

export const getSneakers = () => {

   return async (dispatch) => {
      try {
         const sneakers = await axios.get("https://hype-shop.vercel.app/sneakers");
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

export const getSearchTitle = (title) => {
   return async function (dispatch) {
      try {
         const response = await axios.get(
            `https://hype-shop.vercel.app/?title=${title}`
         );
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
      const response = await axios.post("https://hype-shop.vercel.app/sneakersCreate", payload);
      return response;
   };
}


export function getDetail(id) {

   return async function (dispatch) {
      try {
         let json = await axios.get(`https://hype-shop.vercel.app/sneakers/${id}`)
         return dispatch({
            type: GET_DETAIL,
            payload: json.data
         })
      } catch (error) {
         return alert("Detail not found")
      }
   }

}

export function getBrands() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`https://hype-shop.vercel.app/filters/brand`);
      json.data.unshift("Todos");
      return dispatch({
        type: GET_BRANDS,
        payload: json.data,
      });
    } catch (error) {
      return alert("Brands not found");
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`https://hype-shop.vercel.app/filters/category`);
      json.data.unshift("Todos");
      return dispatch({
        type: GET_CATEGORIES,
        payload: json.data,
      });
    } catch (error) {
      return alert("Brands not found");
    }
  };
}

export function getGenders() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`https://hype-shop.vercel.app/filters/gender`);
      json.data.unshift("Todos");
      return dispatch({
        type: GET_GENDERS,
        payload: json.data,
      });
    } catch (error) {
      return alert("Brands not found");
    }
  };
}

export const filterSneakers = (payload) => {
  const functionFilter = (products) => {
    const filteredProducts = filter(payload.filtros, products);
    return orden(payload.orden, filteredProducts);
  };
  return {
    type: FILTER,
    payload: {
      filter: functionFilter,
      filtros: payload.filtros,
      orden: payload.orden,
    },
  };
};

// DESMONTANDO COMPONENTE DETAIL

export const detailZero = () => {
  return {
    type: DETAIL_ZERO,
    payload: [],
  };
};
