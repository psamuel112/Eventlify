<template>
  <div class="">
    <div class="d-flex justify-between align-center  px-14">
      <div>
        <img src="../../assets/images/png/Logo.png" alt="" />
      </div>
      <div class="mt-4">
        <v-tabs v-model="tab" color="deep-purple-accent-4">
          <v-tab class="text-none pb-8" value="1"
            ><img
              class="pr-1"
              src="../../assets/images/svg/home.svg"
              alt=""
            />
            Home</v-tab
          >
          <v-tab class="text-none pb-8" value="2"
            ><img
              class="pr-1"
              src="../../assets/images/svg/tickets.svg"
              alt=""
            />Favorite
            </v-tab
          >
          <v-tab class="text-none pb-8" value="3"
            ><img
              class="pr-1"
              src="../../assets/images/svg/ticket.svg"
              alt=""
            />
            Tickets</v-tab
          >
        </v-tabs>
      </div>
      <div class="d-flex align-center gap-4">
        <div>
          <LpSearchInput width="384px" />
        </div> 
          <div>
            <img src="../../assets/images/svg/notification.svg" alt="" />
          </div>    
          <v-divider class="border-opacity-100" vertical="" height="20px"></v-divider>    
        <div class="custom-dropdown">
          <div class="prepend-icon">
            <img src="../../assets/images/svg/profilepic.svg" />
          </div>
          <div class="">
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <p v-bind="props">Hendrix</p>
              </template>

              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>
                    <div class="d-flex gap-6 pl-4 pr-16">  
                      <!-- <img :src="item.icon" />
                       -->
                      <p>
                        <nuxt-link :to="item.route">
                        {{ item.title }}
                        </nuxt-link>
                      </p>            
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div class="append-icon">
            <v-icon icon="mdi-chevron-down" />
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <v-window v-model="tab">
      <v-window-item value="1"></v-window-item>
      <v-window-item value="2"></v-window-item>
      <v-window-item value="3"></v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LpSearchInput from "~/components/Landing-page/LpSearchInput.vue";
import indexVue from "~/pages/events/index.vue";
import Evoverview from "~/components/dashboard/Evoverview.vue";
import EvRecords from "~/components/dashboard/EvRecords.vue";
const selectedOption = ref("");
const tab = ref(null);


const items = ref([
  {  title: "Profile", },
  {  title: "Explore events" , route: "/user-event" },
  {  title: "Switch to creator", route: "/event-details" },
  {  title: "Become an affiliate" },
  {  title: "Logout" },
]);
</script>

<style lang="scss" scoped>
.v-tab {
  cursor: pointer;
  transition: background-color 0.3s ease;
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

.custom-dropdown {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}

.prepend-icon,
.append-icon {
  display: flex;
  align-items: center;
  padding: 5px;
}

.v-btn--small {
  min-height: 36px;
  padding: 0 16px;
  font-size: 14px;
}

.line {
  width: 100%;
  height: 2px;
  background-color: #e2e8f0;
}
</style>
