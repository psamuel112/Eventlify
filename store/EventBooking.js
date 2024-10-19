import { defineStore } from "pinia";
import { useAuthentication } from "./Authentication";
import { useEventBookingService } from '~/composables/eventBookingApiService';
export const useEventBookingStore = defineStore("account", {

  persist: {
    storage: persistedState.localStorage,
  },
  actions: {
    async eventBooking() {
      const EventBookingService = useEventBookingService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: "Bearer " + `${auth}`,
        },
      };
      console.log("config", config)
      const  data  = await EventBookingService.eventBooking(config);
      return data;
    },    
  
  },
});
