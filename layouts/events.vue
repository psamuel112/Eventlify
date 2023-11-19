<template>
  <div>
    <main>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div class="d-flex  justify-center">
        <div>
          <Sidebar />
        </div>
        <div class="content">
        <slot></slot>
        </div>
      </div>
       
  </main>
</div>
</template>

<script setup>
import Sidebar from '~/components/event/Sidebar.vue';
import Navbar from '~/components/event/Navbar.vue'
</script>

<style lang="scss" scoped>


.content {
  width: 90%;
  margin: 0 auto;
}
</style>
