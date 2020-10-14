import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Review.css'

const Review = () => {
    const [user, setUser] = React.useContext(UserContext);
    const [review, setReview] = React.useState({});
    const [show, setShow] = React.useState(false);
    const history = useHistory();

    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value, name: user.name, img: user.photoURL })
    }
    const handleFeedback = (e) => {
        e.preventDefault();
        setReview({ ...review, name: user.name, img: user.photoURL })
        fetch('http://localhost:3100/add-feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
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
                    <h2 className="text-success"><FontAwesomeIcon icon={faHandHoldingHeart} /> Thanks For Your FeedBack</h2>
                    <h5>Have a great day...</h5>
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
            <h2 className="bg-white py-3">Review</h2>
            <div className="review-form-area">
                <div className="review-form">
                    <Form onSubmit={handleFeedback}>
                        <Form.Control onChange={handleChange} type="text" name="name" placeholder="Your Name" required value={user.name} />
                        <Form.Control onChange={handleChange} type="text" name="company" placeholder="Company's Name" required />
                        <Form.Control onChange={handleChange} type="text" name="designation" placeholder="Designation" required />
                        <Form.Control onChange={handleChange} as="textarea" name="feedback" rows={5} placeholder="Feedback" required />
                        <button className="brand-btn">Submit</button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Review;