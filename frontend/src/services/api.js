import axios from 'axios';

const api = axios.create({
  baseURL: 'https://to-do-list-03jn.onrender.com'
});

export default api;
