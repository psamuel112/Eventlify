<template>
    <v-responsive class="search" max-width="384">
      <v-card-text>
        <v-text-field
          :loading="loading"
          density="compact"
          class="search-bar"
          variant="plain"
          flat
          :label="label"
          prepend-inner-icon="mdi-magnify"
         
          single-line
        hide-details
          @click:append-inner="onClick"
        ></v-text-field>
      </v-card-text>
    </v-responsive>
  </template>
  <script setup>
  defineProps({
    label: {
      type: String,
      required: false,
    },
  });
  import { ref } from "vue";
  const loading = ref(false);
  const loaded = ref(false);
  function onClick() {
    this.loading.value = true;
    setTimeout(() => {
      loading.value = false;
      loaded.value = true;
    }, 2000);
  }
  </script>
  
  <style lang="scss" scoped>
  .search-bar {
    border: 1.5px solid #E2E8F0;
    border-radius: 16px;
    height: 56px;
    background-color: #F7F7FD;
  }
  .search{
    width: 25.75rem;
  }
  </style>