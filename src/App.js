import React from "react";
import {render} from "react-dom";
import {Router,useRouterHistory ,Route , IndexRoute} from "react-router";
import App from "./components/App";
import About from "./components/About";
import Join from "./components/Join";
import Home from "./components/Home";

import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import './styles/main.scss';
import './styles/libs/pure-grids.min.css';

render((
    <Router history={appHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/joinus" component={Join}/>
            <Route path="/aboutus" component={About}/>
        </Route>
    </Router>
), document.getElementById('root'));

