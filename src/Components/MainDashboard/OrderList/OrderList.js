import React from 'react';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

const OrderList = ({ order }) => {
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.service}</td>
            <td><small>{order.description}</small></td>
            <td><Dropdown as={ButtonGroup}>
                <Button className="brand-btn">Action</Button>
                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />
                <Dropdown.Menu>
                    <Dropdown.Item><Button variant="success">Done</Button></Dropdown.Item>
                    <Dropdown.Item><Button variant="warning">Ongoing</Button></Dropdown.Item>
                    <Dropdown.Item><Button variant="danger">Pending</Button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown></td>
        </tr>
    );
};

export default OrderList;