// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Auth.css';

// function Register() {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
// });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle registration logic here
//         console.log('Registration attempt:', formData);
// };

// return (
//         <div className="auth-wrapper">
//         <Container>
//             <Row className="justify-content-center">
//             <Col md={6} lg={5}>
//                 <Card className="auth-card">
//                 <Card.Body className="p-5">
//                     <h2 className="text-center mb-4">Create Account</h2>
//                     <Form onSubmit={handleSubmit}>
//                     <Row>
//                         <Col md={6}>
//                         <Form.Group className="mb-4">
//                             <Form.Label>First Name</Form.Label>
//                             <Form.Control
//                             type="text"
//                             placeholder="Enter first name"
//                             value={formData.firstName}
//                             onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6}>
//                         <Form.Group className="mb-4">
//                             <Form.Label>Last Name</Form.Label>
//                             <Form.Control
//                             type="text"
//                             placeholder="Enter last name"
//                             value={formData.lastName}
//                             onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                     </Row>

//                     <Form.Group className="mb-4">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control
//                         type="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         required
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-4">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                         type="password"
//                         placeholder="Create a password"
//                         value={formData.password}
//                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                         required
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-4">
//                         <Form.Label>Confirm Password</Form.Label>
//                         <Form.Control
//                         type="password"
//                         placeholder="Confirm your password"
//                         value={formData.confirmPassword}
//                         onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                         required
//                         />
//                     </Form.Group>

//                     <Button variant="primary" type="submit" className="w-100 mb-4">
//                         Create Account
//                     </Button>

//                     <div className="text-center">
//                         <p className="mb-0">
//                         Already have an account?{' '}
//                         <Link to="/login" className="text-primary text-decoration-none">
//                             Sign in here
//                         </Link>
//                         </p>
//                     </div>
//                     </Form>
//                 </Card.Body>
//                 </Card>
//             </Col>
//             </Row>
//         </Container>
//     </div>
//     );
// }

// export default Register;


import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Auth.css';

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Registration attempt:', formData);
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
                                    Create Account
                                </h2>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-4">
                                                <Form.Label style={{ color: "#f8d568" }}>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter first name"
                                                    value={formData.firstName}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, firstName: e.target.value })
                                                    }
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-4">
                                                <Form.Label style={{ color: "#f8d568" }}>Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter last name"
                                                    value={formData.lastName}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, lastName: e.target.value })
                                                    }
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-4">
                                        <Form.Label style={{ color: "#f8d568" }}>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label style={{ color: "#f8d568" }}>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Create a password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label style={{ color: "#f8d568" }}>Confirm Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm your password"
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                            required
                                        />
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
                                        Create Account
                                    </Button>

                                    <div className="text-center" style={{ color: "#f8d568" }}>
                                        <p className="mb-0">
                                            Already have an account?{' '}
                                            <Link
                                                to="/login"
                                                className="text-primary text-decoration-none"
                                                style={{
                                                    color: "#f8d568",
                                                    fontWeight: "bold",
                                                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                                                    marginLeft: "5px"
                                                }}
                                            >
                                                Sign in here
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

export default Register;
