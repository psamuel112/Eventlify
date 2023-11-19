<template>
  <div>
    <main>
      <header>
        <nav>
          <navBar />
        </nav>
      </header>

      <div class="content">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
import navBar from "~/components/userEvent/navBar.vue";
</script>

<style lang="scss" scoped>
.content {
  width: 90%;
  margin: 0 auto;
}
</style>
