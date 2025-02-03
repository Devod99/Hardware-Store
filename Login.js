import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Auth.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', formData);
    };

    return (
        <div
            className="auth-wrapper"
            style={{
                backgroundImage:
                    'url("https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundBlendMode: "overlay",
                minHeight: "100vh",
                color: "#ffffff",
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} lg={5}>
                        <Card
                            className="auth-card"
                            style={{
                                background: "rgba(0, 0, 0, 0.7)",
                                padding: "2.5rem",
                                borderRadius: "10px",
                                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <Card.Body className="p-5">
                                <h2
                                    className="text-center mb-4"
                                    style={{
                                        color: "#f8d568",
                                        fontSize: "3rem",
                                        fontWeight: "700",
                                        textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
                                    }}
                                >
                                    Welcome Back!
                                </h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-4">
                                        <Form.Label style={{ color: "#f8d568" }}>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label style={{ color: "#f8d568" }}>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={(e) =>
                                                setFormData({ ...formData, password: e.target.value })
                                            }
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>

                                    <Button
                                        variant="warning"
                                        type="submit"
                                        className="w-100 mb-4"
                                        style={{
                                            fontWeight: "600",
                                            padding: "0.8rem 2rem",
                                            color: "#333",
                                            backgroundColor: "#f8d568",
                                            border: "none",
                                            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)",
                                            transition: "transform 0.3s ease, background-color 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.target.style.backgroundColor = "#f4c04f")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.target.style.backgroundColor = "#f8d568")
                                        }
                                    >
                                        Sign In
                                    </Button>

                                    <div className="text-center" style={{ color: "#f8d568" }}>
                                        <p className="mb-0" >
                                            Don't have an account?{' '}
                                            <Link
                                                to="/register"
                                                className="text-primary text-decoration-none"
                                                style={{
                                                    color: "#f8d568",
                                                    fontWeight: "bold",
                                                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                                                    marginLeft: "5px"
                                                }}
                                            >
                                                Register here
                                            </Link>
                                        </p>
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

export default Login;









// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { authService } from '../services/authServices';
// import './Auth.css';

// function Login() {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setIsLoading(true);

//         try {
//         const response = await authService.login(formData);
//         if (response.role === 'Admin') {
//             navigate('/admin/dashboard');
//         } else {
//             navigate('/');
//         }
//         } catch (err) {
//         setError(err.message || 'Invalid email or password. Please try again.');
//         } finally {
//         setIsLoading(false);
//         }
//     };

//     return (
//         <div className="auth-wrapper">
//         <Container>
//             <Row className="justify-content-center">
//             <Col md={6} lg={5}>
//                 <Card className="auth-card">
//                 <Card.Body className="p-5">
//                     <h2 className="text-center mb-4">Welcome Back!</h2>
//                     {error && (
//                     <Alert variant="danger" className="mb-4">
//                         {error}
//                     </Alert>
//                     )}
//                     <Form onSubmit={handleSubmit}>
//                     <Form.Group className="mb-4">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control
//                         type="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         required
//                         disabled={isLoading}
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-4">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                         type="password"
//                         placeholder="Enter your password"
//                         value={formData.password}
//                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                         required
//                         disabled={isLoading}
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-4">
//                         <Form.Check
//                         type="checkbox"
//                         label="Remember me"
//                         />
//                     </Form.Group>

//                     <Button 
//                         variant="primary" 
//                         type="submit" 
//                         className="w-100 mb-4"
//                         disabled={isLoading}
//                     >
//                         {isLoading ? 'Signing in...' : 'Sign In'}
//                     </Button>

//                     <div className="text-center">
//                         <p className="mb-0">
//                         Don't have an account?{' '}
//                         <Link to="/register" className="text-primary text-decoration-none">
//                             Register here
//                         </Link>
//                         </p>
//                     </div>
//                     </Form>
//                 </Card.Body>
//                 </Card>
//             </Col>
//             </Row>
//         </Container>
//         </div>
//     );
// }

// export default Login;