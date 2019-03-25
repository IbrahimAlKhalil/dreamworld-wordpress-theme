import * as React from 'react';
import {Loader} from "../components/loader";
import {GoogleMap} from "../components/google-map";

export class Contact extends React.Component {
    state = {
        captcha: null,
        content: null
    };

    componentDidMount(): void {
        fetch(`${saharaRoutes.ajax}?action=getCaptcha`).then(response => {
            response.text().then(base64 => {
                this.setState({
                    captcha: base64
                });
            });
        });

        fetch(`${saharaRoutes.page}/contact`).then(response => {
            response.json().then(content => {
                this.setState({
                    content: content
                });
            });
        });
    }

    render(): React.ReactNode {
        const Content = () => {
            if (this.state.content) {
                return (
                    <div className="column" dangerouslySetInnerHTML={{__html: this.state.content}}>
                    </div>
                );
            }

            return (
                <div className="column">
                    <Loader/>
                </div>
            );
        };


        return (
            <section className="page">
                <div style={{height: '500px', width: '100%'}}>
                    <GoogleMap lat={-52.54} lng={-89.312} zoom={6}/>
                </div>

                <section className="flex justify-content-center flex-wrap" id="contact-section">

                    <Content/>

                    <div className="column">
                        <h2>Send Us A Message</h2>
                        <form action={saharaRoutes.contact} method="post" className="flex flex-wrap" id="contact-form">
                            <input type="text" name="name" placeholder="Name"/>
                            <input type="email" name="email" placeholder="Email"/>
                            <input type="number" name="number" placeholder="Phone Number"/>
                            <input type="text" name="subject" placeholder="Subject"/>
                            <textarea name="message" cols={30} rows={10} placeholder="Message"/>
                            {
                                this.state.captcha && <img src={this.state.captcha} alt="captcha"/>
                            }
                            <input type="text" name="captcha"
                                   placeholder="Please write what you see in the picture above!"/>
                            <button type="submit">Submit</button>

                        </form>
                    </div>
                </section>
            </section>
        );
    }
}

declare var saharaRoutes: {
    page: string
    contact: string
    ajax: string
};