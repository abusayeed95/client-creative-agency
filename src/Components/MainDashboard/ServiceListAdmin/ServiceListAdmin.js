import React from 'react';
import { Table } from 'react-bootstrap';
import OrderList from '../OrderList/OrderList';
import './ServiceListAdmin.css'

const ServiceListAdmin = () => {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3100/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <>
            <h2 className="py-3  bg-white">Order List</h2>
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
        </>
    );
};

export default ServiceListAdmin;