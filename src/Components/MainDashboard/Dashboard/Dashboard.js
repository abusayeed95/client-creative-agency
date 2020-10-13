import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import logo from '../../../assets/logo.png';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="service-list">
            <Row className="m-0">
                <Col sm={2}>
                    <div className="nav-container">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Link to="/home">
                                    <img height="47px" src={logo} alt="logo" className="my-3" />
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="order">Order</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="service-list">Service List</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="review">Review</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="add-service">Add Service</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="make-admin">Make Admin</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Col>
                <Col className="tab-big px-0" sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="order">
                            <Order />
                        </Tab.Pane>
                        <Tab.Pane eventKey="service-list">
                            <ServiceList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="review">
                            <Review />
                        </Tab.Pane>
                        <Tab.Pane eventKey="add-service">
                            <AddService />
                        </Tab.Pane>
                        <Tab.Pane eventKey="make-admin">
                            <MakeAdmin />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default Dashboard;