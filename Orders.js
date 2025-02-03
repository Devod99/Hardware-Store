import React from 'react';
import { Card, Table, Form, Button, Badge } from 'react-bootstrap';
import { FaEdit, FaTrash, FaDownload } from 'react-icons/fa';

function AdminOrders() {
    const orders = [
        {
        id: '12345',
        customer: 'John Doe',
        products: 'Professional Drill Set, Tool Box',
        total: 299.99,
        date: '2024-02-28',
        status: 'Pending'
        },
        {
        id: '12346',
        customer: 'Jane Smith',
        products: 'Power Saw',
        total: 199.50,
        date: '2024-02-27',
        status: 'Shipped'
        },
        {
        id: '12347',
        customer: 'Mike Johnson',
        products: 'Safety Equipment Set',
        total: 599.99,
        date: '2024-02-26',
        status: 'Delivered'
        }
    ];

    return (
        <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Orders Management</h5>
            <div className="d-flex gap-2">
            <Form.Select size="sm" style={{ width: '150px' }}>
                <option>All Status</option>
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
            </Form.Select>
            <Button variant="outline-primary" size="sm">
                <FaDownload className="me-2" />
                Export
            </Button>
            </div>
        </Card.Header>
        <Card.Body>
            <Table responsive hover>
            <thead>
                <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Products</th>
                <th>Total</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.products}</td>
                    <td>${order.total}</td>
                    <td>{order.date}</td>
                    <td>
                    <Badge bg={
                        order.status === 'Delivered' ? 'success' :
                        order.status === 'Shipped' ? 'info' : 'warning'
                    }>
                        {order.status}
                    </Badge>
                    </td>
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
    );
}

export default AdminOrders;