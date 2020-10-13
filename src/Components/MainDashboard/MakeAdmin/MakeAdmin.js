import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [admin, setAdmin] = React.useState(null);
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
    }
    return (
        <>
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