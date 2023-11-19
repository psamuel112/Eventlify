<template>
  <div class="relative">
    <header class="z-10 bg-gray-800 p-4 text-white">
      <!-- Your header content goes here -->
      <h1>Header</h1>
    </header>
    
    <transition name="slide-left">
      <div :class="{ 'visible': isVisible }" @click="toggleVisibility" class="content z-0 absolute top-0 left-0 w-full p-4">
        Hello, World!
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const isVisible = ref(false);

    const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };

    // Watch for changes in isVisible and log the updated value
    watch(isVisible, (newValue) => {
      console.log('isVisible:', newValue);
    });

    return { isVisible, toggleVisibility };
  },
};
</script>

<style scoped>
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-left-enter, .slide-left-leave-to {
  transform: translateX(-100%);
}

/* Additional styling to prevent overflow */
body, html {
  height: 100%;
  margin: 0;
}

/* Ensure proper sizing and containment */
.relative {
  position: relative;
  height: 100%;
}
</style>