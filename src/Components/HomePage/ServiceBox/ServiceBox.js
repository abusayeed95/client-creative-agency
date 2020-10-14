import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceBox.css'

const ServiceBox = ({ service }) => {
    const [user, setUser] = React.useContext(UserContext);
    const history = useHistory();

    const handleOrder = (id, img, description, title) => {
        setUser({ ...user, thumbnailType: img.contentType, thumbnailImg: img.img, serviceDescription: description, service: title });
        history.push('/dashboard');
    }
    return (
        <Col xs={4} >
            <div onClick={() => handleOrder(service._id, service.icon, service.description, service.title)} className="text-center p-5 service-box">
                <img height="74px" width="74px" className="img-fluid" src={`data:${service.icon.contentType};base64,${service.icon.img}`} alt="Name" />
                <h4 className="font-weight-bold my-3 navy-blue-text">{service.title}</h4>
                <p>{service.description}</p>
            </div>
        </Col>
    );
};

export default ServiceBox;