import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './OrderListSmall.css';

const OrderListSmall = ({ order }) => {
    const [show, setShow] = React.useState(false);
    const [state, setState] = React.useState(null);
    const history = useHistory();

    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        setState(e.target.value)
        fetch(`https://pacific-depths-60044.herokuapp.com/order-state/${order._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: e.target.value })
        })
            .then(res => {
                if (res.status === 200) {
                    setShow(true);
                }
            })
            .catch(error => {
                console.error(error)
            })
    };

    return (
        <>
            <Col xs={12} md={6} lg={4}>
                <div className="box">
                    <Row className="m-0">
                        <Col className="mb-3 d-flex flex-column align-items-center" xs={12}>
                            <img height="100px" src={`data:${order.thumbnailType};base64,${order.thumbnailImg}`} alt={order.service} />

                        </Col>
                        <Col className="d-flex flex-column align-items-center" xs={12}>
                            <h5 ><strong>Ordered by: {order.name}</strong></h5>
                            <p><strong>Email: {order.email}</strong></p>
                            {/* <p className={order.state === 'Done' && 'bg-success'} style={{ color: 'white', backgroundColor: order.state === 'Pending' ? 'red' : '#FFCC00', borderRadius: '3px', display: 'inline-block', padding: '.5rem 1rem' }}>State: {order.state}</p> */}
                            <Form.Control id="dropdown-small" style={{ color: `${(state || order.state) === 'Pending' ? 'rgb(255,0,0' : (state || order.state) === 'On Going' ? 'rgb(255,128,0' : 'rgb(0,153,0'}`, backgroundColor: 'transparent' }} onChange={handleChange} as="select" name="state" value={state || order.state}>
                                <option value="Pending">Pending</option>
                                <option value="On Going">On Going</option>
                                <option value="Done">Done</option>
                            </Form.Control>
                            <p><strong>Description: </strong></p>
                            <p>{order.orderDescription}</p>
                        </Col>
                    </Row>
                </div>
            </Col >
            <Modal show={show} centered onHide={handleClose}>
                <Modal.Body>
                    <h2 className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> State Updated Successfully</h2>
                </Modal.Body>
                <Modal.Footer>
                    <button className="brand-btn" onClick={handleClose}>
                        Close
                    </button>
                    <button className="green-btn" onClick={() => history.push('/home')}>
                        Home
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default OrderListSmall;