import React from 'react';
import { Col } from 'react-bootstrap';
import './UsersOrder.css';

const UsersOrder = ({ order }) => {
    return (
        <Col xs={5}>
            <div className="order-container bg-white">
                <div className="d-flex justify-content-between">
                    <img height="50px" src={`data:${order.thumbnailType};base64,${order.thumbnailImg}`} alt={order.service} />
                    <span>{order.state}</span>
                </div>
                <h4>{order.service}</h4>
                <p><small>{order.serviceDescription}</small></p>
            </div>
        </Col>
    );
};

export default UsersOrder;