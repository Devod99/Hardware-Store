import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
return (
        <footer className="bg-dark text-light py-4">
        <Container>
            <Row>
            <Col md={4}>
                <h5>ToolSphere</h5>
                <p>Your trusted source for quality tools and hardware supplies since 2016.</p>
            </Col>
            <Col md={4}>
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                <li><a href="/products" className="text-light">Products</a></li>
                <li><a href="/about" className="text-light">About Us</a></li>
                <li><a href="/contact" className="text-light">Contact</a></li>
                </ul>
            </Col>
            <Col md={4}>
                <h5>Contact Info</h5>
                <p>123 Hardware Street<br />
                Tool City, TC 12345<br />
                Phone: (555) 123-4567<br />
                Email: info@hardwarepro.com</p>
            </Col>
            </Row>
            <Row>
            <Col className="text-center mt-3">
                <p className="mb-0">&copy; {new Date().getFullYear()} ToolSphere. All rights reserved.</p>
            </Col>
            </Row>
        </Container>
        </footer>
    );
}

export default Footer;