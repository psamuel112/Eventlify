<template>
    <div class="mr-md-n10 ml-md-n10">
     <v-form>
    <v-col
    class=""
        >
    <v-text-field
    label="Email address"
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
    ></v-text-field>
    <v-text-field
    label="Password"
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>
<div class="d-flex align-center mt-n7 ml-n2 justify-between">
    <v-checkbox class="checkbox"><template v-slot:label>
    <div class="checkbox"><p>Remember me</p></div>
    </template></v-checkbox>
    <NuxtLink to="/resetpassword">
      <p class="forgot_password mt-n5">Forgot Password</p>
    </NuxtLink>
</div>
<NuxtLink to="/dashboard">
  <v-btn block class="text-none signin_btn" color="#624CF5" size="large" >
        Sign In
      </v-btn>
</NuxtLink>
    </v-col>        
     </v-form>    
    </div>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>
<style  scoped>
.checkbox p{
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:#0E0B26;
}
.signin_btn{
color: #ffffff;
font-size: 16px;
font-weight: 700;
line-height: 24px;
}
.forgot_password{
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #624CF5;
}
</style>