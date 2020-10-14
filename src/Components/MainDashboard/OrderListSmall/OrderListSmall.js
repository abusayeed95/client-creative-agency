import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './OrderListSmall.css';

const OrderListSmall = ({ order }) => {
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="box">
                <Row className="m-0">
                    <Col className="mb-3 d-flex flex-column align-items-center" xs={12}>
                        <img height="100px" src={`data:${order.thumbnailType};base64,${order.thumbnailImg}`} alt={order.service} />
                        <h4>{order.service}</h4>
                    </Col>
                    <Col className="d-flex flex-column align-items-center" xs={12}>
                        <h5 className="font-weight-bold">Ordered by: {order.name}</h5>
                        <p><strong>Email: {order.email}</strong></p>
                        <p>State: {order.state}</p>
                        <p>Description: </p>
                        <p>{order.description}</p>
                    </Col>
                </Row>
            </div>
        </Col >
    );
};

export default OrderListSmall;