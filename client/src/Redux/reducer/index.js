import {

   GET_SNEAKERS, SEARCH_SNEAKER, GET_DETAIL, FILTRO_GENERO, FILTRO_MARCA, SORT_BY_ALPHABET, FILTRO_PRECIOS, FILTRO_CATEGORIAS, GET_BRANDS, GET_CATEGORIES, GET_GENDERS, FILTER, ORDEN
} from "../actions/actionTypes";
const initialState = {
   sneakersReducer: [],
   allSneakers: [],
   detail: [],
   brands: [],
   categories: [],
   genders: [],
   filtros: {},
   orden: {}


};

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_SNEAKERS:
         return {
            ...state,
            allSneakers: action.payload, /* sneakers que renderizo en el home */
            /* filtros: action.payload, */
            sneakersReducer: action.payload, /* sneakers que me traigo intactos de la db para trabajarlos aca con los filtros */
            filtros: {},
            orden: {}
         }

      case SEARCH_SNEAKER:
         return {
            ...state,
            sneakersReducer: action.payload,
            allSneakers: action.payload,
            filtros: {},
            orden: {}
         };

      case "POST_PRODUCT":
         return {
            ...state,
         };

      case GET_DETAIL:
         return {
            ...state,
            detail: action.payload,
         };

      case GET_BRANDS:
         return {
            ...state,
            brands: action.payload
         };
      case GET_CATEGORIES:
         return {
            ...state,
            categories: action.payload
         };

      case GET_GENDERS:
         return {
            ...state,
            genders: action.payload
         };


      case FILTER:
         return {
            ...state,
            allSneakers: action.payload.filter(state.sneakersReducer),
            filtros: action.payload.filtros,
            orden: action.payload.orden
         }


      case ORDEN:
         return {
            ...state,
            allSneakers: action.payload(state.allSneakers)
         }


  
      default:
         return initialState;
   }
};

export default rootReducer;
