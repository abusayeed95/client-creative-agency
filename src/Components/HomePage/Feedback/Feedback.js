import React from 'react';
import { Row } from 'react-bootstrap';
import FeedbackBox from '../FeedbackBox./FeedbackBox';
import './Feedback.css'

const Feedback = () => {
    const [feedbacks, setFeedbacks] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3100/feedbacks')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
            .catch(err => console.log(err))
    }, []);

    const shuffle = feedbacks.sort(() => .5 - Math.random());
    const shuffled6Feedbacks = shuffle.slice(0, 6) || shuffle;

    return (
        <div className="feedback-area d-flex align-items-center">
            <div>
                <h3 className="text-center navy-blue-text font-weight-bold mb-5">Clients<span className="green-text">Feedback</span></h3>
                <div className="feedback-container">
                    <Row className="m-0">
                        {
                            shuffled6Feedbacks.map(feedback => <FeedbackBox key={feedback._id} feedback={feedback} />)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
