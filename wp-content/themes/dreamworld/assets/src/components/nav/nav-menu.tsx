import * as React from "react";
import {MenuItem as ItemD} from "./menu-item";
import {MenuItem as ItemM} from "./menu-item-mobile";
import {Menu} from "../../types";

export class NavMenu extends React.Component<Props> {
    render() {
        const menu = this.props.items;


        const Menu = () => {

            if (!this.props.mobile) {
                return (
                    <ul>
                        {
                            menu.map((item, index) => (
                                <ItemD key={index.toString()} item={item}/>
                            ))
                        }
                    </ul>
                );
            }

            return (
                <ul>
                    {
                        menu.map((item, index) => (
                            <ItemM key={index.toString()} title={item.title} link={item.title}/>
                        ))
                    }
                </ul>
            );
        };

        return <Menu/>;
    }
}

interface Props {
    mobile?: boolean,
    items: Menu[]
}