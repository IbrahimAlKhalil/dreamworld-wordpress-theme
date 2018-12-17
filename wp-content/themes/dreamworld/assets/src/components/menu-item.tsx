import {Menu} from "../types";
import * as React from "react";
import {NavLink} from "react-router-dom";

export class MenuItem extends React.Component<Props> {
    private count = 0;

    render() {
        const Menu = (props: { menu: Menu }) => {
            let menu = props.menu;
            let clasName = this.count > 0 ? 'second-level' : '';
            if (menu.children) {
                this.count++;
                let subMenu = (
                    <div className={`sub-menu ${clasName}`}>
                        <div>
                            <ul>
                                {
                                    menu.children.map((subMenu, index) => {
                                        return <Menu key={index.toString()} menu={subMenu}/>;
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                );


                return (
                    <li className="has-child">
                        <span>{menu.title}</span>
                        {subMenu}
                    </li>
                );
            }

            return (
                <li>
                    <NavLink exact to={menu.link}>{menu.title}</NavLink>
                </li>
            );
        };

        return <Menu menu={this.props.item}/>
    }
}

interface Props {
    item: Menu
}