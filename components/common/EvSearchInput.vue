<template>
  <v-responsive class="search" style="max-width:100%">
    <v-card-text>
      <div class="input-wrapper">
        <input
          type="text"
          :placeholder="label"
          class="search-bar"
          @click="onClick"
        />
        <span v-if="loading" class="loader"></span>
        <span class="icon mdi mdi-magnify"></span>
      </div>
    </v-card-text>
  </v-responsive>
</template>

<script setup>
import { ref } from "vue";

// Define props
defineProps({
  label: {
    type: String,
    required: false,
  },
});

const loading = ref(false);

// Simulate search action on click
function onClick() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-bar {
  width: 100%;
  padding: 0.75rem 3rem 0.75rem 2.5rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  height: 56px;
  background-color: #f7f7fd;
  font-size: 1rem;
}

.icon {
  position: absolute;
  left: 10px;
  font-size: 1.25rem;
  color: #666;
}

// .loader {
//   position: absolute;
//   right: 10px;
//   width: 1rem;
//   height: 1rem;
//   border: 2px solid #624cf5;
//   border-radius: 50%;
//   border-top-color: transparent;
//   animation: spin 1s linear infinite;
// }

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.search {  
  max-width: 5.75rem;
}
@media (max-width: 768px) {
  .search {
    width: 100%;
  }
}
</style>