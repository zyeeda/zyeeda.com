import React from "react";
import {render} from "react-dom";
import {Router, browserHistory ,Route , IndexRoute} from "react-router";
import App from "./components/App";
import About from "./components/About";
import Join from "./components/Join";
import Home from "./components/Home";

import './styles/main.scss';
import './styles/libs/pure-grids.min.css';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/joinus" component={Join}/>
            <Route path="/aboutus" component={About}/>
        </Route>
    </Router>
), document.getElementById('root'));
