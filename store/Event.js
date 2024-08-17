import { defineStore } from "pinia";
import { useEventService } from '~/composables/eventApiService';
export const useEventStore = defineStore("event", {
  state: () => ({
    tickets: {}
  }),
  actions: {
    async createEvent(form) {
      const EventService = useEventService();
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
