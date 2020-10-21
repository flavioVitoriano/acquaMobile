import axios from 'axios';

const api = axios.create({
  baseURL: 'http://acqua-app-api.herokuapp.com',
});

export default api;
