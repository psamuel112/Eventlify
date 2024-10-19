import { defineStore } from 'pinia';
import { useAuthService } from '~/composables/authApiService';
export const useAuthentication = defineStore('user', {
  state: () => ({
    user: null,
   userTokens: {},
   isLoggedIn: false,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    userName: ((state) => (state.user ? state.user.name : ''))
  },
  actions: {
    setUser(userData) {
      this.user = userData;
    },
    async loginUser(form) {
      const AuthService = useAuthService();
      const data = await AuthService.login(form);
      console.log("login data: ", data)
      if (data) {
        try {
          this.userTokens = data.data.access_token;  
          this.isLoggedIn = true;
          this.user = data.data.user;
          console.log('successfully assigned token and user email', data)
        } catch (error) {
          console.log(error);
        }
        return data;
      }
    },
    async resetPassword(form) {
      const AuthService = useAuthService();
      const config = {
        headers:   {
          Authorization: "Bearer " + `${this.userTokens}`,
        },
      };
      const  data  = await AuthService.resetPassword
      (config, form);
      console.log("data", data)
      if (data) {
        return data;
      }
    },
    async forgotPassword(form) {
      const AuthService = useAuthService();
      const config = {
        headers:   {
          Authorization: "Bearer " + `${this.userTokens}`,
        },
      };
      const  data  = await AuthService.forgotPassword
      (config, form);
      console.log("data", data)
      if (data) {
        return data;
      }
    },
  },
});
