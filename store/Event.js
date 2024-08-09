import { defineStore } from "pinia";
import { useEventApiService } from '~/composables/eventApiService';
export const useEventStore = defineStore("event", {
  state: () => ({}),
  actions: {
    async createProperty(form) {
      const EventService = useEventApiService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: "Bearer " + `${auth.access_token}`,
        },
      };
      let { payload, statusCode } =
        await EventService.createEvent(form, config);
   
    
      return statusCode;
    },
  },
});
