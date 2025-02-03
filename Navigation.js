import React, { useState } from 'react';
import { Navbar, Nav, Container, Badge, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import CartModal from './CartModal.js';

function Navigation() {
    const [showCart, setShowCart] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const cartItemCount = 0; // This will be managed by your cart context/state

    const handleOffcanvasClose = () => setShowOffcanvas(false);
    const handleOffcanvasShow = () => setShowOffcanvas(true);

    return (
        <>
        <Navbar bg="dark" variant="dark" expand={false} sticky="top" className="py-3">
            <Container>
            {/* Hamburger Menu Button */}
            <Button 
                variant="link" 
                className="text-light p-0 border-0 me-3"
                onClick={handleOffcanvasShow}
            >
                <FaBars size={24} />
            </Button>

            {/* Brand Logo */}
            <Navbar.Brand as={Link} to="/" className="me-auto">
                ToolSphere 
            </Navbar.Brand>

            {/* Right Side Icons */}
            <div className="d-flex align-items-center gap-3">
                <Nav.Link 
                as={Link} 
                to="/login" 
                className="text-light d-flex align-items-center"
                >
                <FaUser size={20} />
                </Nav.Link>
                <Nav.Link 
                onClick={() => setShowCart(true)} 
                className="text-light position-relative"
                >
                <FaShoppingCart size={20} />
                {cartItemCount > 0 && (
                    <Badge 
                    pill 
                    bg="danger" 
                    className="position-absolute top-0 start-100 translate-middle"
                    >
                    {cartItemCount}
                    </Badge>
                )}
                </Nav.Link>
            </div>

            {/* Offcanvas Menu */}
            <Offcanvas 
                show={showOffcanvas} 
                onHide={handleOffcanvasClose} 
                placement="start"
                className="bg-dark text-light"
            >
                <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title className="fs-4">Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="flex-column gap-2">
                    <Nav.Link 
                    as={Link} 
                    to="/" 
                    onClick={handleOffcanvasClose}
                    className="text-light py-2 px-3 rounded hover-effect"
                    >
                    Home
                    </Nav.Link>
                    <Nav.Link 
                    as={Link} 
                    to="/products" 
                    onClick={handleOffcanvasClose}
                    className="text-light py-2 px-3 rounded hover-effect"
                    >
                    Products
                    </Nav.Link>
                    <Nav.Link 
                    as={Link} 
                    to="/about" 
                    onClick={handleOffcanvasClose}
                    className="text-light py-2 px-3 rounded hover-effect"
                    >
                    About
                    </Nav.Link>
                    <Nav.Link 
                    as={Link} 
                    to="/contact" 
                    onClick={handleOffcanvasClose}
                    className="text-light py-2 px-3 rounded hover-effect"
                    >
                    Contact
                    </Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            </Container>
        </Navbar>

        {/* Cart Modal */}
        <CartModal show={showCart} onHide={() => setShowCart(false)} />
        </>
    );
}

export default Navigation;