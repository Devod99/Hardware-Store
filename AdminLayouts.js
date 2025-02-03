import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { 
    FaBox, 
    FaShoppingCart, 
    FaUsers, 
    FaChartLine, 
    FaBell,
    FaHome
} from 'react-icons/fa';
import '../components/Admin.css';

function AdminLayout({ children }) {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="admin-dashboard">
        <div className="admin-header bg-dark text-white py-3 mb-4">
            <Container fluid>
            <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Admin Dashboard</h4>
                <div className="d-flex align-items-center gap-3">
                <Button 
                    variant="outline-light" 
                    size="sm"
                    onClick={() => navigate('/')}
                >
                    <FaHome className="me-2" />
                    View Site
                </Button>
                <Button variant="link" className="text-white p-0 position-relative">
                    <FaBell size={20} />
                    <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                    3
                    </Badge>
                </Button>
                <div className="vr text-white-50"></div>
                <div className="d-flex align-items-center">
                    <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    alt="Admin"
                    className="rounded-circle"
                    style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                    />
                    <span className="ms-2">Admin User</span>
                </div>
                </div>
            </div>
            </Container>
        </div>

        <Container fluid>
            <Row>
            <Col md={2}>
                <Nav className="flex-column admin-sidebar">
                <Nav.Link 
                    as={Link}
                    to="/admin"
                    className={`mb-2 ${activeTab === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dashboard')}
                >
                    <FaChartLine className="me-2" /> Dashboard
                </Nav.Link>
                <Nav.Link 
                    as={Link}
                    to="/admin/products"
                    className={`mb-2 ${activeTab === 'products' ? 'active' : ''}`}
                    onClick={() => setActiveTab('products')}
                >
                    <FaBox className="me-2" /> Products
                </Nav.Link>
                <Nav.Link 
                    as={Link}
                    to="/admin/orders"
                    className={`mb-2 ${activeTab === 'orders' ? 'active' : ''}`}
                    onClick={() => setActiveTab('orders')}
                >
                    <FaShoppingCart className="me-2" /> Orders
                </Nav.Link>
                <Nav.Link 
                    as={Link}
                    to="/admin/customers"
                    className={`mb-2 ${activeTab === 'customers' ? 'active' : ''}`}
                    onClick={() => setActiveTab('customers')}
                >
                    <FaUsers className="me-2" /> Customers
                </Nav.Link>
                </Nav>
            </Col>
            <Col md={10}>
                {children}
            </Col>
            </Row>
        </Container>
        </div>
    );
}

export default AdminLayout;