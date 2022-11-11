import { GET_SNEAKERS, SEARCH_SNEAKER, GET_DETAIL } from "../actions/actionTypes";
const initialState = {

   allSneakers: [],
   detail:[]

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
            return{
               ...state,
               detail: action.payload
            }

      default:
         return initialState;
   }

   

};

export default rootReducer;
