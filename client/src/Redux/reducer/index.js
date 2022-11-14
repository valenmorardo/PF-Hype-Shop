import {
   GET_SNEAKERS, SEARCH_SNEAKER, GET_DETAIL, FILTRO_GENERO, FILTRO_MARCA, SORT_BY_ALPHABET, FILTRO_PRECIOS
} from "../actions/actionTypes";
const initialState = {

   allSneakers: [],
   detail: [],
   filtros: []

};

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_SNEAKERS:
         return {
            ...state,
            allSneakers: action.payload,
            filtros: action.payload,
         };


      case SEARCH_SNEAKER:
         return {
            ...state,
            allSneakers: action.payload,
         };


      case "POST_PRODUCT":
         return {
            ...state
         }

      case GET_DETAIL:
         return {
            ...state,
            detail: action.payload
         };

      case FILTRO_MARCA:
         const value = action.payload;
         let filteredByBrand =
            value === "all" ? state.allSneakers : state.filtros.filter(m => m.brand === value);
         return {
            ...state,
            allSneakers: [...filteredByBrand]

         }

      case FILTRO_GENERO:
         let filteredByGender =
         action.payload === "all" ? state.allSneakers : state.filtros.filter(el => el.gender === action.payload);
         return {
            ...state,
            allSneakers: [...filteredByGender]
         };

      case SORT_BY_ALPHABET:
         console.log(state.allSneakers)
         let alpha = action.payload === "aToz"
            ? state.allSneakers.sort((a, b) => a.title.localeCompare(b.title))
            : state.allSneakers.sort((a, b) => b.title.localeCompare(a.title))
         return {
            ...state,
            allSneakers: [...alpha],
         };

      case FILTRO_PRECIOS:
         console.log(action.payload)
         const zapa = state.allSneakers;
         const precio =
            action.payload === "mayor"
               ? zapa.sort((a, b) => {
                  if (b.price > a.price) return 1
                  if (b.price < a.price) return -1
                  return 0
               }) : action.payload === "menor"
                  ? zapa.sort((a, b) => {
                     if (b.price < a.price) return 1
                     if (b.price > a.price) return -1
                     return 0
                  })
                  : zapa;
         return {
            ...state,
            allSneakers: [...precio],
         };


      default:
         return initialState;
   }



};

export default rootReducer;
