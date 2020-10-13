import React from 'react';
import { Form } from 'react-bootstrap';
import { UserContext } from '../../../App';
import './Review.css'

const Review = () => {
    const [user, setUser] = React.useContext(UserContext);
    const [review, setReview] = React.useState({});


    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value })
    }
    const handleFeedback = (e) => {
        e.preventDefault();
        setReview({ ...review, name: user.name, img: user.photoURL })
        // console.log(review)
        fetch('http://localhost:3100/add-feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => console.log(res));
    }
    return (
        <>
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