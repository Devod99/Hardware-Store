import React, { useState } from 'react';
import { Card, Table, Form, Button, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

function AdminCustomers() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [customers] = useState([
        {
        id: 'C001',
        name: 'John Doe',
        email: 'john@example.com',
        orders: 5,
        totalSpent: 1299.99
        },
        {
        id: 'C002',
        name: 'Jane Smith',
        email: 'jane@example.com',
        orders: 3,
        totalSpent: 799.50
        },
        {
        id: 'C003',
        name: 'Mike Johnson',
        email: 'mike@example.com',
        orders: 8,
        totalSpent: 2499.99
        }
    ]);

    return (
        <>
        <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Customer Management</h5>
            <Button 
                variant="primary" 
                size="sm"
                onClick={() => setShowAddModal(true)}
            >
                <FaPlus className="me-2" />
                Add Customer
            </Button>
            </Card.Header>
            <Card.Body>
            <div className="mb-4">
                <Form.Control
                type="search"
                placeholder="Search customers..."
                className="w-100"
                />
            </div>
            <Table responsive hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Orders</th>
                    <th>Total Spent</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {customers.map(customer => (
                    <tr key={customer.id}>
                    <td>#{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.orders}</td>
                    <td>${customer.totalSpent.toFixed(2)}</td>
                    <td>
                        <Button variant="link" size="sm" className="p-0 me-2">
                        <FaEdit />
                        </Button>
                        <Button variant="link" size="sm" className="p-0 text-danger">
                        <FaTrash />
                        </Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Card.Body>
        </Card>

        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Add New Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter customer name" />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email address" />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter address" />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                Cancel
            </Button>
            <Button variant="primary">Add Customer</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default AdminCustomers;