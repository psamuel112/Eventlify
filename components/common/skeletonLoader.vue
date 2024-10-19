<template>
    <div class="image-skeleton-loader" :style="{ width: loaderWidth, height: loaderHeight }"></div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    loaderWidth: {
      type: String,
      default: '100%',
    },
    loaderHeight: {
      type: String,
      default: '300px',
    },
  });
  </script>
  
  <style scoped>
  .image-skeleton-loader {
    background-color: #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    animation: breathing 1.5s infinite;
  }
  
  @keyframes breathing {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.02);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>
  