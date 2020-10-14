import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [admin, setAdmin] = React.useState(null);
    const [show, setShow] = React.useState(false);
    const history = useHistory();

    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        setAdmin({ [e.target.name]: e.target.value });
    };

    const handleMakeAdmin = (e) => {
        e.preventDefault();
        fetch('http://localhost:3100/add-admin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
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
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h2 className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Admin Added Successfully</h2>
                    <h4>Now, he can operate this site as an admin...!</h4>
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
            <h2 className="py-3  bg-white">Make Admin</h2>
            <div className="make-admin">
                <div className="make-admin-form">
                    <Form onSubmit={handleMakeAdmin}>
                        <label><strong>Email</strong></label> <br />
                        <Form.Control type="email" name="email" onChange={handleChange} placeholder="add-admin@example.com" />
                        <button type="submit" className="green-btn custom">Submit</button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default MakeAdmin;