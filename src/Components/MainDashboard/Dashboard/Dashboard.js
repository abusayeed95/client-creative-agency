import React from 'react';
import { Row, Tab, Col, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Order from '../Order/Order';
import Review from '../Review/Review';
import logo from '../../../assets/logo.png';
import './Dashboard.css'
import { UserContext } from '../../../App';
import ServiceListAdmin from '../ServiceListAdmin/ServiceListAdmin';
import ServiceListCustomer from '../ServiceListCustomer/ServiceListCustomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShoppingBag, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

const Dashboard = () => {
    const [user, setUser] = React.useContext(UserContext);
    document.title = 'Dashboard||Creative Agency'
    return (
        <Tab.Container defaultActiveKey={user.isAdmin ? 'service-list-admin' : 'order'}>
            <Row className="m-0">
                <Col xs={1} lg={2}>
                    <div className="nav-container">
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to="/home">
                                    <img height="47px" src={logo} alt="logo" className="my-3 d-none d-lg-block" />
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="order"><FontAwesomeIcon icon={faShoppingCart} /> <span className="d-none d-lg-inline-block">Order</span></Nav.Link>
                            </Nav.Item>
                            {
                                user.isAdmin ? null :
                                    <Nav.Item>
                                        <Nav.Link eventKey="service-list-customer"><FontAwesomeIcon icon={faShoppingBag} /> <span className="d-none d-lg-inline-block">Service List</span></Nav.Link>
                                    </Nav.Item>
                            }
                            <Nav.Item>
                                <Nav.Link eventKey="review"><FontAwesomeIcon icon={faCommentDots} /> <span className="d-none d-lg-inline-block">Review</span></Nav.Link>
                            </Nav.Item>
                            {
                                user.isAdmin &&
                                <>
                                    <Nav.Item>
                                        <Nav.Link eventKey="service-list-admin"><FontAwesomeIcon icon={faShoppingBag} /> <span className="d-none d-lg-inline-block">Service List</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="add-service"><FontAwesomeIcon icon={faPlus} /> <span className="d-none d-lg-inline-block">Add Service</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="make-admin"><FontAwesomeIcon icon={faUserPlus} /> <span className="d-none d-lg-inline-block">Make Admin</span></Nav.Link>
                                    </Nav.Item>
                                </>
                            }
                        </Nav>
                    </div>
                </Col>
                <Col className="tab-big px-0" xs={11} lg={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="order">
                            <Order />
                        </Tab.Pane>
                        <Tab.Pane eventKey="service-list-admin">
                            <ServiceListAdmin />
                        </Tab.Pane>
                        <Tab.Pane eventKey="service-list-customer">
                            <ServiceListCustomer />
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