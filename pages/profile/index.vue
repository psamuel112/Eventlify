<template>
  <div>
    <Navbar />
    <NuxtLink to="/dashboard">
      <div class="d-flex mt-6 align-center">
        <img src="../../assets/images/svg/Ico4.svg" />
        <p class="h6_medium dark2 ml-6">Back to event dashboard</p>
      </div>
    </NuxtLink>
    <div style="max-width: 640px;" class="pl-20">
      <h3 class="h3_semibold purple90">Profile</h3>
      <div>
        <h4 class="h4_semibold purple90">Profile details</h4>
        <div class="mt-8">
          <div class="d-flex justify-between align-center">
            <div>
              <p class="body2_semibold purple90">Full name</p>
            </div>
            <p @click="toggleEdit('name')" class="h6_bold purple50">{{ editFields.name ? 'Cancel' : 'Edit' }}</p>
          </div>
          <p v-if="!editFields.name" class="body2_medium dark2">{{ account.name }}</p>
          <div v-if="editFields.name">
            <v-text-field v-model="form.name" label="Full name" density="compact" placeholder="Enter full name"
              prepend-inner-icon="mdi-account-outline" variant="outlined"></v-text-field>
            <button class="lp_btn" @click="saveEdit()">Save</button>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="d-flex justify-between align-center">
          <div>
            <p class="body2_semibold purple90">Email address</p>
          </div>
          <p @click="toggleEdit('email')" class="h6_bold purple50">{{ editFields.email ? 'Cancel' : 'Edit' }}</p>
        </div>
        <p v-if="!editFields.email" class="body2_medium dark2">{{ account.email }}</p>
        <div v-if="editFields.email">
          <v-text-field v-model="form.email" label="Email address" density="compact" placeholder="Enter email address"
            prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
          <button class="lp_btn" @click="saveEdit()">Save</button>
        </div>
      </div>

      <div class="mt-6">
        <div class="d-flex justify-between align-center">
          <div>
            <p class="body2_semibold purple90">Phone number</p>
          </div>
          <p @click="toggleEdit('phone')" class="h6_bold purple50">{{ editFields.phone ? 'Cancel' : 'Edit' }}</p>
        </div>
        <p v-if="!editFields.phone" class="body2_medium dark2">{{ account.phone || 'Add Phone Number' }}</p>
        <div v-if="editFields.phone">
          <v-text-field v-model="form.phone" label="Phone number" density="compact" placeholder="Enter phone number"
            prepend-inner-icon="mdi-phone-outline" variant="outlined"></v-text-field>
          <button class="lp_btn" @click="saveEdit()">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "~/components/event/Navbar.vue";
import { ref, onMounted } from 'vue';
import { useAccountStore } from "~/store/Account";

const Account = useAccountStore();
const account = ref("");
const form = ref({
  email: ""
});

onMounted(() => {
  loadData();
});

async function loadData() {
  try {
    const data = await Account.fetchAccountDetails();
    account.value = data.data;
  
  } catch (error) {
    console.error(error);
  }
}

const editFields = ref({
  name: false,
  email: false,
  phone: false,
});

function toggleEdit(field) {
  editFields.value[field] = !editFields.value[field];
}

async function saveEdit(field) {
  try {
    const response = await Account.updateProfile(form.value);
    console.log("API response:", response);

    if (response && response.status === 200) { 
      account.value[field] = form.value[field]; 
      editFields.value[field] = false; 
    } else {
      console.error("Failed to save profile. Response status:", response ? response.status : "No response");
    }
  } catch (error) {
    console.error("Error saving profile:", error);
  }
}

</script>

<style scoped>
/* Scoped styling here */
</style>
