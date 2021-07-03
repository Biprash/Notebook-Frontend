import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Explore from '../Pages/Explore'
import Login from '../Pages/Login'
import NoteDetail from '../Pages/NoteDetail'
import Note from '../Pages/Note'

function Routes(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Explore />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/note/:id">
                    <NoteDetail />
                </Route>
                <Route path="/note">
                    <Note />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
