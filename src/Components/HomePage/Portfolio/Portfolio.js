import React from 'react';
import './Portfolio.css';
import portfolio1 from '../../../assets/carousel-1.png';
import portfolio2 from '../../../assets/carousel-2.png';
import portfolio3 from '../../../assets/carousel-3.png';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2 className="text-white text-center font-weight-bold">Here are Some of <span className="green-text">Our Works</span></h2>
            <div className="carousel-box">
                <Carousel
                    plugins={[
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2
                            }
                        },
                    ]}
                >
                    <div className="carousel-img"><img className="img-fluid" src={portfolio1} alt="Carousel" /></div>
                    <div className="carousel-img"><img className="img-fluid" src={portfolio2} alt="Carousel" /></div>
                    <div className="carousel-img"><img className="img-fluid" src={portfolio3} alt="Carousel" /></div>
                </Carousel>
            </div>
        </div>
    );
};

export default Portfolio;