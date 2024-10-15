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
    },

    async resetPassword(form, config) {
      try {
        const { data } = await api.post(ENDPOINTS.RESET_PASSWORD, 
          config,
          form
        );
        return data;
      } catch (err) {
        resolveRequestError(err);
      }
    },
    async forgotPassword(form, config) {
      try {
        const { data } = await api.post(ENDPOINTS.FORGOT_PASSWORD, 
          config,
          form
        );
        return data;
      } catch (err) {
        resolveRequestError(err);
      }
    },
  }


}
