<template>
    <transition name="toast-fade">
      <div v-if="visible" class="toast" :class="type">
        <p>{{ message }}</p>
        <button @click="hideToast" class="close-btn">&times;</button>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Props for message, type, and duration
  const props = defineProps({
    message: {
      type: String,
      default: 'Notification',
    },
    type: {
      type: String,
      default: 'success', // Default type is success, can be 'error', 'info', etc.
    },
    duration: {
      type: Number,
      default: 3000, // Toast visible duration in milliseconds
    }
  })
  
  const visible = ref(true)
  
  // Automatically hide the toast after the set duration
  setTimeout(() => {
    visible.value = false
  }, props.duration)
  
  // Function to manually hide the toast
  const hideToast = () => {
    visible.value = false
  }
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    border-radius: 8px;
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.95;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 200px;
    z-index: 9999;
  }
  
  .toast.success {
    background-color: #624cf5;
  }
  
  .toast.error {
    background-color: #f44336;
  }
  
  .toast.info {
    background-color: #2196f3;
  }
  
  .toast-fade-enter-active, .toast-fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .toast-fade-enter, .toast-fade-leave-to {
    opacity: 0;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  