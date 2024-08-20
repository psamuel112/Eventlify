import { defineStore } from "pinia";
import { useAuthentication } from "./Authentication";
import { useEventService } from '~/composables/eventApiService';
export const useEventStore = defineStore("event", {
  state: () => ({
    tickets: {}
  }),
  actions: {
    async createEvent(form) {
      const EventService = useEventService();
      const auth = useAuthentication();
      console.log("auth", auth)
      const config = {
        headers: {
          Authorization: "Bearer " + `${auth.access_token}`,
        },
      };
      let { payload, statusCode } =
        await EventService.createEvent(form, config);
      return statusCode;
    },
    // async fetchEvents(params) {
    //   const EventService = useEventService();
    //   const auth = useAuthentication().userTokens;
    //   const config = {
    //     headers: {
    //       Authorization: "Bearer " + `${auth.access_token}`,
    //     },
    //   };
    //   let data = await EventService.fetchLocations(params, config);
    //   if (data) {
       
    //   }
    //   return data;
    // },
  },
});
