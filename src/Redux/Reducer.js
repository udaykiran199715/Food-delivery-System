import {SELECT_CITY, LOGIN, SIGNUP, ADD_TO_CART,  ADD_QUANTITY, SUB_QUANTITY} from './ActionTypes'

import data from '../data.json'

const initState = {
    productArr : [...data ],
    city:'All',
    usersArr: [{
                 username:'uday',
                 phone:123456,
                 password:123456

               }, {
                username:'kiran',
                phone:543210,
                password:543210

               }],
    isAuth: false,
    cartArr:[],
    total:0

}

const reducer = (state = initState, {type, payload}) => {

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

        let item = ''
        let sum = 0
        let name = ''
        let image = ''
        for (let i = 0; i < state.productArr.length; i++) {
            for (let j = 0; j < state.productArr[i].items.length; j++) {
                if (state.productArr[i].items[j].id == payload) {
                    item = state.productArr[i].items[j]
                    state.productArr[i].items[j].qty = 1
                    name = state.productArr[i].name
                    image = state.productArr[i].image
                   
                }

                sum += state.productArr[i].items[j].qty* state.productArr[i].items[j].itemPrice
            }
        }
        console.log(sum)

        //    let cart = [...state.cartArr]
      //  console.log(state.cartArr)
           return {
               ...state,
               cartArr:[...state.cartArr,{...item, name,image}],
               total:sum
           }
       }

       case ADD_QUANTITY : {
           let sum = 0
        //    console.log('dsafds')
        for (let i = 0; i < state.productArr.length; i++) {
            for (let j = 0; j < state.productArr[i].items.length; j++) {
                if (state.productArr[i].items[j].id == payload) {
                    state.productArr[i].items[j].qty +=1
                    var x = state.productArr[i].items[j].qty
                    
                }
                sum += state.productArr[i].items[j].qty* state.productArr[i].items[j].itemPrice
            }
        }

           return {
               ...state,
               total:sum,
               cartArr: state.cartArr.map(item => item.id == payload ? {...item , qty:x} : item)
           }
       }

       case SUB_QUANTITY : {
           let sum = 0
        for (let i = 0; i < state.productArr.length; i++) {
            for (let j = 0; j < state.productArr[i].items.length; j++) {
                if (state.productArr[i].items[j].id == payload) {
                    if(state.productArr[i].items[j].qty >= 1) {
                        state.productArr[i].items[j].qty -=1
                    }else {
                        state.productArr[i].items[j].qty = 0
                        // state.total += state.productArr[i].items[j].qty* state.productArr[i].items[j].itemPrice
                    }
                }
                sum  += state.productArr[i].items[j].qty* state.productArr[i].items[j].itemPrice


            }
        }
        return {
            ...state,
            total:sum,
            cartArr: state.cartArr.map(item => item.id == payload ? {...item , qty:item.qty - 1} : item).filter(item => item.qty >= 1 && item)
        }
    }




       default:
           return state

   }
}

export default reducer