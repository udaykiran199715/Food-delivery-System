import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Restaurants from './Restaurants'
import  RestaurantInfo from './Restaurants components/RestaurantInfo'


export default function Routes() {
    return (
        <div>
            <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/login' exact render={() => <Login />} />
            <Route path='/signup' exact render={() => <Signup/>} />
            <Route path='/restaurants' exact render={(props) => <Restaurants {...props} />} />
            <Route path='/restaurants/:name' exact render={(props) => <RestaurantInfo {...props} /> } />
            </Switch>
        </div>
    )
}