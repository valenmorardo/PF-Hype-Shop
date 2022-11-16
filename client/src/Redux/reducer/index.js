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
            ...state
         }

      case GET_DETAIL:
         return {
            ...state,
            detail: action.payload
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


 

   /*   case FILTRO_MARCA:
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

         case FILTRO_CATEGORIAS:
         let filteredByCategories =
         action.payload === "all" ? state.allSneakers : state.filtros.filter(el => el.category === action.payload);
         return {
            ...state,
            allSneakers: [...filteredByCategories]
         };


      case FILTER_SNEAKERS:
         return {
            ...state,
            categories: action.payload
         };
 */
      default:
         return initialState;
   }



};

export default rootReducer;
