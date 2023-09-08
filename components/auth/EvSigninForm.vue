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
    <p class="forgot_password mt-n6">Forgot Password</p>
</div>
    <v-btn block class="text-none signin_btn" color="#624CF5" size="large" >
        Sign In
      </v-btn>
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
    color: #ffffff
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