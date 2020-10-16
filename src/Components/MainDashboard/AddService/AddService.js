import { faCheckCircle, faCloudUploadAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './AddService.css';

const AddService = () => {
    const [icon, setIcon] = React.useState(null);
    const [serviceDetails, setServiceDetails] = React.useState(null);
    const [show, setShow] = React.useState(false);
    const [iconError, setIconError] = React.useState(false);
    const history = useHistory();

    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        setServiceDetails({ ...serviceDetails, [e.target.name]: e.target.value })
    };

    const handleFile = (e) => {
        const newIcon = e.target.files[0];
        setIcon(newIcon);
        setIconError(false);
    }


    const handleAddService = (e) => {
        e.preventDefault();
        if (icon === null) { setIconError(true) }
        else {
            const formData = new FormData()
            formData.append('icon', icon);
            formData.append('title', serviceDetails.title);
            formData.append('description', serviceDetails.description);

            fetch('https://pacific-depths-60044.herokuapp.com/add-services', {
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
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Body>
                    <h2 className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Service Added Successfully</h2>
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
            <h2 className="py-3  bg-white">Add Service</h2>
            <div className="add-service">
                <Form onSubmit={handleAddService}>
                    <div className="add-service-form">
                        <Row className="m-0">
                            <Col xs={12} md={6} lg={4}>
                                <Form.Group>
                                    <Form.Label><strong>Title</strong></Form.Label>
                                    <Form.Control onChange={handleChange} name="title" type="text" placeholder="Enter Title" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label><strong>Description</strong></Form.Label>
                                    <Form.Control onChange={handleChange} name="description" as="textarea" rows={5} placeholder="Write Description" required />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={3} lg={4}>
                                <label for="icon-upload" className="file-upload">
                                    <p><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Icon</p>
                                    <input onChange={handleFile} name="file" id="icon-upload" type="file" />
                                </label>
                                {
                                    iconError ? <p className="text-danger font-weight-bold"> <FontAwesomeIcon icon={faTimesCircle} /> Please upload an icon for this service.</p> : null
                                }
                            </Col>
                            <Col className="d-flex justify-content-end align-items-end" xs={12} md={3} lg={4}>
                                <button className="green-btn">Submit</button>
                            </Col>
                        </Row>
                    </div>

                </Form>
            </div>
        </>
    );
};

export default AddService;