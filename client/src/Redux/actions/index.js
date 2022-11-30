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
  SET_CURRENT_USER,
  // ORDER ADMIN
  GET_ORDERS,
  PATCH_ORDER,
  FILTER_DATE,
  FILTER_STATE,
  GET_USERS,
  
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
        `https://hype-shop.vercel.app/sneakers?title=${title}`
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
    const response = await axios.post(
      "https://hype-shop.vercel.app/sneakersCreate",
      payload
    );
    return response;
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`https://hype-shop.vercel.app/sneakers/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      return alert("Detail not found");
    }
  };
}

export function getBrands() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`https://hype-shop.vercel.app/filters/brand`);
      json.data.unshift("Todos");
      let marcas = json.data.filter((e) => e != null);
      return dispatch({
        type: GET_BRANDS,
        payload: marcas,
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
      let marcas = json.data.filter((e) => e != null);

      return dispatch({
        type: GET_CATEGORIES,
        payload: marcas,
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
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const detailZero = () => {
  return {
    type: DETAIL_ZERO,
    payload: [],
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const orders = await axios.get("https://hype-shop.vercel.app/orders");

      return dispatch({
        type: GET_ORDERS,
        payload: orders.data,
      });
    } catch (error) {
      console.log("error trying to GET_ORDERS", error);
    }
  };
};

// SE MANDA EL ID POR QUERY Y INFO POR BODY
export const patchOrder = (id, payload) => {
  return async () => {
    try {
      const order = await axios.patch(
        `https://hype-shop.vercel.app/orders/?id=${id}`,
        payload
      );

      return order;
    } catch (error) {
      console.log("error trying to GET_ORDERS", error);
    }
  };
};


// FILTROS ADMIN_ORDERS
export const filterState = (payload) => {
   return {
      type: FILTER_STATE,
      payload: payload,
   };
};

export const filterDate = (payload) => {
   return {
      type: FILTER_DATE,
      payload: payload,
   };
};


//Dashboard actions

export function UpdateProductPost(payload){
  return async function () {
    const response = await axios.put(
      "https://hype-shop.vercel.app/sneakersUpdate",
      payload
    );
    return response;
  }
}

export function DeleteProduct(payload) {
  return async function () {
    const response = await axios.put(
      "https://hype-shop.vercel.app/sneakersDelete",
      payload
    );
    return response;
  }
}

export const getUsers = () => {
return async (dispatch) => {
  try {
    const users = await axios.get("https://hype-shop.vercel.app/usuarios");
    /* console.log(response) */

    return dispatch({
      type: GET_USERS,
      payload: users.data,
    });
  } catch (error) {
    console.log("error trying to GET_Users", error);
  }
};
};

export function deshabilitarUser(payload) {
return async function () {
  const response = await axios.put(
    "https://hype-shop.vercel.app/deshabilitarUser",
    payload
  );
  return response;
}
}

export function habilitarUser(payload) {
return async function () {
  const response = await axios.put(
    "https://hype-shop.vercel.app/habilitarUser",
    payload
  );
  return response;
}
}

export function darAdmin(payload) {
return async function () {
  const response = await axios.put(
    "https://hype-shop.vercel.app/admin",
    payload
  );
  return response;
}
}

export function sacarAdmin(payload) {
return async function () {
  const response = await axios.put(
    "https://hype-shop.vercel.app/sacarAdmin",
    payload
  );
  return response;
}
}

// POST REview
export function CreateReview(payload) {
  return async function() {
    const response = await axios.post("https://hype-shop.vercel.app/createReview", payload)
    return response
  };
}


