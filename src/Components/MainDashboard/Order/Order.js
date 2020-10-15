import { faCheckCircle, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Order.css';

const Order = () => {
    const [user, setUser] = React.useContext(UserContext);
    const [order, setOrder] = React.useState({});
    const [projectImg, setProjectImg] = React.useState(null);
    const [show, setShow] = React.useState(false);
    const history = useHistory();

    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
        console.log(order, user)
    }

    const handleFile = (e) => {
        const newImg = e.target.files[0];
        setProjectImg(newImg);
    }

    const handleOrder = (e) => {
        e.preventDefault();
        if (projectImg === null) { alert("Please Upload Your Resources before submit") }
        else {
            const formData = new FormData()
            formData.append('projectImg', projectImg);
            formData.append('service', user.service);
            formData.append('orderDescription', order.orderDescription);
            formData.append('name', user.name || order.name);
            formData.append('email', user.email || order.email);
            formData.append('price', order.price);
            formData.append('thumbnailType', user.thumbnailType);
            formData.append('thumbnailImg', user.thumbnailImg);
            formData.append('serviceDescription', user.serviceDescription);

            fetch('https://pacific-depths-60044.herokuapp.com/add-orders', {
                method: 'POST',
                body: formData
            })
                .then(res => {
                    if (res.status === 200) {
                        setShow(true);
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }

    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h2 className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Order Confirmed</h2>
                    <h5>You can see status of your order in service list...</h5>
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
            <h2 className="py-3 bg-white">Make Order</h2>
            <div className="order-form-area">
                <div className="order-form">
                    <Form onSubmit={handleOrder}>
                        <Form.Control onChange={handleChange} name="name" type="text" placeholder="Your Name/Company's Name" value={user.name} required />
                        <Form.Control onChange={handleChange} name="email" type="email" placeholder="Your Email Address" value={user.email} required />
                        <Form.Control onChange={handleChange} name="serviceName" type="text" placeholder="Service Name" value={user.service} required />
                        <Form.Control onChange={handleChange} name="orderDescription" as="textarea" rows={5} placeholder="Project Details" required />
                        <Row className="m-0">
                            <Col xs={12} lg={6} className="pl-0">
                                <Form.Control onChange={handleChange} name="price" type="text" placeholder="Price" required />
                            </Col>
                            <Col xs={12} md={6}>
                                <label for="file-upload" className="file-upload">
                                    <p><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Resources*</p>
                                    <input onChange={handleFile} name="file" id="file-upload" type="file" />
                                </label>
                            </Col>
                        </Row>
                        <button type="submit" className="brand-btn">Send</button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Order;