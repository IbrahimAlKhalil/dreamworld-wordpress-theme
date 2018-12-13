import * as React from 'react';

export class Footer extends React.Component {
    state = {
        items: null
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div id="big-footer">
                    <div className="content flex flex-wrap">
                        <div className="column">
                            <div className="row">
                                <img className="logo" src=""/>
                            </div>
                            <div className="row description">
                                Lorem ipsum dolor sit amet, mattis consectetuer adipiscing suspendisse et justo.
                                Praesent mattis
                                ugue.
                            </div>
                        </div>
                        <div className="column">
                            <nav className="row">
                                <h2>Important Links</h2>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="column">
                            <nav className="row">
                                <h2>Important Links</h2>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div id="small-footer">
                    <div className="copyright">
                        <small>Copyright © 2018 SaharaIT | Powered by React and Wordpress</small>
                    </div>
                </div>
            </footer>
        );
    }
}

declare var saharaRoutes: {
    menu: string
};