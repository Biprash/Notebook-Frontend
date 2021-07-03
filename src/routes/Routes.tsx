import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Explore from '../Pages/Explore'
import Login from '../Pages/Login'
import NoteDetail from '../Pages/NoteDetail'

function Routes(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Explore />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/note">
                    <NoteDetail />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
