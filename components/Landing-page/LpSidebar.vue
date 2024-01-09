<template>
  <div :class="{ 'h-100': drawer }" class="w-100 app-navbar-container">
    <v-card>
      <v-layout style="position: relative,z-index: 1000" class="layout">
        <v-app-bar color="#ffffff" prominent>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" location="left" temporary>
          <div
            class="header_container justify-center px-8 text-center align-center"
          >
            <div class="">
              <p class="header_icon mt-4">Eventlify</p>
            </div>
            <div class="mt-4">
              <button class="create_event">Create an event</button>
            </div>
            <div class="mt-4">
              <div>
                <NuxtLink to="/signin">
                  <button class="login_btn">Login</button>
                </NuxtLink>
              </div>
              <div class="">
                <NuxtLink to="/signup">
                  <button class="signup_btn">Get Started</button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </div>
</template>

<script setup>
import LpSearchInput from "~/components/Landing-page/LpSearchInput.vue";
import { ref } from "vue";

const drawer = ref(null);
</script>
<style scoped>
.v-layout {
  position: relative;
  z-index: 1000;
}
.app.navbar-container {
  position: relative !important;
  height: 100% !important;
}
.header_icon {
  font-weight: 600;
  line-height: 32px;
  font-size: 24px;
}

.login_btn {
  padding: 12px 40px 12px 40px;
  border-radius: 12px;
  border: 1.5px solid #624cf5;
  font-size: 16px;
  line-height: 24px;
  color: #624cf5;
  font-weight: 700;
  margin-bottom: 1rem;
}

.signup_btn {
  padding: 12px 20px 12px 20px;
  border-radius: 12px;
  background-color: #624cf5;
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}

.create_event {
  color: #624cf5;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
</style>
