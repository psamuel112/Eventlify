<template>
  <div>
    <div class="d-md-none">
      <EvRecords />
    </div>
  </div>
</template>

<script setup>
import EvRecords from "~/components/dashboard/EvRecords.vue";
import EvHeader from "~/components/common/EvHeader.vue";
definePageMeta({
  layout: "dashboard",
});
</script>

<style scoped></style>
