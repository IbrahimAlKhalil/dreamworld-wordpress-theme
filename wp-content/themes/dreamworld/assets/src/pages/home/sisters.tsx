import * as React from 'react';
import {Link} from 'react-router-dom';
import {Loader} from "../../components/loader";

export class Sisters extends React.Component<Props> {

    render() {
        if (this.props.organizations) {
            return (
                <section className="sisters">
                    <h1 className="section-title">{this.props.title}</h1>
                    <div id="sister-organizations" className="flex justify-content-center flex-wrap">
                        {
                            this.props.organizations.map(sister => (
                                <div key={sister.slug} className="card">
                                    <Link to={`/sister/${sister.slug}`} className="flex flex-wrap">
                                        <div className="img">
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

        return <Loader/>;
    }
}


interface Props {
    organizations: any,
    title: string
}
