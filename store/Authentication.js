import { defineStore } from 'pinia';
import { useAuthService } from '~/composables/authApiService';
export const useAuthentication = defineStore('user', {
  state: () => ({
    user: '',
    access_token: '',
  }),
 
  actions: {
    async loginUser(form) {
      const AuthService = useAuthService();
      const data = await AuthService.login(form);
      console.log("login data: ", data)
      if (data) {
        try {
          this.access_token = data.access_token;
          this.user = data.user;
          console.log('successfully assigned token and user email')
        } catch (error) {
          console.log(error);
        }
        return data;
      }
    },
  },
});
