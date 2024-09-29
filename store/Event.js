import { defineStore } from "pinia";
import { useAuthentication } from "./Authentication";
import { useEventService } from '~/composables/eventApiService';
export const useEventStore = defineStore("event", {
  state: () => ({
    tickets: {}
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  actions: {
    async createEvent(form) {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      console.log("auth", auth)
      const config = {
        headers: {
          'Content-Type': 'application/json',
           Authorization: "Bearer " + `${auth}`,
          // Accept: "application/json"
        },
      };
      console.log("config", config)
      const { data } =
        await EventService.createEvent(form, config);
        console.log("payload", data)
        return data;
    },
    async fetchEvents() {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: "Bearer " + `${auth}`,
        },
      };
      console.log("config", config)
      const  data  = await EventService.fetchEvents(config);
      return data;
    },
    async fetchEventTypes() {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: "Bearer " + `${auth}`,
        },
      };
      console.log("config", config)
      const  data  = await EventService.fetchEventTypes(config);
      return data;
    },
    async fetchEventsById(id) {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: "Bearer " + `${auth}`,
        },
      };
      console.log("config", config)
      const { data } = await EventService.fetchEventsById(id, config);
      return data;
    },
    
  },
});
