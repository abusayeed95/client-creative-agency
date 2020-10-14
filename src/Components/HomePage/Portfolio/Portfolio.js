import React from 'react';
import './Portfolio.css';
import portfolio1 from '../../../assets/carousel-1.png';
import portfolio2 from '../../../assets/carousel-2.png';
import portfolio3 from '../../../assets/carousel-3.png';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Portfolio = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 2,
        speed: 1000,
        dots: true,
    };
    return (
        <div className="portfolio">
            <h2 className="text-white text-center font-weight-bold py-5 my-5">Here are Some of <span className="green-text">Our Works</span></h2>
            <div className="carousel-box">
                <Slider {...settings}>
                    <div className="carousel-image"><img className="img-fluid" src={portfolio1} alt="Carousel" /></div>
                    <div className="carousel-image"><img className="img-fluid" src={portfolio2} alt="Carousel" /></div>
                    <div className="carousel-image"><img className="img-fluid" src={portfolio1} alt="Carousel" /></div>
                    <div className="carousel-image"><img className="img-fluid" src={portfolio2} alt="Carousel" /></div>
                    <div className="carousel-image"><img className="img-fluid" src={portfolio1} alt="Carousel" /></div>
                    <div className="carousel-image"><img className="img-fluid" src={portfolio2} alt="Carousel" /></div>
                </Slider>
            </div>
        </div>
    );
};

export default Portfolio;