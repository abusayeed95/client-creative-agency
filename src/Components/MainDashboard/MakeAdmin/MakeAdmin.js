import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
        <>
            <h2 className="py-3  bg-white">Make Admin</h2>
            <div className="make-admin">
                <div className="make-admin-form">
                    <Form>
                        <label><strong>Email</strong></label> <br />
                        <Form.Control type="email" placeholder="add-admin@example.com" />
                        <button type="submit" className="green-btn custom">Submit</button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default MakeAdmin;