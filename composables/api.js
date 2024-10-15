import axios from 'axios';
import { useAuthentication } from '@/store/Authentication';

const api = axios.create({
  baseURL: 'https://api.eventify.ng/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Use an interceptor to add the authorization token dynamically
api.interceptors.request.use(
  (config) => {
    const auth = useAuthentication(); // Make sure useAuthentication is called inside a function
    if (auth && auth.userTokens) {
      config.headers.Authorization = `Bearer ${auth.userTokens}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
