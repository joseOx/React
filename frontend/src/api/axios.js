// src/api/axios.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

// Interceptor: Antes de que salga cada petición, le agregamos el Token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access'); // Obtenemos el token guardado
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
