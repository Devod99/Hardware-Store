import React, { useState } from 'react';
import { Card, Table, Form, Button, Badge, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

function AdminProducts() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [products] = useState([
        {
        id: 'P001',
        name: 'Professional Drill Set',
        category: 'Power Tools',
        price: 199.99,
        stock: 32
        },
        {
        id: 'P002',
        name: 'Power Saw',
        category: 'Power Tools',
        price: 299.99,
        stock: 15
        },
        {
        id: 'P003',
        name: 'Tool Box Set',
        category: 'Hand Tools',
        price: 149.99,
        stock: 24
        }
    ]);

    return (
        <>
        <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Products Management</h5>
            <Button 
                variant="primary" 
                size="sm"
                onClick={() => setShowAddModal(true)}
            >
                <FaPlus className="me-2" />
                Add New Product
            </Button>
            </Card.Header>
            <Card.Body>
            <div className="mb-4">
                <Form.Control
                type="search"
                placeholder="Search products..."
                className="w-100"
                />
            </div>
            <Table responsive hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                    <td>#{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>${product.price}</td>
                    <td>
                        <Badge bg={product.stock > 20 ? 'success' : 'warning'}>
                        {product.stock}
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

        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select>
                    <option>Power Tools</option>
                    <option>Hand Tools</option>
                    <option>Safety Equipment</option>
                    <option>Hardware</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" step="0.01" />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" placeholder="Enter stock quantity" />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                Cancel
            </Button>
            <Button variant="primary">Add Product</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default AdminProducts;