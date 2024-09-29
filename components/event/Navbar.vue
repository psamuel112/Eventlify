<template>
  <div class="">
    <div class="nav_wrapper mb-4 d-flex pt-8 pb-4 align-center">
      <div>
      </div>
      <div class="nav_logo align-center ">
        <img class="" src="../../assets/images/png/Logo.png" alt="" />
      </div>
    </div>
    <div class="line "></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.nav_wrapper {
  position: relative;
}
.nav_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto
}
.line {
  width: 100%;
  height: 2px;
  background-color: #e2e8f0;
}

.back_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #624cf5;
}
</style>
