import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData: {
    email: string;
    username: string;
    password: string;
  }) => {
    const response = await api.post('/auth/register', { user: userData });
    return response.data;
  },
  me: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export const expenses = {
  getAll: async () => {
    const response = await api.get('/expenses');
    return response.data;
  },
  create: async (expenseData: {
    amount: number;
    description: string;
    categoryId: string;
    date: string;
  }) => {
    const response = await api.post('/expenses', expenseData);
    return response.data;
  },
  update: async (
    id: string,
    expenseData: {
      amount?: number;
      description?: string;
      categoryId?: string;
      date?: string;
    }
  ) => {
    const response = await api.put(`/expenses/${id}`, expenseData);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/expenses/${id}`);
    return response.data;
  },
};

export const budget = {
  getCurrent: async () => {
    const response = await api.get('/budget/current');
    return response.data;
  },
  update: async (budgetData: {
    limits: { [categoryId: string]: number };
  }) => {
    const response = await api.put('/budget', budgetData);
    return response.data;
  },
};

export const categories = {
  getAll: async () => {
    const response = await api.get('/categories');
    return response.data;
  },
  create: async (categoryData: { name: string; description?: string }) => {
    const response = await api.post('/categories', categoryData);
    return response.data;
  },
};

export default api;
