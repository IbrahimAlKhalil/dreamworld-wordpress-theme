import * as React from 'react';
import {NavMenu} from "../../components/nav-menu";

export class Footer extends React.Component {
    state = {
        menu: {
            left: null,
            right: null
        }
    };

    constructor(props) {
        super(props);

        fetch(`${saharaRoutes.menu}/Footer Right`).then(response => {
            response.json().then(data => this.setState({
                menu: {
                    right: data,
                    left: this.state.menu.left
                }
            }))
        });

        fetch(`${saharaRoutes.menu}/Footer Left`).then(response => {
            response.json().then(data => this.setState({
                menu: {
                    left: data,
                    right: this.state.menu.right
                }
            }))
        });
    }

    render() {
        const Menu = (props: { dir: 'right' | 'left' }) => {
            if (this.state.menu[props.dir]) {
                return <NavMenu items={this.state.menu[props.dir]}/>
            }

            return null;
        };

        return (
            <footer>
                <div id="big-footer">
                    <div className="content flex flex-wrap">
                        <div className="column">
                            <div className="row">
                                <img className="logo" src={saharaData.logo} alt={saharaData.description}/>
                            </div>
                            <div className="row description">
                                {saharaData.footer.description ? saharaData.footer.description : 'Lorem ipsum dolor sit amet, mattis consectetuer adipiscing suspendisse et justo.\n' +
                                    '                                Praesent mattis\n' +
                                    '                                ugue.'}
                            </div>
                        </div>
                        <div className="column">
                            <nav className="row">
                                <h2>Important Links</h2>
                                <Menu dir="left"/>
                            </nav>
                        </div>
                    </div>
                </div>
                <div id="small-footer">
                    <div className="copyright">
                        <small>{saharaData.footer.copyright ? saharaData.footer.copyright : 'Copyright © 2018 SaharaIT | Powered by React and Wordpress'}</small>
                    </div>
                </div>
            </footer>
        );
    }
}

declare var saharaRoutes: {
    menu: string
};

declare var saharaData: {
    logo: string
    description: string
    footer: {
        description: string
        copyright: string
    }
};
