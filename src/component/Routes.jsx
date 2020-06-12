import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'


export default function Routes() {
    return (
        <div>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/login' exact render={() => <Login />} />
        </div>
    )
}