<template>
    <div>
        <v-text-field
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false);
</script>

<style lang="scss" scoped>

</style>