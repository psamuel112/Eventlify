<template>
    <div>
      <main>
        <header class="d-none d-md-block">
          <nav>
            <navBar />
          </nav>
        </header>
  
        <div class="content mt-20 mt-md-0">
          <slot></slot>
        </div>
        <div class=" d-md-none">
        <EvMobileHeader />
    </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import EvMobileHeader from '~/components/common/EvMobileHeader.vue'
  import navBar from "~/components/eventDetails/navBar.vue";
  </script>
  
  <style lang="scss" scoped>
 
  </style>
  