import React from 'react';
import { Row } from 'react-bootstrap';
import FeedbackBox from '../FeedbackBox./FeedbackBox';
import './Feedback.css'

// const fakeFeedbacks = [
//     {
//         name: 'Kolmi Lota',
//         img: 'https://i.ibb.co/H2h2JZG/customer-1.png',
//         designation: 'CEO, Mayer Hotel',
//         _id: 111,
//         feedback: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi earum odit omnis nemo, itaque dolorum rem sint eveniet eos saepe, dolore labore?'
//     },
//     {
//         name: 'Fahad Ahmed',
//         img: 'https://i.ibb.co/r5kq6CW/customer-2.png',
//         designation: 'Manager, Baper Hotel (TK Chor)',
//         _id: 222,
//         feedback: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi earum odit omnis nemo, itaque dolorum rem sint eveniet eos saepe, dolore labore?'
//     },
//     {
//         name: 'Samad Hossain',
//         img: 'https://i.ibb.co/xXX8CFJ/customer-3.png',
//         designation: 'Waiter, USA',
//         _id: 333,
//         feedback: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi earum odit omnis nemo, itaque dolorum rem sint eveniet eos saepe, dolore labore?'
//     }
// ]

const Feedback = () => {
    const [feedbacks, setFeedbacks] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3100/feedbacks')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
            .catch(err => console.log(err))
    }, []);
    console.log(feedbacks)

    return (
        <div className="feedback-area d-flex align-items-center">
            <div>
                <h3 className="text-center navy-blue-text font-weight-bold mb-5">Clients<span className="green-text">Feedback</span></h3>
                <div className="feedback-container">
                    <Row className="m-0">
                        {
                            feedbacks.map(feedback => <FeedbackBox key={feedback._id} feedback={feedback} />)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
