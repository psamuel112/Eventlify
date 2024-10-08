<template>
  <div>
    <div class="d-md-none mt-16">
    <Evoverview />
    </div> 
   
  </div>
</template>

<script setup>
import { ref } from "vue";
 import Evoverview from "~/components/dashboard/Evoverview.vue";
 import EvMobileHeader from "~/components/common/EvMobileHeader.vue";
 import EvHeader from "~/components/common/EvHeader.vue";

 definePageMeta({
  layout: "dashboard",
});
</script>

<style lang="scss" scoped></style>
