import { ACTION_TYPE } from "../Types/ActionTypes"

const initialState={
    products:[],
    cartData:[]
}

export const Productreducer = (state=initialState,action) => {


    switch(action.type){
        case ACTION_TYPE.ADD_TO_CART:
            // console.log(action)
            return {...state,cartData:[...state.cartData, action.payload]}
        default:
            return state
    }


}