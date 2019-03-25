import * as React from "react";
import GoogleMapReact from 'google-map-react';

export class GoogleMap extends React.Component<{
    lat: number
    lng: number
    zoom: number
}> {

    render(): React.ReactNode {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyANFpBv56klDOdwZFtMpN4kxB7VLSs4VH0&token=85763'}}
                defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
                defaultZoom={this.props.zoom}>
            </GoogleMapReact>
        );
    }
}