import React from 'react';
import { Col, Row } from 'react-bootstrap';

const FeedbackBox = ({ feedback }) => {
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="feedback-box">
                <Row className="m-0">
                    <Col xs={3} >
                        <img height="60px" className="rounded-circle" src={feedback.img} alt={feedback.name} />
                    </Col>
                    <Col xs={9} >
                        <h5 className="navy-blue-text font-weight-bold">{feedback.name}</h5>
                        <p><strong>{feedback.designation}, {feedback.company}</strong></p>
                    </Col>
                    <Col xs={12}>
                        <p>{feedback.feedback}</p>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default FeedbackBox;