import * as React from "react";
import {ImageSlider} from "./image-slider";
import {Sisters} from "./sisters";
import {Welcome} from "./welcome";

export default function () {
    return (
        <React.Fragment>
            <ImageSlider/>
            <Welcome/>
            <Sisters/>
        </React.Fragment>
    );
}