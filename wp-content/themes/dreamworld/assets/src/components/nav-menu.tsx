import * as React from "react";
import {MenuItem} from "./menu-item";
import {Menu} from "../types";

export class NavMenu extends React.Component<Props> {
    render() {
        const menu = this.props.items;


        return (
            <ul className="top-menu">
                {
                    menu.map((item, index) => (
                        <MenuItem key={`tmn-${index}`} item={item}/>
                    ))
                }
            </ul>
        );
    }
}

interface Props {
    mobile?: boolean,
    items: Menu[]
}