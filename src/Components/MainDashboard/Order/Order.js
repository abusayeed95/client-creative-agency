import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import './Order.css';

const Order = () => {
    const [user, setUser] = React.useContext(UserContext);
    const [order, setOrder] = React.useState({});
    const [projectImg, setProjectImg] = React.useState(null);

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value })
    }

    const handleFile = (e) => {
        const newImg = e.target.files[0];
        setProjectImg(newImg);
    }

    const handleOrder = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('projectImg', projectImg);
        formData.append('service', order.serviceName);
        formData.append('description', order.description);
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('price', order.price);

        fetch('http://localhost:3100/add-orders', {
            method: 'POST',
            body: formData
        })
            .then(res => console.log(res))
            .catch(error => {
                console.error(error)
            })
    };
    return (
        <>
            <h2 className="py-3 bg-white">Make Order</h2>
            <div className="order-form-area">
                <div className="order-form">
                    <Form onSubmit={handleOrder}>
                        <Form.Control onChange={handleChange} name="name" type="text" placeholder="Your Name/Company's Name" value={user.name} />
                        <Form.Control onChange={handleChange} name="email" type="email" placeholder="Your Email Address" value={user.email} />
                        <Form.Control onChange={handleChange} name="serviceName" type="text" placeholder="Service Name" value={user.serviceName} />
                        <Form.Control onChange={handleChange} name="description" as="textarea" rows={5} placeholder="Project Details" />
                        <Row className="m-0">
                            <Col xs={6} className="pl-0">
                                <Form.Control onChange={handleChange} name="price" type="text" placeholder="Price" />
                            </Col>
                            <Col xs={6}>
                                <Form.Control onChange={handleFile} name="file" type="file" />
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