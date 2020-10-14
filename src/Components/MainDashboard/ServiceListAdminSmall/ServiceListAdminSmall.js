import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import OrderListSmall from '../OrderListSmall/OrderListSmall';
import './ServiceListAdminSmall.css';

const ServiceListAdminSmall = () => {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        fetch('https://pacific-depths-60044.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <>
            <h2 className="py-3  bg-white">Order List</h2>
            {
                orders.length > 0 ?
                    <div className="small-container">
                        <Row className="m-0">
                            {
                                orders.map(order => <OrderListSmall order={order} key={order._id} />)
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

export default ServiceListAdminSmall;