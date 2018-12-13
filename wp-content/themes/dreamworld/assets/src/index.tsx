import './index';
import './index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home/home";
import {Page} from "./pages/page";
import {Header} from "./pages/layout/header";
import {Sister} from "./pages/sister";
import {Footer} from "./pages/layout/footer";

document.addEventListener('DOMContentLoaded', function () {
    /************  Header ***********/

    ReactDOM.render(
        <Router>
            <main>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/sister-organizations/:slug" component={Sister}/>
                <Route exact path="/:slug" component={Page}/>
                <div className="spacer-top"/>
                <Footer/>
            </main>
        </Router>,
        document.getElementById('app')
    );
});