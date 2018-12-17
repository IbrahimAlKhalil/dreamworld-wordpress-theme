import * as React from 'react';
import {Link} from 'react-router-dom';

export class Sisters extends React.Component {
    state = {
        sisters: null
    };

    private abortController = new AbortController;

    componentDidMount() {
        fetch(saharaRoutes.sisters, {
            signal: this.abortController.signal
        }).then(response => {
            response.json().then(sisters => this.setState({
                sisters: sisters
            }));
        });
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {
        if (this.state.sisters) {
            return (
                <section id="sister">
                    <h1 className="section-title">Our Sister Concerns</h1>
                    <div id="sister-organizations" className="flex justify-content-center flex-wrap">
                        {
                            this.state.sisters.map(sister => (
                                <div key={sister.slug} className="card">
                                    <Link to={`/sister-organizations/${sister.slug}`} className="flex flex-wrap">
                                        <div>
                                            <img src={sister.logo} alt={sister.title}/>
                                        </div>
                                        <div className="spacer-top"/>
                                        <p className="title">
                                            {sister.title}
                                        </p>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </section>
            );
        }

        return <div>Loading...</div>;
    }
}

declare var saharaRoutes: {
    sisters: string
};