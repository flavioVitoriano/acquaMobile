import api from '..';

const login = (data) => api.post('/auth/', data);

export default login;
