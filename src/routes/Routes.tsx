import { ReactElement, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Explore from '../Pages/Explore'
import Login from '../Pages/Login'
import NoteDetail from '../Pages/NoteDetail'
import Note from '../Pages/Note'
import Page404 from '../Pages/Page404'
import Register from '../Pages/Register'
import Navbar from '../Components/Navbar'
import Search from '../Pages/Search'
import Bookmark from '../Pages/Bookmark'
import Homepage from '../Pages/Homepage'
import Setting from '../Pages/Setting'
import RecentlyViewed from '../Pages/RecentlyViewed'
import AllPages from '../Pages/AllPages'

function Routes(): ReactElement {
    const [search, setSearch] = useState<string>('')
    return (
        <Router>
            <Navbar search={search} setSearch={setSearch} />
            {  search ? <Search setSearch={setSearch} search={search} /> :
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route  path="/explore">
                    <Explore />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route  path="/setting">
                    <Setting />
                </Route>
                <Route path="/recently viewed">
                    <RecentlyViewed />
                </Route>
                <Route path="/all-notes">
                    <AllPages />
                </Route>
                <Route path="/bookmarks">
                    <Bookmark />
                </Route>
                <Route path="/note/:noteId">
                    <NoteDetail />
                </Route>
                <Route path="/note">
                    <Note />
                </Route>
                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>
            }
        </Router>
    )
}

export default Routes
