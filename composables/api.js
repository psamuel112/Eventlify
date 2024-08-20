import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.eventify.ng',
});
export default api