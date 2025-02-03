import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

function CartModal({ show, onHide }) {
    const cartItems = []; // This will be managed by your cart context/state

    const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <Modal show={show} onHide={onHide} size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
            ) : (
            <ListGroup>
                {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                    <div>
                    <h6>{item.name}</h6>
                    <small>Quantity: {item.quantity}</small>
                    </div>
                    <div>
                    <span className="me-3">${(item.price * item.quantity).toFixed(2)}</span>
                    <Button variant="danger" size="sm">Remove</Button>
                    </div>
                </ListGroup.Item>
                ))}
            </ListGroup>
            )}
            {cartItems.length > 0 && (
            <div className="mt-3 text-end">
                <h5>Total: ${calculateTotal()}</h5>
            </div>
            )}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Close</Button>
            {cartItems.length > 0 && (
            <Button variant="primary">Checkout</Button>
            )}
        </Modal.Footer>
        </Modal>
    );
}

export default CartModal;