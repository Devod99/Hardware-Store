import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import './Home.css';

import furnitureproimg from '../assets-homeimg/furnitureproimg.jpeg';
import homeImprovementImg from '../assets-homeimg/homeImprovementImg.jpeg';
import appliancesimg from '../assets-homeimg/appliancesimg.jpeg';
import buildingmaterialsimg from '../assets-homeimg/buildingmaterialsimg.jpeg';
import officeHardwareImg from '../assets-homeimg/officeHardwareImg.jpeg';


const categories = [
    { name: "Furniture Products", img: furnitureproimg },
    { name: "Home Improvement Tools", img: homeImprovementImg },
    { name: "Appliances", img: appliancesimg },
    { name: "Building Materials", img: buildingmaterialsimg },
    { name: "Office Hardware", img: officeHardwareImg },
    ];

    function Home() {
    return (
        <>
        {/* Hero Section */}
        <div className="hero-section d-flex align-items-center" style={{
            backgroundImage:
            'url("https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundBlendMode: "overlay",
            minHeight: "100vh",
            color: "#ffffff",
        }}>
            <Container>
            <Row>
                <Col md={6}>
                <div
                    style={{
                    background: "rgba(0, 0, 0, 0.7)",
                    padding: "2.5rem",
                    borderRadius: "10px",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <h1
                    style={{
                        color: "#f8d568",
                        fontSize: "3rem",
                        fontWeight: "700",
                        marginBottom: "1rem",
                        textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
                    }}
                    >
                    Welcome to ToolSphere hardware store
                    </h1>
                    <p
                    style={{
                        color: "#e4e4e4",
                        fontSize: "1.2rem",
                        marginBottom: "1.5rem",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                    >
                    Your one-stop shop for quality tools and hardware supplies.
                    </p>
                    <Button
                    variant="warning"
                    size="lg"
                    href="/products"
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
                    Shop Now
                    </Button>
                </div>
                </Col>
            </Row>
            </Container>
        </div>

        {/* Featured Categories */}
        <Container className="py-5">
            <h2 className="text-center mb-4">Featured Categories</h2>
            <Row>
            {categories.map((category, index) => (
                <Col md={3} key={index} className="mb-4">
                <Card className="h-100 category-card">
                    <Card.Img variant="top" src={category.img} alt={category.name} />
                    <Card.Body>
                    <Card.Title>{category.name}</Card.Title>
                    <Button variant="warning">View Products</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>

         {/* Why Choose Us Section */}
        <div className="bg-light py-5">
            <Container>
            <Row className="align-items-center">
                <Col md={6}>
                <h2 style={{ color: "#333" }}>Why Choose Us?</h2>
                <ul className="list-unstyled" style={{ fontSize: "1.2rem" }}>
                    <li>✓ Quality Products</li>
                    <li>✓ Expert Advice</li>
                    <li>✓ Competitive Prices</li>
                    <li>✓ Fast Shipping</li>
                </ul>
                </Col>
                <Col md={6}>
                <img
                    src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    alt="Workshop"
                    className="img-fluid rounded"
                    style={{
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                    }}
                />
                </Col>
            </Row>
            </Container>
        </div>

        {/* Testimonials Section */}
        <div
            style={{
            background: "#333",
            color: "#f8f8f8",
            padding: "4rem 0",
            }}
        >
            <Container>
            <h2 className="text-center mb-4" style={{ color: "#f8d568" }}>
                What Our Customers Say
            </h2>
            <Row>
                {[
                {
                    name: "John Doe",
                    feedback:
                    "ToolSphere has an amazing selection of tools and supplies. Highly recommend!",
                },
                {
                    name: "Jane Smith",
                    feedback:
                    "The customer service is fantastic. Always there to help with expert advice.",
                },
                {
                    name: "Mark Wilson",
                    feedback:
                    "Fast shipping and great quality products. My go-to shop for all hardware needs.",
                },
                ].map((testimonial, index) => (
                <Col md={4} key={index} className="mb-4">
                    <Card
                    style={{
                        backgroundColor: "#444",
                        border: "none",
                        color: "#f8f8f8",
                        padding: "1rem",
                        borderRadius: "10px",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                    >
                    <Card.Body>
                        <Card.Text>{testimonial.feedback}</Card.Text>
                        <Card.Subtitle className="text-end">
                        - {testimonial.name}
                        </Card.Subtitle>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </Container>
        </div>
        </>
    );
}

export default Home;
