<template>
    <div class="d-flex align-center w-100 position-relative">
      <div class="w-100 custom-input" @click="openDatePicker">
        <DatePicker
        placeholder="DD/MM/YYYY"
        v-model="selectedDate"
        format="dd/MM/yyyy"
        valueType="date"
        inline
        @change="updateDate"
        @close="showDatePicker = false"
        class="datepicker"
      />
      </div>
      <div class="ml-n8">
        <img
          src="../../assets/images/svg/clock.svg"
          @click="openDatePicker"
          alt="Calendar Icon"
        />
      </div>
     
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import DatePicker from 'vue3-datepicker';
  
    const selectedDate = ref(null);
  const showDatePicker = ref(false);
  

  </script>
  
  <style scoped>
  .custom-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .placeholder {
    color: #888;
  }
  
  .datepicker {
    position: absolute;
    z-index: 1000;
  }
  </style>
  