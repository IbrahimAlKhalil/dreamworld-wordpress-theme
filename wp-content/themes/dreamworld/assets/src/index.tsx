import './index';
import './index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home/home";
import {Page} from "./pages/page";
import {Header} from "./pages/layout/header";
import {Sister} from "./pages/sister";
import {Footer} from "./pages/layout/footer";
import {FourZeroFour} from "./pages/404";
import {Contact} from "./pages/contact";

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <Router>
            <main>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/sister/:slug" component={Sister}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/:slug" component={Page}/>
                    <Route component={FourZeroFour}/>
                </Switch>
                <div className="spacer-top"/>
                <Footer/>
            </main>
        </Router>,
        document.getElementById('app')
    );
});