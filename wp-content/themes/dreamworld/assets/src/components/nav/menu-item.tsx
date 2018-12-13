import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/themes/light.css';
import {Instance as TippyInstance} from "tippy.js";
import {Menu} from "../../types";
import * as React from "react";
import Tippy from "@tippy.js/react";
import {NavLink} from "react-router-dom";

export class MenuItem extends React.Component<Props> {

    static handleVisibility(evt: MouseEvent, instance: TippyInstance) {

    }

    render() {
        let count = 0;
        let handle = function (this: TippyInstance, evt: MouseEvent) {
            MenuItem.handleVisibility(evt, this);
        };

        const tippyConfig = {
            interactive: true,
            theme: 'light',
            arrow: true,
            onShow(instance: TippyInstance) {
                handle = handle.bind(instance);
                instance.popper.addEventListener('mouseleave', handle);
                instance.popperChildren.tooltip.classList.add('tippy-sub-menu');
            },
            onHide(instance: TippyInstance) {
                instance.popper.removeEventListener('mouseleave', handle);
                return !instance.popperChildren.content.querySelector('.tippy-active');
            }
        };

        const Menu = (props: { menu: Menu }) => {
            let menu = props.menu;
            if (menu.children) {
                count++;
                let subMenu = (
                    <ul className="sub-menu">
                        {
                            menu.children.map((subMenu, index) => {
                                return <Menu key={index.toString()} menu={subMenu}/>;
                            })
                        }
                    </ul>
                );


                return (
                    <Tippy content={subMenu} {...tippyConfig} placement={count > 1 ? 'right-start' : 'bottom'}>
                        <li className="has-child">
                            <span>{menu.title}</span>
                        </li>
                    </Tippy>
                );
            }

            return (
                <li>
                    <NavLink to={menu.link}>{menu.title}</NavLink>
                </li>
            );
        };

        return <Menu menu={this.props.item}/>
    }
}

interface Props {
    item: Menu
}