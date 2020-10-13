import axios from 'axios';

const rootApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default rootApi;
