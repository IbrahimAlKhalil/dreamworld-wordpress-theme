import "tiny-slider/dist/tiny-slider.css";

import * as React from "react";
import {TinySliderSettings, tns} from "tiny-slider/src/tiny-slider";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export class Slider extends React.Component<Props> {
    protected static count: number = 0;
    protected id: string = `slider-${Slider.count}`;

    render() {
        const attributes = {...this.props.attributes};
        this.id = attributes.hasOwnProperty('id') ? attributes.id : `slider-${Slider.count++}`;

        return (
            <div {...attributes} id={this.id}>
                {this.props.children}
            </div>
        );
    }

    componentDidMount(): void {
        const config = {
            container: `#${this.id}`
        };

        tns({...this.props.tnsConfig, ...config});
    }
}

interface Props {
    tnsConfig?: TinySliderSettings,
    attributes?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}
