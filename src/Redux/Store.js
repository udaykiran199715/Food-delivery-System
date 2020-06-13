import {createStore} from 'redux'
import reducer from './Reducer'
// import actions from './Action'
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
    cartArr:[]

}

const store = createStore(reducer, initState)
export default store
