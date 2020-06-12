import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'


export default function Routes() {
    return (
        <div>
            <Route path='/' exact render={() => <Home />} />
        </div>
    )
}