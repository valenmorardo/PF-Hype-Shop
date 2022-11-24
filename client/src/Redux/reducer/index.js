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
} from "../actions/actionTypes";
const initialState = {
  sneakersReducer: [],
  allSneakers: [],
  detail: [],
  brands: [],
  categories: [],
  genders: [],
  filtros: {},
  orden: {},
  search: [],
  currentUser: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SNEAKERS:
      return {
        ...state,
        allSneakers: action.payload /* sneakers que renderizo en el home */,
        sneakersReducer:
          action.payload /* sneakers que me traigo intactos de la db para trabajarlos aca con los filtros */,
        filtros: {},
        orden: {},
        search: [],
      };

    case SEARCH_SNEAKER:
      return {
        ...state,
        sneakersReducer: action.payload,
        allSneakers: action.payload,
        filtros: {},
        orden: {},

        search: action.payload,
      };

    case "POST_PRODUCT":
      return {
        ...state,
      };
      case "POST_PRODUCT_UPDATE":
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
        brands: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case GET_GENDERS:
      return {
        ...state,
        genders: action.payload,
      };

    case FILTER:
      return {
        ...state,
        allSneakers: action.payload.filter(state.sneakersReducer),
        filtros: action.payload.filtros,
        orden: action.payload.orden,
      };

    // DESMONTANDO COMPONENTE
    case DETAIL_ZERO:
      return {
        ...state,
        detail: action.payload,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return initialState;
  }
};

export default rootReducer;

