import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import './App.css';

import Home from './components/Home.js';
import Products from './components/Products.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Chatbot from './components/Chatbot.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import AdminLayout from './layouts/AdminLayouts.js';
import AdminDashboard from './pages/admin/Dashboard.js';
import AdminProducts from './pages/admin/Products.js';
import AdminOrders from './pages/admin/Orders.js';
import AdminCustomers from './pages/admin/Customers.js';
import AdminLogin from './pages/admin/auth/AdminLogin.js';
import AdminRegister from './pages/admin/auth/AdminRegistration.js';
import AdminProtectedRoute from './components/AdminProtectedRoute.js';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin" element={
          <AdminProtectedRoute>
            <Navigate to="/admin/login" replace />
          </AdminProtectedRoute>
        } />
        <Route path="/admin/dashboard" element={
          <AdminProtectedRoute>
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </AdminProtectedRoute>
        } />
        <Route path="/admin/products" element={
          <AdminProtectedRoute>
            <AdminLayout>
              <AdminProducts />
            </AdminLayout>
          </AdminProtectedRoute>
        } />
        <Route path="/admin/orders" element={
          <AdminProtectedRoute>
            <AdminLayout>
              <AdminOrders />
            </AdminLayout>
          </AdminProtectedRoute>
        } />
        <Route path="/admin/customers" element={
          <AdminProtectedRoute>
            <AdminLayout>
              <AdminCustomers />
            </AdminLayout>
          </AdminProtectedRoute>
        } />

        {/* User Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              <Chatbot />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;