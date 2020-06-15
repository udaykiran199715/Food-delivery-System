import {SELECT_CITY, LOGIN, SIGNUP, ADD_TO_CART,ADD_QUANTITY, SUB_QUANTITY} from './ActionTypes'

export const selectCity = payload => ({
    type: SELECT_CITY,
    payload
})

export const login = payload => ({
    type: LOGIN,
    payload
})

export const signup = payload => ({
    type: SIGNUP,
    payload
})

export const addtoCart = payload => ({
    type: ADD_TO_CART,
    payload

})

export const addQuantity = (payload) => ({
    type: ADD_QUANTITY,
    payload
})

export const subQuantity = (payload) => ({
    type:SUB_QUANTITY,
    payload
})






