import {SELECT_CITY} from './ActionTypes'

const reducer = (state, {type, payload}) => {

   switch( type ) {

    //    case ADD_PRODUCT: {
    //         const product = {
    //        ...payload,
    //        price: '₹' + Number(payload.price),
    //        id: state.product_arr[state.product_arr.length-1].id + 1
    //    }
    //        return {
    //            ...state,
    //            product_arr:[...state.product_arr, product]
    //        }
    //    }
       case SELECT_CITY : {
            return {
                ...state,
                city: payload

            }
        
       }


       default:
           return state

   }
}

export default reducer