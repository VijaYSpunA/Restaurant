import { ACTION_TYPE } from "./Types/ActionTypes";

export const addtocart=(product)=>{
    return {type:ACTION_TYPE.ADD_TO_CART,
        payload:product}

}

export const removeFromCart=(id)=>{
    return {type:ACTION_TYPE.REMOVE_TO_CART,
        payload:id}

}