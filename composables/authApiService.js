import api from './api'
import * as ENDPOINTS from '../services/endpoints';

export const useAuthService = () => {

  return {
    async login({ email, password }) {
      try {
        const { data } = await api.post(ENDPOINTS.LOGIN, {
          email,
          password,
        });
        return data;
      } catch (err) {
        console.error('Login failed:');
      }
    },
    async register({name, email, password }) {
      try {
        const { data } = await api.post(ENDPOINTS.REGISTER_USER, {
          name,
          email,
          password,
        });
        return data;
      } catch (err) {
        console.error('registration failed:');
      }
    }
  }

}
