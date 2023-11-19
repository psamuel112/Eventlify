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
 
  </style>
  