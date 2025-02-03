import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
return (
        <Container className="py-5">
        <Row>
            <Col md={6}>
            <h2>Contact Us</h2>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                Send Message
                </Button>
            </Form>
            </Col>
            <Col md={6}>
            <h3>Our Location</h3>
            <p>123 Hardware Street<br />Tool City, TC 12345</p>
            
            <h3>Contact Information</h3>
            <p>Phone: (555) 123-4567<br />
            Email: info@hardwarepro.com</p>
            
            <h3>Business Hours</h3>
            <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 9:00 AM - 5:00 PM<br />
            Sunday: Closed</p>
            </Col>
        </Row>
        </Container>
    );
}

export default Contact;