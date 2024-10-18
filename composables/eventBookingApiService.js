import api from "./api";
import * as ENDPOINTS from "../services/endpoints";

export const useEventBookingService = () => {
  return {
    async eventBooking(config, form) {
      try {
        const { data } = await api.post(ENDPOINTS.EVENT_BOOKING, form,
        config);
        console.log(data);
        return data;
      } catch (err) {
      }
    },
  };
};
