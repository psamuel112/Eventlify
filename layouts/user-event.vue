<template>
  <div>
    <main>
      <header class="d-none d-md-block">
        <nav>
          <navBar />
        </nav>
      </header>
      <div class="content">
        <slot></slot>
      </div>
      <div class="mobile_nav d-md-none z-99">
        <EvMobileHeader />
      </div>
     

    </main>
  </div>
</template>

<script setup>
import EvMobileHeader from "~/components/common/EvMobileHeader.vue";
import navBar from "~/components/userEvent/navBar.vue";
</script>

<style lang="scss" scoped>
.content {
  width: 90%;
  margin: 0 auto;
  
}
@media screen and (max-width: 960px) {
  .content {
    margin-top: 80px;
   
  }
}
.mobile_nav{
  z-index: 100;
}
</style>
