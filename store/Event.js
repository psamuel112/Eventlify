import { defineStore } from 'pinia';
import { useAuthentication } from './Authentication';
import { useEventService } from '~/composables/eventApiService';
export const useEventStore = defineStore('event', {
  state: () => ({
    tickets: {},
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  actions: {
    async createEvent(form) {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      console.log('auth', auth);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + `${auth}`,
          // Accept: "application/json"
        },
      };
      console.log('config', config);
      const { data } = await EventService.createEvent(form, config);
      console.log('payload', data);
      return data;
    },
    async fetchEvents(params) {
      console.log(params);
      console.log('did we get here tooo?');
      const EventService = useEventService();

      const data = await EventService.fetchEvents(params);
      return data;
    },
    async fetchAllEvents() {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: 'Bearer ' + `${auth}`,
        },
      };
      console.log('config', config);
      const data = await EventService.fetchAllEvents(config);
      return data;
    },
    async fetchEventTypes() {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: 'Bearer ' + `${auth}`,
        },
      };
      console.log('config', config);
      const data = await EventService.fetchEventTypes(config);
      return data;
    },
    async fetchEventsById(id) {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: 'Bearer ' + `${auth}`,
        },
      };
      console.log('config', config);
      const { data } = await EventService.fetchEventsById(id, config);
      return data;
    },
    async fetchTicketsById(id) {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: 'Bearer ' + `${auth}`,
        },
      };
      console.log('config', config);
      const { data } = await EventService.fetchTicketsById(id, config);
      return data;
    },
    async fetchAllEventsById(id) {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: 'Bearer ' + `${auth}`,
        },
      };
      console.log('config', config);
      const { data } = await EventService.fetchAllEventsById(id, config);
      return data;
    },
    async fetchEventsByType(event_type_id) {
      const EventService = useEventService();
      const auth = useAuthentication().userTokens;
      const config = {
        headers: {
          Authorization: 'Bearer ' + `${auth}`,
        },
      };
      console.log('config', config);
      const { data } = await EventService.fetchEventsByType(
        event_type_id,
        config
      );
      return data;
    },
  },
});
