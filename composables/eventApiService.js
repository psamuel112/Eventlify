import api from './api';
import * as ENDPOINTS from '../services/endpoints';

export const useEventService = () => {
  return {
    async createEvent(form, config) {
      try {
        const { data } = await api.post(ENDPOINTS.CREATE_EVENT, form, config);
        console.log(data);
        return data;
      } catch (err) {}
    },
    async fetchEvents(params) {
      console.log(params);
      console.log('did we get here?');
      try {
        const { data } = await api.get(ENDPOINTS.GET_EVENT, { params });
        console.log(data);
        return data;
      } catch (err) {}
    },
    async fetchAllEvents(config) {
      try {
        const { data } = await api.get(ENDPOINTS.GET_ALL_EVENTS, config);
        console.log(data);
        return data;
      } catch (err) {}
    },
    async fetchEventTypes(config) {
      try {
        const { data } = await api.get(ENDPOINTS.GET_EVENT_TYPE, config);
        console.log(data);
        return data;
      } catch (err) {}
    },
    async fetchEventsById(id, config) {
      try {
        const { data } = await api.get(ENDPOINTS.GET_EVENT_BY_ID(id), config);
        console.log(data);
        return data;
      } catch (err) {}
    },
    async fetchAllEventsById(id, config) {
      try {
        const { data } = await api.get(
          ENDPOINTS.GET_ALL_EVENTS_BY_ID(id),
          config
        );
        console.log(data);
        return data;
      } catch (err) {}
    },
    async fetchTicketsById(id, config) {
      try {
        const { data } = await api.get(ENDPOINTS.GET_TICKETS_BY_ID(id), config);
        console.log(data);
        return data;
      } catch (err) {}
    },
    async fetchEventsByType(event_type_id, config) {
      try {
        const { data } = await api.get(
          ENDPOINTS.GET_EVENT_BY_ID(event_type_id),
          config
        );
        console.log(data);
        return data;
      } catch (err) {}
    },
  };
};
