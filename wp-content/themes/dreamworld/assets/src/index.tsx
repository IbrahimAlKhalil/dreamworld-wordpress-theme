import './index';
import './index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {TinySliderSettings} from "tiny-slider";

import arrayFrom from './modules/array-converter';
import {Slider} from "./react-components/slider";
import {NavMenu} from "./react-components/nav/nav-menu";
import {BrowserRouter as Router} from "react-router-dom";

document.addEventListener('DOMContentLoaded', function () {
    /************  Header ***********/

    arrayFrom(document.querySelectorAll('.menu-item-has-children')).forEach(item => {
        item.addEventListener('click', event => {
            event.stopPropagation();
            event.preventDefault();
            item.classList.toggle('active');
        });
    });

    // Render navigation
    fetch(saharaRoutes.menu).then(data => {
        data.json().then(items => {
            ReactDOM.render(
                <Router>
                    <NavMenu items={items}/>
                </Router>,
                document.getElementById('main-nav-desktop')
            )
        });
    });
    /**********************************/


    /***************** Slider ***************/

    const sliderConfig: TinySliderSettings = {
        items: 1,
        autoplay: true,
        controls: false,
        autoplayButtonOutput: false,
        touch: true,
        autoplayHoverPause: true,
        speed: 700,
        lazyload: true,
        autoplayTimeout: 5000,
    };

    fetch(saharaRoutes.slider).then(response => {
        response.json().then(data => {
            ReactDOM.render(
                <Slider tnsConfig={sliderConfig}>
                    {
                        data.map((slide, index) => (
                            <img height="460px" className="tns-lazy-img" key={index.toString()} src={slide.image}
                                 alt={slide.description}/>
                        ))
                    }
                </Slider>,
                document.getElementById('slider')
            );
        });
    });

    /***********************************************/


    /************************** Sister Organizations *****************************/

    const sisterConfig: TinySliderSettings = {
        items: 1,
        autoplay: true,
        controls: false,
        startIndex: 0,
        autoplayButtonOutput: false,
        autoplayHoverPause: true,
        speed: 700,
        autoplayTimeout: 5000,
        nav: false,
        arrowKeys: true,
        loop: false,
        responsive: {
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    };

    ReactDOM.render(
        <Slider tnsConfig={sisterConfig}>
            <div className="card">
                <a href="google.com">
                    <img src="http://dreamworld.local/wp-content/themes/dreamworld/assets/src/images/logo.png"/>
                    <p className="title">
                        Google Inc.
                    </p>
                </a>
            </div>
            <div className="card">
                <a href="google.com">
                    <img src="http://dreamworld.local/wp-content/themes/dreamworld/assets/src/images/logo.png"/>
                    <p className="title">
                        Google Inc.
                    </p>
                </a>
            </div>
            <div className="card">
                <a href="google.com">
                    <img src="http://dreamworld.local/wp-content/themes/dreamworld/assets/src/images/logo.png"/>
                    <p className="title">
                        Google Inc.
                    </p>
                </a>
            </div>
            <div className="card">
                <a href="google.com">
                    <img src="http://dreamworld.local/wp-content/themes/dreamworld/assets/src/images/logo.png"/>
                    <p className="title">
                        Google Inc.
                    </p>
                </a>
            </div>
            <div className="card">
                <a href="google.com">
                    <img src="http://dreamworld.local/wp-content/themes/dreamworld/assets/src/images/logo.png"/>
                    <p className="title">
                        Google Inc.
                    </p>
                </a>
            </div>
            <div className="card">
                <a href="google.com">
                    <img src="http://dreamworld.local/wp-content/themes/dreamworld/assets/src/images/logo.png"/>
                    <p className="title">
                        Google Inc.
                    </p>
                </a>
            </div>
            <div className="card">
                <a href="google.com">
                    <img src="http://dreamworld.local/wp-content/themes/dreamworld/assets/src/images/logo.png"/>
                    <p className="title">
                        Google Inc.
                    </p>
                </a>
            </div>
            <div className="card">
                <a href="google.com">
                    <img src="http://dreamworld.local/wp-content/themes/dreamworld/assets/src/images/logo.png"/>
                    <p className="title">
                        Google Inc.
                    </p>
                </a>
            </div>
            <div className="card">
                <a href="google.com">
                    <img src="http://dreamworld.local/wp-content/themes/dreamworld/assets/src/images/logo.png"/>
                    <p className="title">
                        Google Inc.
                    </p>
                </a>
            </div>
            <div className="card">
                <a href="google.com">
                    <img src="http://dreamworld.local/wp-content/themes/dreamworld/assets/src/images/logo.png"/>
                    <p className="title">
                        Google Inc.
                    </p>
                </a>
            </div>
        </Slider>,
        document.getElementById('sister-organizations')
    );

});

declare var saharaRoutes: {
    slider: string,
    menu: string
};