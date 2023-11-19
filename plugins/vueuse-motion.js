import { useMotion } from '@vueuse/motion';

export default ({ app }, inject) => {
  inject('motion', useMotion());
};