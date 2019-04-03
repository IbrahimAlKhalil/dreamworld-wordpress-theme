import * as React from "react";
import {ImageSlider} from "./image-slider";
import {Sisters} from "./sisters";
import {Welcome} from "./welcome";
import {useEffect, useState} from "react";

const abortController = new AbortController;

export default function () {
    let [sisters, changeState] = useState(null);

    // load sister concerns
    useEffect(() => {
        fetch(saharaRoutes.sisters, {
            signal: abortController.signal
        }).then(response => {
            response.json().then(sisters => changeState(sisters));
        });

        return () => {
          abortController.abort();
        };
    }, []);

    return (
        <React.Fragment>
            <ImageSlider/>
            <Welcome/>
            <Sisters organizations={sisters} title="Our Sister Concerns"/>
        </React.Fragment>
    );
}


declare var saharaRoutes: {
    sisters: string
};
