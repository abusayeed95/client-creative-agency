import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './OrderList.css'

const OrderList = ({ order }) => {
    const [show, setShow] = React.useState(false);
    const history = useHistory();

    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        fetch(`https://pacific-depths-60044.herokuapp.com/order-state/${order._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: e.target.value })
        })
            .then(res => {
                if (res.status === 200) {
                    setShow(true);
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h2 className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> State Updated Successfully</h2>
                </Modal.Body>
                <Modal.Footer>
                    <button className="brand-btn" onClick={handleClose}>
                        Close
                    </button>
                    <button className="green-btn" onClick={() => history.push('/home')}>
                        Home
                    </button>
                </Modal.Footer>
            </Modal>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.service}</td>
            <td><small>{order.orderDescription}</small></td>
            <td>
                <Form.Control id="dropdown" className={order.state === 'Done' && 'text-success'} style={{ color: `${order.state === 'Pending' ? 'red' : 'yellow'}` }} onChange={handleChange} as="select" name="state" value={order.state}>
                    <option value="Pending">Pending</option>
                    <option value="On Going">On Going</option>
                    <option value="Done">Done</option>
                </Form.Control>
            </td>
        </tr>
    );
};

export default OrderList;