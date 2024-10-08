<template>
  <div class="navbar-wrapper">
    <div class="navbar d-flex justify-between pt-6 px-14">
      <div class="logo">
        <img src="../../assets/images/png/Logo.png" alt="Logo" />
      </div>
      
      <div class="nav-links mt-2 d-flex gap-8">
        <NuxtLink to="/dashboard" class="nav-item" @click="tab = 'overview'">
          <img class="pr-1" src="../../assets/images/svg/element-3.svg" alt="Overview Icon" />
          <span>Overview</span>
        </NuxtLink>
        <NuxtLink to="/events" class="nav-item" @click="tab = 'events'">
          <img class="pr-1" src="../../assets/images/svg/Icons2.svg" alt="Events Icon" />
          <span>Events</span>
        </NuxtLink>
        <NuxtLink to="/records" class="nav-item" @click="tab = 'records'">
          <img class="pr-1" src="../../assets/images/svg/Icons3.svg" alt="Records Icon" />
          <span>Records</span>
        </NuxtLink>
      </div>
      
      <div class="right-side d-flex gap-6 align-center">
        <NuxtLink to="/basicInfo">
          <button class="create-btn">+ Create</button>
        </NuxtLink>
        <img src="../../assets/images/svg/notification.svg" alt="Notifications" />
        <div class="divider"></div>
       
        <v-menu open-on-click>
          <template #activator="{ props }">
            <div class="profile-dropdown" v-bind="props">
              <img class="profile-pic" src="../../assets/images/svg/profilepic.svg" alt="Profile Picture" />
              <div class="profile-name d-flex align-center">
                <p>Dami</p>
                <v-icon class="ml-1">mdi-chevron-down</v-icon>
              </div>
            </div>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="handleProfileClick(item.route)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div class="divider-line"></div>

    <div class="tab-content">
      <component :is="getComponent(tab)"></component>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Evoverview from '~/components/dashboard/Evoverview.vue';
import IndexVue from '~/pages/events/index.vue';
import EvRecords from '~/components/dashboard/EvRecords.vue';
import EvProfile from '~/pages/profile/index.vue';

const tab = ref('overview');
const router = useRouter();

const items = ref([
  { title: 'Profile', route: 'profile' },
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
    case 'profile':
      return EvProfile;
    default:
      return Evoverview;
  }
};

const handleProfileClick = (route) => {
  if (route === 'profile') {
    tab.value = 'profile'; 
  } else {
    router.push(route); 
  }
};
</script>

<style scoped lang="scss">
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
