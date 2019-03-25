import * as React from 'react';
import {NavMenu} from "../../components/nav-menu";
import {Link} from "react-router-dom";

export class Header extends React.Component {
    state = {
        items: null,
        isActive: false
    };

    constructor(props) {
        super(props);

        fetch(`${saharaRoutes.menu}/Header`).then(response => {
            response.json().then(items => this.setState({
                items: items
            }));
        });
    }

    render() {
        const Menu = () => {
            if (this.state.items) {
                return <NavMenu items={this.state.items}/>;
            }

            return null;
        };


        return (
            <header className="flex align-items-center flex-wrap">

                <div className="flex align-items-center">
                    <Link to="/" className="logo">
                        <img className="logo" src={saharaData.logo} alt={saharaData.description}/>
                    </Link>
                    <div className="spacer-right"/>
                    <img className="collapse-menu"
                         onClick={this.toggle.bind(this)}
                         src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDkxLjMxOCwyMzUuMzE4SDIwLjY4MkM5LjI2LDIzNS4zMTgsMCwyNDQuNTc3LDAsMjU2czkuMjYsMjAuNjgyLDIwLjY4MiwyMC42ODJoNDcwLjYzNg0KCQkJYzExLjQyMywwLDIwLjY4Mi05LjI1OSwyMC42ODItMjAuNjgyQzUxMiwyNDQuNTc4LDUwMi43NDEsMjM1LjMxOCw0OTEuMzE4LDIzNS4zMTh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTEuMzE4LDc4LjQzOUgyMC42ODJDOS4yNiw3OC40MzksMCw4Ny42OTksMCw5OS4xMjFjMCwxMS40MjIsOS4yNiwyMC42ODIsMjAuNjgyLDIwLjY4Mmg0NzAuNjM2DQoJCQljMTEuNDIzLDAsMjAuNjgyLTkuMjYsMjAuNjgyLTIwLjY4MkM1MTIsODcuNjk5LDUwMi43NDEsNzguNDM5LDQ5MS4zMTgsNzguNDM5eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDkxLjMxOCwzOTIuMTk3SDIwLjY4MkM5LjI2LDM5Mi4xOTcsMCw0MDEuNDU2LDAsNDEyLjg3OXM5LjI2LDIwLjY4MiwyMC42ODIsMjAuNjgyaDQ3MC42MzYNCgkJCWMxMS40MjMsMCwyMC42ODItOS4yNTksMjAuNjgyLTIwLjY4MlM1MDIuNzQxLDM5Mi4xOTcsNDkxLjMxOCwzOTIuMTk3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"/>
                </div>
                <div className="spacer-right"/>
                <nav id="main-nav" className={this.state.isActive ? 'active' : ''}>
                    <Menu/>
                </nav>
            </header>
        );
    }

    toggle() {
        this.setState({
            isActive: !this.state.isActive
        });
    }
}

declare var saharaRoutes: {
    menu: string
};

declare var saharaData: {
    logo: string,
    description: string
};