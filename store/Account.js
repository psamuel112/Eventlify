import { defineStore } from "pinia";
import { useAuthentication } from "./Authentication";
import { useAccountService } from '~/composables/accountApiService';
export const useAccountStore = defineStore("account", {
  state: () => ({
   account: null
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  actions: {
    async fetchAccountDetails() {
      const AccountService = useAccountService();
      const auth = useAuthentication().userTokens;
      if (this.account) return;
      const config = {
        headers: {
          Authorization: "Bearer " + `${auth}`,
        },
      };
      console.log("config", config)
      const  data  = await AccountService.fetchAccountDetails(config);
      return data;
    },    
  
  },
});
