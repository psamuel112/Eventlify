import api from "./api";
import * as ENDPOINTS from "../services/endpoints";

export const useEventApiService = () => {
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
        resolveRequestError(err);
      }
    },
  };
};
