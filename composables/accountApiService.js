import api from "./api";
import * as ENDPOINTS from "../services/endpoints";

export const useAccountService = () => {
  return {
    async fetchAccountDetails(config) {
      try {
        const { data } = await api.get(ENDPOINTS.GET_PROFILE,
          config);
        console.log(data);
        return data;
      } catch (err) {
      }
    },
    async updateProfile(form, config) {
      try {
        const { data } = await api.put(ENDPOINTS.UPDATE_PROFILE(form), config)
      }
      catch (err) {
      }
    }
  };

};
