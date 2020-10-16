import React from 'react';
import './Portfolio.css';
import portfolio1 from '../../../assets/carousel-1.png';
import portfolio2 from '../../../assets/carousel-2.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Portfolio = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 2.3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return (
        <div className="portfolio">
            <h2 className="text-white text-center font-weight-bold py-2 py-md-5 my-md-5">Here are Some of <span className="green-text">Our Works</span></h2>
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