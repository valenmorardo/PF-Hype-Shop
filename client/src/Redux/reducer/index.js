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
         };


      case SEARCH_SNEAKER:
         return {
            ...state,
            allSneakers: action.payload,
         };

      case GET_DETAIL:
         return {
            ...state,
            detail: action.payload
         };

      case FILTRO_MARCA:
         console.log(action.payload);

         return {
            ...state,
            allSneakers: state.allSneakers,
         };

      case FILTRO_GENERO:
         console.log(action.payload)
         return {
            ...state,
            detail: action.payload
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
