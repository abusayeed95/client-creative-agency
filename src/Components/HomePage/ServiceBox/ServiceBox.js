import React from 'react';
import { Col } from 'react-bootstrap';
import './ServiceBox.css'

const ServiceBox = ({ service }) => {
    return (
        <Col xs={4} className="service-box">
            <div className="text-center p-5">
                <img height="74px" width="74px" className="img-fluid" src={`data:${service.icon.contentType};base64,${service.icon.img}`} alt="Name" />
                <h4 className="font-weight-bold my-3 navy-blue-text">{service.title}</h4>
                <p>{service.description}</p>
            </div>
        </Col>
    );
};

export default ServiceBox;