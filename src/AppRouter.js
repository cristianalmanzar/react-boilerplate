import React, {useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import { NavBar } from './components/NavBar/NavBar';
import { About } from './pages/About';
import { Login } from './pages/Login'
import { Home } from './pages/Home'

export const AppRouter = () => {



    return (
        <div>
            <Router>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/about" component={About}  />
                        <Route exact path="/login" component={Login}  />
                        <Route exact path="/" component={Home}  />
                        
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
