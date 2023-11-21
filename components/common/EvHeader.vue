<template>
  <div class="">
    <div class="d-flex justify-between pt-6 px-14">
      <div>
        <img src="../../assets/images/png/Logo.png" alt="" />
      </div>
      <div class="mt-2">
        <v-tabs v-model="tab" color="deep-purple-accent-4">
          <v-tab class="text-none pb-12" value="1"
            ><img
              class="pr-1"
              src="../../assets/images/svg/element-3.svg"
              alt=""
            />
            Overview</v-tab
          >
          <v-tab class="text-none pb-8" value="2"
            ><img
              class="pr-1"
              src="../../assets/images/svg/Icons2.svg"
              alt=""
            />
            Events</v-tab
          >
          <v-tab class="text-none pb-8" value="3"
            ><img
              class="pr-1"
              src="../../assets/images/svg/Icons3.svg"
              alt=""
            />
            Records</v-tab
          >
        </v-tabs>
      </div>
      <div class="d-flex gap-6">
        <NuxtLink to="/basicInfo">
          <v-btn class="text-none create_btn">+ Create</v-btn></NuxtLink
        >

        <img src="../../assets/images/svg/notification.svg" alt="" />
        <v-divider class="border-opacity-100" vertical=""></v-divider>

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
    <div class="line mt-4"></div>
    <v-window v-model="tab">
      <v-window-item value="1"><evoverview /></v-window-item>
      <v-window-item value="2"><index-vue /></v-window-item>
      <v-window-item value="3"><ev-records /></v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { ref } from "vue";

import indexVue from "~/pages/events/index.vue";
import Evoverview from "~/components/dashboard/Evoverview.vue";
import EvRecords from "~/components/dashboard/EvRecords.vue";
// import icon1 from "../../assets/images/svg/profile.svg";
// import icon2 from "../../assets/images/svg/remain.svg";
// import icon3 from "../../assets/images/svg/creator.svg";
// import icon4 from "../../assets/images/svg/affiliate.svg";
// import icon5 from "../../assets/images/svg/logout.svg";
const selectedOption = ref("");
const tab = ref(null);

const items = ref([
  {  title: "Profile", },
  {  title: "Explore events", route: "/user-event" },
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
.option {
  background-color: red;
  color: red;
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
