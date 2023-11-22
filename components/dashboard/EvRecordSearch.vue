<template>
    <v-responsive class="search" max-width="">
      <v-card-text>
        <v-text-field
          :loading="loading"
          density="compact"
          class="search-bar"
          variant="plain"
          flat
          label="Search records"
          prepend-inner-icon="mdi-magnify"
          @click:append-inner="onClick"
        ></v-text-field>
      </v-card-text>
    </v-responsive>
  </template>
  <script setup>
  import { ref } from "vue";
  const loading = ref(false);
  const loaded = ref(false);
  function onClick() {
    this.loading = true;
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

  }
  
  </style>