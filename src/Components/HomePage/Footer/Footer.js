import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Row className="m-0 pl-5">
                <Col className="px-5" xs={12} md={6}>
                    <h2 className="navy-blue-text font-weight-bold">Let Us Handle Your <br /> Project,  Professionally</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </Col>
                <Col xs={12} md={6}>
                    <Form>
                        <Form.Control type="email" placeholder="Your Email Address" />
                        <Form.Control type="text" placeholder="Your Name/Company's Name" />
                        <Form.Control as="textarea" rows={10} placeholder="Your Message" />
                        <button className="brand-btn mt-3" type="submit">Send</button>
                    </Form>
                </Col>
                <Col className="mt-5" xs={12}>
                    <p className="text-muted text-center"><small>Copyright Orange Labs 2020</small></p>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;