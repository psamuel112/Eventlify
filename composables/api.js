import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tests.sosta.com.ng',
});

export default api