import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const FeedbackBox = ({ feedback }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (
        <Col xs={12} md={6} lg={4}>
            <animated.div
                class="feedback-card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
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
            </animated.div>
        </Col>
    );
};

export default FeedbackBox;