import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
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
            {
                userOrder.length > 0 ?
                    <div className="service-area">
                        <Row className="m-0">
                            {
                                userOrder.map(order => <UsersOrder order={order} key={order._id} />)
                            }
                        </Row>
                    </div>
                    :
                    <div style={{ minHeight: '50vh' }} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Spinner style={{ width: '70px', height: '70px' }} animation="border" variant="success" />
                        </div>
                    </div>
            }
        </>
    );
};

export default ServiceListCustomer;