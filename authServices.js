import api from './api';

export const authService = {
    login: async (credentials) => {
        try {
        const response = await api.post('/auth/login', credentials);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify({
            email: response.data.email,
            role: response.data.role
            }));
        }
        return response.data;
        } catch (error) {
        throw error.response?.data || { message: 'An error occurred during login' };
        }
    },

    register: async (userData) => {
        try {
        const response = await api.post('/auth/register', userData);
        return response.data;
        } catch (error) {
        throw error.response?.data || { message: 'An error occurred during registration' };
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    isAdmin: () => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        return user.role === 'Admin';
    }
};