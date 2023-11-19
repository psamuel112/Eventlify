<template>
  <div class="">
    <div class="d-flex justify-between align-center  px-14">
      <div>
        <img src="../../assets/images/png/Logo.png" alt="" />
      </div>
      <div class="">
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
            <v-icon icon="mdi-home" />
          </div>
          <select
            density="compact"
            label="Compact"
            class="v-btn v-btn--small text-none"
            v-model="selectedOption"
            @change="handleChange"
          >
            Hendrix
            <option class="text-none" value="option1">Hendrix</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
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
