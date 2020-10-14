import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceBox.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceBox = ({ service }) => {
    const [user, setUser] = React.useContext(UserContext);
    const history = useHistory();

    const handleOrder = (id, img, description, title) => {
        setUser({ ...user, thumbnailType: img.contentType, thumbnailImg: img.img, serviceDescription: description, service: title });
        history.push('/dashboard');
    };

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (

        <Col xs={12} md={6} lg={4}>
            <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <div onClick={() => handleOrder(service._id, service.icon, service.description, service.title)} className="text-center service-box">
                    <img height="74px" width="74px" className="img-fluid" src={`data:${service.icon.contentType};base64,${service.icon.img}`} alt="Name" />
                    <h4 className="font-weight-bold my-3 navy-blue-text">{service.title}</h4>
                    <p>{service.description}</p>
                </div>
            </animated.div>

        </Col>
    );
};

export default ServiceBox;