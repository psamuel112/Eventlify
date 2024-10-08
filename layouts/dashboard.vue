<template>
  <div>
    <main>
      <div class=" d-md-none">
        <EvMobileHeader />
      </div>
      <div class="d-none d-md-block">
        <EvHeader />
      </div>
      <div class="mt-20 d-md-none">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
import EvMobileHeader from '~/components/common/EvMobileHeader.vue'
import EvHeader from '~/components/common/EvHeader.vue'
</script>

<style lang="scss" scoped></style>