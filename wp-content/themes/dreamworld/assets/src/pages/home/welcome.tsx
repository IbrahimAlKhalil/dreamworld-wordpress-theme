import * as React from "react";
import {Loader} from "../../components/loader";

export class Welcome extends React.Component {
    state = {
        data: null
    };

    private abortController = new AbortController;

    componentDidMount() {
        fetch(saharaRoutes.welcome).then(response => {
            response.json().then(data => this.setState({
                data: data
            }));
        });
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {
        if (this.state.data) {
            return (
                <section id="about">
                    <h1 className="section-title">Welcome to Dreamworld BD Corporation Ltd.</h1>
                    <article id="welcome-note" dangerouslySetInnerHTML={{__html: this.state.data}}/>
                </section>
            );
        }

        return <Loader/>;
    }
}

declare var saharaRoutes: {
    welcome: string
};
