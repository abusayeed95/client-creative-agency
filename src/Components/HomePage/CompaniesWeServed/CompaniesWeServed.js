import React from 'react';
import google from '../../../assets/google.png';
import slack from '../../../assets/slack.png';
import uber from '../../../assets/uber.png';
import netflix from '../../../assets/netflix.png';
import airbnb from '../../../assets/airbnb.png';
import './Companies.css';
import { Col, Row } from 'react-bootstrap';

const CompaniesWeServed = () => {
    return (
        <div className="company-container">
            <Row className="d-flex justify-content-center">
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={slack} alt="Slack" /></Col>
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={google} alt="Google" /></Col>
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={uber} alt="Uber" /></Col>
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={netflix} alt="Netflix" /></Col>
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={airbnb} alt="AirBnB" /></Col>
            </Row>
        </div>
    );
};

export default CompaniesWeServed;