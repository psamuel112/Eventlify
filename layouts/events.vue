<template>
  <div>
    <main>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div class="d-flex d-none  justify-center">
        <div class="d-none d-md-block">
          <Sidebar />
        </div>
        <div class="d-block d-md-none">
         <mobileSidebar/> 
        </div>
        <div class="content">
        <slot></slot>
        </div>
      </div>
       
  </main>
</div>
</template>

<script setup>
import mobileSidebar from '~/components/event/mobileSidebar.vue';
import Sidebar from '~/components/event/Sidebar.vue';
import Navbar from '~/components/event/Navbar.vue'
</script>

<style lang="scss" scoped>


.content {
  width: 90%;
  margin: 0 auto;
}
</style>
