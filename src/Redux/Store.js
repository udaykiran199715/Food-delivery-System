import {createStore} from 'redux'
import reducer from './Reducer'
// import actions from './Action'
import data from '../data.json'

const initState = {
    productArr : [...data ],
    city:'All'



}

const store = createStore(reducer, initState)
export default store
