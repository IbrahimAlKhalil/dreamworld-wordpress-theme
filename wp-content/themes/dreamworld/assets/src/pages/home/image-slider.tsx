import * as React from 'react';
import {TinySliderSettings} from "tiny-slider";
import {Slider} from "../../components/slider";

export class ImageSlider extends React.Component {
    state = {
        slides: null
    };

    constructor(props) {
        super(props);

        setTimeout(() => {
            fetch(saharaRoutes.slider).then(response => {
                response.json().then(slides => this.setState({
                    slides: slides
                }));
            });
        }, 2500);
    }

    render() {
        const sliderConfig: TinySliderSettings = {
            items: 1,
            autoplay: true,
            controls: false,
            autoplayButtonOutput: false,
            touch: true,
            autoplayHoverPause: true,
            speed: 700,
            lazyload: true,
            autoplayTimeout: 5000,
        };

        if (this.state.slides) {
            return (
                <section id="slider">
                    <Slider tnsConfig={sliderConfig}>
                        {
                            this.state.slides.map((slide, index) => (
                                <img height="460px" className="tns-lazy-img" key={`image-slider-${index.toString()}`}
                                     src={slide.image}
                                     alt={slide.description}/>
                            ))
                        }
                    </Slider>
                </section>
            );
        }

        return <div>Loading...</div>;
    }
}

declare var saharaRoutes: {
    slider: string
};