import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.5:5000',
});

export default api;
//10.0.2.2:PORTA => android
