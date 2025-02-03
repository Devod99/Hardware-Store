import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Professional Drill Set',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Tool Box Set',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Power Saw',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Safety Equipment Set',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1578167635648-df37ff7b0228?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

function Products() {
  const handleAddToCart = (product) => {
    // This will be implemented with your cart context/state management
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="product-card h-100">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;