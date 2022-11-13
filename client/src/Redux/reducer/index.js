import { GET_SNEAKERS, SEARCH_SNEAKER } from "../actions/actionTypes";
const initialState = {
   allSneakers: [],
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
         case "POST_PRODUCT":
            return{
                ...state
            }
      default:
         return initialState;
   }
};

export default rootReducer;
