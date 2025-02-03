import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
return (
        <Container className="py-5">
        <Row>
            <Col md={6}>
            <h2>About Hardware Pro</h2>
            <p>
                Since 1990, Hardware Pro has been your trusted source for quality tools
                and hardware supplies. We pride ourselves on providing professional-grade
                equipment and expert advice to both contractors and DIY enthusiasts.
            </p>
            <p>
                Our commitment to excellence and customer satisfaction has made us a
                leader in the hardware industry. We carefully select each product in our
                inventory to ensure it meets our high standards of quality and durability.
            </p>
            </Col>
            <Col md={6}>
            <img
                src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Our Store"
                className="img-fluid rounded"
            />
            </Col>
        </Row>
        </Container>
    );
}

export default About;