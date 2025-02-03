import React, { useState } from 'react';
import { Card, Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';

function AdminRegister() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        adminCode: '' // Special code for admin registration
    });
    const [error, setError] = useState('');

    // Mock admin registration code - In production, this should be handled securely
    const ADMIN_REGISTRATION_CODE = 'HARDWARE123';

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (Object.values(formData).some(field => !field)) {
        setError('Please fill in all fields');
        return;
        }

        if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
        }

        if (formData.adminCode !== ADMIN_REGISTRATION_CODE) {
        setError('Invalid admin registration code');
        return;
        }

        // In production:
        // 1. Send registration data to backend
        // 2. Handle response
        // 3. Redirect on success
        navigate('/admin/login');
    };

    return (
        <div className="min-vh-100 d-flex align-items-center" 
            style={{ 
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
            }}>
        <Container>
            <Row className="justify-content-center">
            <Col md={8} lg={6}>
                <Card className="shadow-lg border-0">
                <Card.Body className="p-5">
                    <div className="text-center mb-4">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                        style={{ width: '64px', height: '64px' }}>
                        <FaUserShield size={24} />
                    </div>
                    <h2 className="mt-3 mb-1 font-weight-bold">Admin Registration</h2>
                    <p className="text-muted">Create your admin account</p>
                    </div>

                    {error && (
                    <Alert variant="danger" className="mb-4">
                        {error}
                    </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-4">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            required
                            />
                        </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group className="mb-4">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            required
                            />
                        </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        />
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="Create password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                            />
                        </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group className="mb-4">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                            />
                        </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-4">
                        <Form.Label>Admin Registration Code</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter admin code"
                        value={formData.adminCode}
                        onChange={(e) => setFormData({ ...formData, adminCode: e.target.value })}
                        required
                        />
                        <Form.Text className="text-muted">
                        This code is required for admin registration
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 py-2 mb-3">
                        Register
                    </Button>

                    <div className="text-center">
                        <small className="text-muted">
                        Already have an account?{' '}
                        <a href="/admin/login" className="text-primary text-decoration-none">
                            Sign in
                        </a>
                        </small>
                    </div>
                    </Form>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </div>
    );
}

export default AdminRegister;