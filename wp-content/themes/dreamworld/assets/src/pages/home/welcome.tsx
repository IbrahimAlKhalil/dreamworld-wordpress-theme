import * as React from "react";

export class Welcome extends React.Component {
    state = {
        data: null
    };

    constructor(props) {
        super(props);

        fetch(saharaRoutes.welcome).then(response => {
            response.json().then(data => this.setState({
                data: data
            }));
        });
    }

    render() {
        if (this.state.data) {
            return (
                <section id="about">
                    <h1 className="section-title">Welcome to Dreamworld BD Group Ltd.</h1>
                    <article dangerouslySetInnerHTML={{__html: this.state.data}}/>
                </section>
            );
        }

        return <div>Loading...</div>;
    }
}

declare var saharaRoutes: {
    welcome: string
};