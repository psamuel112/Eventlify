<template>
    <v-container>
      <!-- Profile Header: Upload Section -->
      <v-row>
        <v-col cols="12" md="6">
          <h2>Upload Profile Picture</h2>
          <input type="file" @change="onFileChange" id="uploadProfilePic" />
          <label for="uploadProfilePic">
            <div class="upload-box">
              <span>Upload profile image</span>
            </div>
          </label>
          <p>NOTE: Minimum size should be 850x550 pixels. Maximum file size is 900KB.</p>
        </v-col>
      </v-row>
  
      <!-- Profile Information Section -->
      <v-row>
        <v-col cols="12" md="6">
          <h3>Your Basic Information</h3>
          <form>
            <v-row>
              <!-- First Name -->
              <v-col cols="12" md="6">
                <label for="firstName">First Name</label>
                <input type="text" v-model="user.firstName" id="firstName" placeholder="Enter First Name" class="input-field" />
              </v-col>
  
              <!-- Last Name -->
              <v-col cols="12" md="6">
                <label for="lastName">Last Name</label>
                <input type="text" v-model="user.lastName" id="lastName" placeholder="Enter Last Name" class="input-field" />
              </v-col>
            </v-row>
  
            <v-row>
              <!-- Email -->
              <v-col cols="12" md="6">
                <label for="email">Email</label>
                <input type="email" v-model="user.email" id="email" placeholder="Enter Email" class="input-field" />
              </v-col>
  
              <!-- Contact Number -->
              <v-col cols="12" md="6">
                <label for="contact">Contact Number</label>
                <input type="text" v-model="user.contact" id="contact" placeholder="Enter Contact Number" class="input-field" />
              </v-col>
            </v-row>
  
            <v-row>
              <!-- Gender -->
              <v-col cols="12" md="6">
                <label>Gender</label>
                <div class="gender-options">
                  <input type="radio" v-model="user.gender" value="male" id="male" />
                  <label for="male">Male</label>
                  <input type="radio" v-model="user.gender" value="female" id="female" />
                  <label for="female">Female</label>
                </div>
              </v-col>
  
              <!-- Time Zone -->
              <v-col cols="12" md="6">
                <label for="timezone">Time Zone</label>
                <select v-model="user.timeZone" id="timezone" class="input-field">
                  <option disabled value="">Select Time Zone</option>
                  <option v-for="zone in timeZones" :key="zone">{{ zone }}</option>
                </select>
              </v-col>
            </v-row>
  
            <!-- Update Button -->
            <v-row>
              <v-col cols="12">
                <button type="button" @click="updateProfile" class="btn-update">Update</button>
              </v-col>
            </v-row>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  definePageMeta({
  layout: "dashboard",
});
  const user = ref({
    firstName: 'Damilola',
    lastName: 'Yekinni',
    email: 'damilolayak1@gmail.com',
    contact: '9125447565',
    gender: '',
    timeZone: ''
  })
  
  const timeZones = [
    'UTC -12:00', 'UTC -11:00', 'UTC -10:00', 'UTC -09:00', 
    'UTC -08:00', 'UTC -07:00', 'UTC -06:00', 'UTC -05:00'
  ]
  
  const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      console.log('File uploaded:', file)
      // Handle file upload logic here
    }
  }
  
  const updateProfile = () => {
    console.log('Profile updated:', user.value)
    // Handle profile update logic here
  }


  </script>
  
  <style scoped>
  /* Responsive styling using Vuetify’s CSS grid */
  .input-field {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .gender-options {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .upload-box {
    border: 2px dashed #ccc;
    padding: 40px;
    text-align: center;
    cursor: pointer;
  }
  
  .btn-update {
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    display: inline-block;
    width: 100%;
  }
  
  .btn-update:hover {
    background-color: #218838;
  }
  </style>
  