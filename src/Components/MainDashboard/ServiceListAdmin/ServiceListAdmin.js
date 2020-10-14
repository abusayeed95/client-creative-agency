import React from 'react';
import { Spinner, Table } from 'react-bootstrap';
import OrderList from '../OrderList/OrderList';
import './ServiceListAdmin.css'

const ServiceListAdmin = () => {
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
                    <div className="service-area">
                        <Table className="bg-white table rounded" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Address</th>
                                    <th>Service</th>
                                    <th>Project Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <OrderList order={order} key={order._id} />)
                                }
                            </tbody>
                        </Table>
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

export default ServiceListAdmin;