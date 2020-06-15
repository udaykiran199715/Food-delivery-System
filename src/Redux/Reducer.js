import {SELECT_CITY, LOGIN, SIGNUP, ADD_TO_CART,  ADD_QUANTITY, SUB_QUANTITY} from './ActionTypes'

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

       case LOGIN : {
        console.log(payload)
           return {
               ...state,
               usersArr: state.usersArr.filter(item => {
                   if((item.username == payload.username || item.phone== payload.phone) && item.password == payload.password) {
                    //    return {...state,userName:item.username, isAuth:true }
                    return item
                   }
               }),



           isAuth: state.usersArr.filter(item => {
                if((item.username === payload.username || item.phone=== payload.phone) && item.password === payload.password) {
                    return true
                }
            })
            // .map(item => state.userName = item.username)
            // usersArr: state.usersArr.filter(item => {item.username===payload.username || item.phone === payload.phone && item.password === payload.password} ? {...state, userName:item.username, isAuth:true}:item)

           }
       }

       case SIGNUP : {
           console.log(payload)
           return {
               ...state,
               usersArr:[...state.usersArr,payload]
           }
       }

       case ADD_TO_CART : {
           return {
               ...state,
               cartArr:[...state.cartArr,payload]
           }
       }

       case ADD_QUANTITY : {
           return {
               ...state,
            //    quantity: state.quantity >= 1 && state.quantity + Number(payload)
            quantity: state.quantity + 1
           }
       }

       case SUB_QUANTITY : {
        return {
            ...state,
            // quantity: state.quantity >= 1 && state.quantity - Number(payload)
            quantity: state.quantity > 1 && state.quantit - 1
        }
    }




       default:
           return state

   }
}

export default reducer