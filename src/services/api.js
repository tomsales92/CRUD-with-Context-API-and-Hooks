import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44389/api',
});

export default api;
