import * as React from 'react';
import {RouteComponentProps} from "react-router";

export class Sister extends React.Component<Props> {
    state = {
        data: null
    };

    constructor(props) {
        super(props);

        fetch(`${saharaRoutes.sisters}/${this.props.match.params.slug}`).then(response => {
            response.json().then(data => {
                this.setState({
                    data: data
                });
            });
        })
    }

    render() {
        if (this.state.data) {
            return (
                <section className="page">
                    <article dangerouslySetInnerHTML={{__html: this.state.data}}/>
                </section>
            );
        }

        return <div>Loading...</div>;
    }
}

declare var saharaRoutes: {
    sisters: string
};

interface MatchParams {
    slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}