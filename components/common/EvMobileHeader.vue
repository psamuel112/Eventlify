<template>
  <div :class="{ 'h-100': drawer }" class="container">
    <v-card>
      <v-layout>
        <v-app-bar flat border prominent>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
          flat
          border
          v-model="drawer"
          location="left"
          temporary
        >
          <v-list color="#624CF5" class="container">
            <nuxt-link to="overview">
              <v-list-item class="list_item" value="1">
                <div value="1" flat class="d-flex gap-4">
                  <img src="../../assets/images/svg/info.svg" alt="" />
                  <p>Overview</p>
                </div>
              </v-list-item>
            </nuxt-link>

            <nuxt-link to="events">
              <v-list-item class="list_item" value="2">
                <div flat class="d-flex gap-4">
                  <img src="../../assets/images/svg/details.svg" alt="" />
                  <p>Events</p>
                </div>
              </v-list-item>
            </nuxt-link>

            <nuxt-link to="records">
              <v-list-item class="list_item" value="3">
                <div flat class="d-flex gap-4">
                  <img src="../../assets/images/svg/ticket.svg" alt="" />
                  <p>Records</p>
                </div>
              </v-list-item>
            </nuxt-link>

            <nuxt-link to="user-event">
              <v-list-item class="list_item" value="4">
                <div flat class="d-flex gap-4">
                  <img src="../../assets/images/svg/ticket.svg" alt="" />
                  <p>Explore events</p>
                </div>
              </v-list-item>
            </nuxt-link>

            <nuxt-link to="event-details">
              <v-list-item class="list_item" value="5">
                <div flat class="d-flex gap-4">
                  <img src="../../assets/images/svg/ticket.svg" alt="" />
                  <p>Creator</p>
                </div>
              </v-list-item>
            </nuxt-link>

            <nuxt-link to="basicinfo">
              <v-list-item class="list_item" value="6">
                <v-btn class="text-none ml-8 create_btn">+ Create</v-btn>
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
}
.list_item {
  width: 216px;
  height: 48px;
  padding: 12px, 91px, 12px, 12px;
  border-radius: 8px;
}
.create_btn {
  width: 120px;
  height: 48px;
  padding: 14px, 24px, 14px, 24px;
  border-radius: 8px;
  background: #624cf5;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
}
</style>
