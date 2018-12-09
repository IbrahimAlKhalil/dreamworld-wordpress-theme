import './index.scss';
import arrayFrom from './modules/array-converter';
import {render} from "react-dom";
import {Slider} from "./react-components/slider";

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



});