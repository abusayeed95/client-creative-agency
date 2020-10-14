import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ServiceBox from '../ServiceBox/ServiceBox';
import './OurServices.css'

// const fakeServices = [
//     {
//         name: 'Web and Mobile Design',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, distinctio incidunt, pariatur voluptate recusandae rem quibusdam, blanditiis accusantium nobis fugiat necessitatibus esse.',
//         img: 'https://i.ibb.co/8xZpYLp/service1.png',
//         _id: 222
//     },
//     {
//         name: 'Graphic Design',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, distinctio incidunt, pariatur voluptate recusandae rem quibusdam, blanditiis accusantium nobis fugiat necessitatibus esse.',
//         img: 'https://i.ibb.co/0h6HRD6/service2.png',
//         _id: 333
//     },
//     {
//         name: 'Web Development',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, distinctio incidunt, pariatur voluptate recusandae rem quibusdam, blanditiis accusantium nobis fugiat necessitatibus esse.',
//         img: 'https://i.ibb.co/DMjkhBX/service5.png',
//         _id: 444
//     }
// ]

const OurServices = () => {
    const [services, setServices] = React.useState([]);

    React.useEffect(() => {
        fetch('https://pacific-depths-60044.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const shuffle = services.sort(() => .5 - Math.random());
    const shuffled6Services = shuffle.slice(0, 6) || shuffle;

    return (
        <div className="service-area d-flex align-items-center">
            <div>
                <h2 className="text-center navy-blue-text font-weight-bold my-5 pt-5">
                    Provide Awesome <span className="green-text">Services</span>
                </h2>
                <div className="service-container ">
                    <Row className="m-0">
                        {
                            shuffled6Services.map(service => <ServiceBox key={service._id} service={service} />)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
