<template>
    <div  :class=" { 'h-100': drawer }" class=" container">
      <v-card>
        <v-layout>
          <v-app-bar flat  color="#ffffff" prominent>
            <v-app-bar-nav-icon
              variant="text"
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </v-app-bar>
  
          <v-navigation-drawer v-model="drawer" flat location="left" temporary>
            <v-list color="#624CF5" class="container">
              <nuxt-link to="basicinfo">
                <v-list-item class="list_item" value="1">
                  <div value="1" flat class="d-flex gap-4">
                    <img src="../../assets/images/svg/info.svg" alt="" />
                    <p>Basic Info</p>
                  </div>
                </v-list-item>
              </nuxt-link>
  
              <nuxt-link to="details">
                <v-list-item class="list_item" value="2">
                  <div flat class="d-flex gap-4">
                    <img src="../../assets/images/svg/details.svg" alt="" />
                    <p>Details</p>
                  </div>
                </v-list-item>
              </nuxt-link>
  
              <nuxt-link to="tickets">
                <v-list-item class="list_item" value="3">
                  <div flat class="d-flex gap-4">
                    <img src="../../assets/images/svg/ticket.svg" alt="" />
                    <p>Tickets</p>
                  </div>
                </v-list-item>
              </nuxt-link>
              <nuxt-link to="go-live">
                <v-list-item class="list_item" value="4">
                  <div flat class="d-flex gap-4">
                    <img src="../../assets/images/svg/live.svg" alt="" />
                    <p>Go Live</p>
                  </div>
                </v-list-item>
              </nuxt-link>
            </v-list>
          </v-navigation-drawer>
        </v-layout>
      </v-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const drawer = ref(null);
  const value = ref(0);
  </script>
  
  <style lang="scss" scoped>
  .container {
    margin-top: 220px;
  
  }
  .list_item {
    width: 216px;
    height: 48px;
    padding: 12px, 91px, 12px, 12px;
    border-radius: 8px;
  }
  </style>
  