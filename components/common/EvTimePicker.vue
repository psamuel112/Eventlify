<template>
  <div class="d-flex align-center w-100 position-relative">
    <v-text-field
      type="date"
      :disabled="readonly"
      variant="outlined"
      v-model="date"
      :min="minDate"
      :max="maxDate"
      clearable
      :error="dateError"
    ></v-text-field>
  </div>
</template>
