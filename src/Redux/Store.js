import {createStore} from 'redux'
import reducer from './Reducer'
// import actions from './Action'
import data from '../data.json'

const initState = {
    product_arr : [...data ]



}

const store = createStore(reducer, initState)
export default store
