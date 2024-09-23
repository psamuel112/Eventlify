import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.eventify.ng/api/v1',
});
export default api