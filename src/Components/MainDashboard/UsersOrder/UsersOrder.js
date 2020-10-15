import React from 'react';
import { Col } from 'react-bootstrap';
import './UsersOrder.css';

const UsersOrder = ({ order }) => {
    return (
        <Col xs={12} md={6}>
            <div className="order-container bg-white">
                <div className="d-flex justify-content-between">
                    <img height="50px" src={`data:${order.thumbnailType};base64,${order.thumbnailImg}`} alt={order.service} />
                    <span style={{ color: order.state === 'Pending' ? '#FF4545' : order.state === 'On Going' ? '#FF8000' : '#009444', backgroundColor: order.state === 'Pending' ? '#FFE3E3' : order.state === 'On Going' ? '#FFFF99' : '#C6FFE0' }}>{order.state}</span>
                </div>
                <h4>{order.service}</h4>
                <p><small>{order.serviceDescription}</small></p>
            </div>
        </Col>
    );
};

export default UsersOrder;