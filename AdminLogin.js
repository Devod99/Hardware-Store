import React, { useState } from 'react';
import { Card, Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { authService } from '../../../services/authServices';

function AdminLogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
        await authService.login(formData);
        navigate('/admin/dashboard');
        } catch (err) {
        setError(err.message || 'Invalid credentials');
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center" 
            style={{ 
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
            }}>
        <Container>
            <Row className="justify-content-center">
            <Col md={6} lg={5}>
                <Card className="shadow-lg border-0">
                <Card.Body className="p-5">
                    <div className="text-center mb-4">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                        style={{ width: '64px', height: '64px' }}>
                        <FaLock size={24} />
                    </div>
                    <h2 className="mt-3 mb-1 font-weight-bold">Admin Login</h2>
                    <p className="text-muted">Access your admin dashboard</p>
                    </div>

                    {error && (
                    <Alert variant="danger" className="mb-4">
                        {error}
                    </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        disabled={isLoading}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        disabled={isLoading}
                        />
                    </Form.Group>

                    <Button 
                        variant="primary" 
                        type="submit" 
                        className="w-100 py-2 mb-3"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>

                    <div className="text-center">
                        <small className="text-muted">
                        Don't have admin access?{' '}
                        <a href="/admin/register" className="text-primary text-decoration-none">
                            Request access
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

export default AdminLogin;