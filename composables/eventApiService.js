import api from "./api";
import * as ENDPOINTS from "../services/endpoints";

export const useEventService = () => {
  return {
    async createEvent(form, config) {
      try {
        const { data } = await api.post(
          ENDPOINTS.CREATE_EVENT,
          form,
          config
        );
        console.log(data);
        return data;
      } catch (err) {
      }
    },
    async fetchEvents(config) {
      try {
        const { data } = await api.get(ENDPOINTS.GET_EVENT,
        config);
        console.log(data);
        return data;
      } catch (err) {
      }
    },
    async fetchEventTypes(config) {
      try {
        const { data } = await api.get(ENDPOINTS.GET_EVENT_TYPE,
        config);
        console.log(data);
        return data;
      } catch (err) {
      }
    }
  };
};
