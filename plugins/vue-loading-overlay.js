import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Loading, {
    loader: "bars",
    color: "#E12C5F",
    opacity: 0.95,
  });
});
