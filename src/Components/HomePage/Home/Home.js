import React from 'react';
import CompaniesWeServed from '../CompaniesWeServed/CompaniesWeServed';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Introduction from '../Introduction/Introduction';
import NavigationBar from '../NavigationBar/NavigationBar';
import OurServices from '../OurServices/OurServices';
import Portfolio from '../Portfolio/Portfolio';
import './Home.css'

const Home = () => {
    document.title = 'Home||Creative Agency'
    return (
        <div className="home-page">
            <main>
                <div className="header-bg" />
                <div className="header">
                    <NavigationBar />
                    <Introduction />
                </div>
            </main>
            <CompaniesWeServed />
            <OurServices />
            <Portfolio />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;