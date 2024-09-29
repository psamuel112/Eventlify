import { useToast } from "vue-toastification";
const toast = useToast();
function resolveRequestError(err) {
  toast.error("Please Try again");
  return false;
}

export { resolveRequestError };
