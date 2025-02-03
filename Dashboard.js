import React from 'react';
import { Row, Col, Card, Table, Button, Badge } from 'react-bootstrap';
import { FaBox, FaShoppingCart, FaUsers, FaChartLine, FaEdit, FaTrash } from 'react-icons/fa';

function AdminDashboard() {
  // Mock data
    const recentOrders = [
        { id: '#12345', customer: 'John Doe', total: 299.99, status: 'Pending' },
        { id: '#12346', customer: 'Jane Smith', total: 199.50, status: 'Shipped' },
        { id: '#12347', customer: 'Mike Johnson', total: 599.99, status: 'Delivered' },
    ];

    const topProducts = [
        { name: 'Professional Drill Set', sales: 45, stock: 32 },
        { name: 'Power Saw', sales: 38, stock: 15 },
        { name: 'Tool Box Set', sales: 35, stock: 24 },
    ];

    return (
        <>
        <Row className="mb-4">
            <Col md={3}>
            <Card className="text-white bg-primary">
                <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <h6 className="mb-0">Total Sales</h6>
                    <h3 className="mb-0">$24,500</h3>
                    </div>
                    <FaChartLine size={24} />
                </div>
                </Card.Body>
            </Card>
            </Col>
            <Col md={3}>
            <Card className="text-white bg-success">
                <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <h6 className="mb-0">Orders</h6>
                    <h3 className="mb-0">150</h3>
                    </div>
                    <FaShoppingCart size={24} />
                </div>
                </Card.Body>
            </Card>
            </Col>
            <Col md={3}>
            <Card className="text-white bg-info">
                <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <h6 className="mb-0">Products</h6>
                    <h3 className="mb-0">85</h3>
                    </div>
                    <FaBox size={24} />
                </div>
                </Card.Body>
            </Card>
            </Col>
            <Col md={3}>
            <Card className="text-white bg-warning">
                <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <h6 className="mb-0">Customers</h6>
                    <h3 className="mb-0">1,240</h3>
                    </div>
                    <FaUsers size={24} />
                </div>
                </Card.Body>
            </Card>
            </Col>
        </Row>

        <Row>
            <Col md={8}>
            <Card className="mb-4">
                <Card.Header className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Recent Orders</h5>
                <Button variant="outline-primary" size="sm">View All</Button>
                </Card.Header>
                <Card.Body>
                <Table responsive hover>
                    <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recentOrders.map(order => (
                        <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>${order.total}</td>
                        <td>
                            <Badge bg={
                            order.status === 'Delivered' ? 'success' :
                            order.status === 'Shipped' ? 'info' : 'warning'
                            }>
                            {order.status}
                            </Badge>
                        </td>
                        <td>
                            <Button variant="link" size="sm" className="p-0 me-2">
                            <FaEdit />
                            </Button>
                            <Button variant="link" size="sm" className="p-0 text-danger">
                            <FaTrash />
                            </Button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card>
                <Card.Header>
                <h5 className="mb-0">Top Products</h5>
                </Card.Header>
                <Card.Body>
                <Table hover>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Sales</th>
                        <th>Stock</th>
                    </tr>
                    </thead>
                    <tbody>
                    {topProducts.map((product, index) => (
                        <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.sales}</td>
                        <td>
                            <Badge bg={product.stock > 20 ? 'success' : 'warning'}>
                            {product.stock}
                            </Badge>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </>
    );
}

export default AdminDashboard;