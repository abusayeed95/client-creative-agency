import React from 'react';
import { Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import UsersOrder from '../UsersOrder/UsersOrder';

const ServiceListCustomer = () => {
    const [userOrder, setUserOrder] = React.useState([]);
    const [user, setUser] = React.useContext(UserContext)

    React.useEffect(() => {
        fetch(`https://pacific-depths-60044.herokuapp.com/users-orders/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setUserOrder(data))
    }, [])
    return (
        <>
            <h2 className="py-3 bg-white">Order List</h2>
            <div className="service-area">
                <Row className="m-0">
                    {
                        userOrder.map(order => <UsersOrder order={order} key={order._id} />)
                    }
                </Row>
            </div>
        </>
    );
};

export default ServiceListCustomer;