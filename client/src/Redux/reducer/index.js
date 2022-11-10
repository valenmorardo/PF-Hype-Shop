import{
    GET_SNEAKERS
}from "../actions/actionTypes"
const initialState={
    allSneakers:[],
}

const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_SNEAKERS:
            return{
                ...state,
                allSneakers:action.payload
            }
            default:
        return  initialState;
    }
}

export default rootReducer;
