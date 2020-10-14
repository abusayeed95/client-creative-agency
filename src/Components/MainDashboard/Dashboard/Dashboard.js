import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';
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
        <Tab.Container id="left-tabs-example" defaultActiveKey={user.isAdmin ? 'service-list-admin' : 'order'}>
            <Row className="m-0">
                <Col sm={2}>
                    <div className="nav-container">
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to="/home">
                                    <img height="47px" src={logo} alt="logo" className="my-3" />
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="order"><FontAwesomeIcon icon={faShoppingCart} /> Order</Nav.Link>
                            </Nav.Item>
                            {
                                user.isAdmin ? null :
                                    <Nav.Item>
                                        <Nav.Link eventKey="service-list-customer"><FontAwesomeIcon icon={faShoppingBag} /> Service List</Nav.Link>
                                    </Nav.Item>
                            }
                            <Nav.Item>
                                <Nav.Link eventKey="review"><FontAwesomeIcon icon={faCommentDots} /> Review</Nav.Link>
                            </Nav.Item>
                            {
                                user.isAdmin &&
                                <>
                                    <Nav.Item>
                                        <Nav.Link eventKey="service-list-admin"><FontAwesomeIcon icon={faShoppingBag} /> Service List</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="add-service"><FontAwesomeIcon icon={faPlus} /> Add Service</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="make-admin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Nav.Link>
                                    </Nav.Item>
                                </>
                            }
                        </Nav>
                    </div>
                </Col>
                <Col className="tab-big px-0" sm={10}>
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