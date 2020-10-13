import api from '..';

export const login = (data) => api.post('/auth/', data);
