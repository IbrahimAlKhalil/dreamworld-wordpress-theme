import 'tippy.js/dist/tippy.css';
import tippy from 'tippy.js';
import * as React from "react";

export class MenuItem extends React.Component<Props> {
    render() {
        return (
            <li>
                <a href={this.props.link}>{this.props.title}</a>
            </li>
        );
    }
}

interface Props {
    title: string,
    link: string
}