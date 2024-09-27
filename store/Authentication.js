import { defineStore } from 'pinia';
import { useAuthService } from '~/composables/authApiService';
export const useAuthentication = defineStore('user', {
  state: () => ({
   userTokens: {},
   isLoggedIn: false,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  actions: {
    async loginUser(form) {
      const AuthService = useAuthService();
      const data = await AuthService.login(form);
      console.log("login data: ", data)
      if (data) {
        try {
          this.userTokens = data.data.access_token;  
          this.isLoggedIn = true;
          console.log('successfully assigned token and user email', data)
        } catch (error) {
          console.log(error);
        }
        return data;
      }
    },
  },
});
