<template>
  <div class="">
    <div class="d-flex justify-between align-center  px-14">
      <div>
        <img src="../../assets/images/png/Logo.png" alt="" />
      </div>
      <div class="nav-links mt-2 d-flex gap-8">
        <NuxtLink to="/dashboard" class="nav-item" @click="tab = 'overview'">
          <img
              class="pr-1"
              src="../../assets/images/svg/home.svg"
              alt=""
            />
          <span>Home</span>
        </NuxtLink>
        <NuxtLink to="/events" class="nav-item" @click="tab = 'events'">
          <img
              class="pr-1"
              src="../../assets/images/svg/tickets.svg"
              alt=""
            />
          <span>Favorite</span>
        </NuxtLink>
        <NuxtLink to="/records" class="nav-item" @click="tab = 'records'">
          <img
              class="pr-1"
              src="../../assets/images/svg/ticket.svg"
              alt=""
            />
          <span>Tickets</span>
        </NuxtLink>
      </div>
      <div class="d-flex align-center gap-4">
        <div>
          <LpSearchInput width="384px" />
        </div> 
         
        <div class="divider"></div>   
        <div class="custom-dropdown">     
          <div class="">
            <v-menu open-on-click>
          <template #activator="{ props }">
            <div class="profile-dropdown" v-bind="props">
              <img class="profile-pic" src="../../assets/images/svg/profilepic.svg" alt="Profile Picture" />
              <div class="profile-name d-flex align-center">
                <p>{{ account?.name || 'Guest' }}</p>
                <v-icon class="ml-1">mdi-chevron-down</v-icon>
              </div>
            </div>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>
                <nuxt-link :to="item.route">{{ item.title }}</nuxt-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
          </div>
         
        </div>
        
      </div>
    </div>
    <div class="divider-line"></div>
    
  </div>
</template>

<script setup>

import LpSearchInput from "~/components/common/EvSearchInput.vue";
import { ref } from 'vue';
import Evoverview from '~/components/dashboard/Evoverview.vue';
import IndexVue from '~/pages/events/index.vue';
import EvRecords from '~/components/dashboard/EvRecords.vue';
defineProps({
  account: {
    type: Object,
    default: null,
  }
});
const tab = ref('records');

const items = ref([
  { title: 'Profile', route: '/profile' },
  { title: 'Explore events', route: '/user-event' },
  { title: 'Switch to creator', route: '/dashboard' },

  { title: 'Logout', route: '/signin' },
]);

const getComponent = (tab) => {
  switch (tab) {
    case 'dashboard':
      return Evoverview;
    case 'records':
      return EvRecords;
    case 'events':
      return IndexVue;
    default:
      return Evoverview;
  }
};
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  background-color: #ffffff;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 14px;
  color: #5e5e5e;
  text-decoration: none;
  cursor: pointer;
}

.nav-item:hover {
  color: #624cf5;
}

.create-btn {

  width: 120px;
  height: 48px;
  padding: 14px, 24px, 14px, 24px;
  border-radius: 8px;
  background: #624cf5;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;

  color: #ffffff;

}

.create-btn:hover {
  background-color: #503bcf;
}

.right-side {
  display: flex;
  align-items: center;
}

.profile-dropdown {
  display: flex;
  align-items: center;
  position: relative;
}

.profile-pic {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.profile-name {
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
}

.dropdown-icon {
  margin-left: 0.5rem;
}

.divider {
  width: 1px;
  height: 36px;
  background-color: #ccc;
}

.divider-line {
  width: 100%;
  height: 2px;
  background-color: #e2e8f0;
  margin-top: 0.5rem;
}

.tab-content {
  margin-top: 2rem;
}
</style>
