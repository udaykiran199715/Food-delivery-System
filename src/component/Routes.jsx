import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Restaurants from './Restaurants'


export default function Routes() {
    return (
        <div>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/login' exact render={() => <Login />} />
            <Route path='/signup' exact render={() => <Signup/>} />
            <Route path='/restaurants' exact render={() => <Restaurants />} />
        </div>
    )
}