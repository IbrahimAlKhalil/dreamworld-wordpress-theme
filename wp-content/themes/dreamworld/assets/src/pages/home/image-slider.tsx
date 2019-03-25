import * as React from 'react';
import {TinySliderSettings} from "tiny-slider";
import {Slider} from "../../components/slider";
import {Loader} from "../../components/loader";

export class ImageSlider extends React.Component {
    state = {
        slides: null
    };

    private abortController = new AbortController;

    componentDidMount() {
        fetch(saharaRoutes.slider, {
            signal: this.abortController.signal
        }).then(response => {
            response.json().then(slides => this.setState({
                slides: slides
            }));
        });
    }

    componentWillUnmount() {
        this.abortController.abort();
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

        return <Loader/>;
    }
}

declare var saharaRoutes: {
    slider: string
};