import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './OrderList.css'

const OrderList = ({ order }) => {
    const [show, setShow] = React.useState(false);
    const [state, setState] = React.useState(null);
    const history = useHistory();

    const handleClose = () => setShow(false);


    const handleChange = (e) => {
        setState(e.target.value)
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
                <Form.Control id="dropdown" style={{ color: `${(state || order.state) === 'Pending' ? 'rgb(255,0,0' : (state || order.state) === 'On Going' ? 'rgb(255,128,0' : 'rgb(0,153,0'}`, backgroundColor: 'transparent' }} onChange={handleChange} as="select" name="state" value={state || order.state}>
                    <option value="Pending">Pending</option>
                    <option value="On Going">On Going</option>
                    <option value="Done">Done</option>
                </Form.Control>
            </td>
        </tr>
    );
};

export default OrderList;