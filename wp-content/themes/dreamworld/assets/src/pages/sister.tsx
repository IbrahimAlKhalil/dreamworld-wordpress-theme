import * as React from 'react';
import {RouteComponentProps} from "react-router";
import {FourZeroFour} from "./404";
import {Loader} from "../components/loader";

export class Sister extends React.Component<Props> {
    state = {
        data: null,
        error: false
    };

    constructor(props) {
        super(props);
        this.fetchData(this.props);
    }

    componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
        this.fetchData(nextProps);
    }

    render() {
        if (this.state.error) {
            return <FourZeroFour/>;
        }

        if (this.state.data) {
            return (
                <section className="page">
                    <article dangerouslySetInnerHTML={{__html: this.state.data}}/>
                </section>
            );
        }

        return <Loader/>;
    }

    fetchData(props: Props) {
        fetch(`${saharaRoutes.sisters}/${props.match.params.slug}`).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    this.setState({
                        data: data
                    });
                });
            } else {
                this.setState({
                    error: true
                });
            }
        })
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