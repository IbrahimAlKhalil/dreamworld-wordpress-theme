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
        autoplayTimeout: 5000
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
});

declare var saharaRoutes: {
    slider: string,
    menu: string
};