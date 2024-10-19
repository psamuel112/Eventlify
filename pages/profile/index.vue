<template>
  <div>
    <h3 class="h3_semibold purple90">Profile</h3>

    <div>
      <h4 class="h4_semibold purple90">Profile details</h4>
      <div>
        <div class="d-flex justify-between align-center">
          <div>
            <p class="body2_semiold purple90">Full name</p>
          </div>
          <p @click="toggleEdit('name')" class="h6_bold purple50">{{ editFields.name ? 'Cancel' : 'Edit' }}</p>
        </div>
        <p v-if="!editFields.name" class="body2_medium dark2">Hendrix James</p>
        <div v-if="editFields.name">
          <div class="d-flex">
            <v-text-field label="First name" density="compact" placeholder="First name"
              prepend-inner-icon="mdi-account-outline" variant="outlined"></v-text-field>
            <v-text-field label="Last name" density="compact" placeholder="Last name"
              prepend-inner-icon="mdi-account-outline" variant="outlined"></v-text-field>
          </div>
          <button @click="saveEdit('name')">Save</button>
        </div>
      </div>
    </div>

    <div>
      <div class="d-flex justify-between align-center">
        <div>
          <p class="body2_semiold purple90">Email address</p>
        </div>
        <p @click="toggleEdit('email')" class="h6_bold purple50">{{ editFields.email ? 'Cancel' : 'Edit' }}</p>
      </div>
      <p v-if="!editFields.email" class="body2_medium dark2">eventify@gmail.com</p>
      <div v-if="editFields.email">
        <v-text-field label="Email address" density="compact" placeholder="Email address"
          prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
        <button @click="saveEdit('email')">Verify email</button>
      </div>
    </div>


    <div>
      <div class="d-flex justify-between align-center">
        <div>
          <p class="body2_semiold purple90">Phone number</p>
        </div>
        <p @click="toggleEdit('phone')" class="h6_bold purple50">{{ editFields.phone ? 'Cancel' : 'Edit' }}</p>
      </div>
      <p v-if="!editFields.phone" class="body2_medium dark2">0908503430</p>
      <div v-if="editFields.phone">
        <v-text-field label="Phone number" density="compact" placeholder="Phone number"
          prepend-inner-icon="mdi-phone-outline" variant="outlined"></v-text-field>
        <button @click="saveEdit('phone')">Verify phone number</button>
      </div>
    </div>


    <div>
      <div class="d-flex justify-between align-center">
        <div>
          <p class="body2_semiold purple90">Address</p>
        </div>
        <p @click="toggleEdit('address')" class="h6_bold purple50">{{ editFields.address ? 'Cancel' : 'Edit' }}</p>
      </div>
      <p v-if="!editFields.address" class="body2_medium dark2">No Address added</p>
      <div v-if="editFields.address">
        <v-text-field label="Street address" density="compact" placeholder="Street address"
          prepend-inner-icon="mdi-map-marker-outline" variant="outlined"></v-text-field>
        <v-text-field label="City" density="compact" placeholder="City" prepend-inner-icon="mdi-city"
          variant="outlined"></v-text-field>
        <div class="d-flex">
          <v-text-field label="State" density="compact" placeholder="State" prepend-inner-icon="mdi-home-city-outline"
            variant="outlined"></v-text-field>
          <v-text-field label="Country" density="compact" placeholder="Country" prepend-inner-icon="mdi-earth"
            variant="outlined"></v-text-field>
        </div>
        <button @click="saveEdit('address')">Save</button>
      </div>
    </div>


    <div>
      <div class="d-flex justify-between align-center">
        <div>
          <p class="body2_semiold purple90">Security</p>
        </div>
        <p @click="toggleEdit('password')" class="h6_bold purple50">{{ editFields.password ? 'Cancel' : 'Edit' }}</p>
      </div>
      <p v-if="!editFields.password" class="body2_medium dark2">Change your password</p>
      <div v-if="editFields.password">
        <v-text-field label="Current Password" density="compact" placeholder="Current Password" prepend-inner-icon="mdi-lock-outline"
          variant="outlined"></v-text-field>
        <v-text-field label="New Password" density="compact" placeholder="New Password" prepend-inner-icon="mdi-lock-outline"
          variant="outlined"></v-text-field>
        <v-text-field label="Confirm Password" density="compact" placeholder="Confirm Password" prepend-inner-icon="mdi-lock-outline"
          variant="outlined"></v-text-field>
        <button @click="saveEdit('password')">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
  layout: "dashboard",
})

const editFields = ref({
  name: false,
  email: false,
  phone: false,
  address: false,
  password: false,
})

function toggleEdit(field) {
  editFields.value[field] = !editFields.value[field];
}

function saveEdit(field) {
  // Logic to save the edited data (e.g., API call)
  editFields.value[field] = false; // Close the edit mode after saving
}
</script>

<style scoped></style>
