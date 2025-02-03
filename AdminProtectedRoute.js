import React from 'react';
import { Navigate } from 'react-router-dom';

function AdminProtectedRoute({ children }) {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';

    if (!isAuthenticated) {
        // Redirect to login page if the user is not authenticated
        return <Navigate to="/admin/login" replace />;
    }

    return children;
}
export default AdminProtectedRoute;