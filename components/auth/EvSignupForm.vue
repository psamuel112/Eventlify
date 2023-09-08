<template>
    <div class="mr-md-n10 ml-md-n10">
     <v-form>
    <v-col
    class=""
        >
        <v-text-field
    label="Full name"
      density="compact"
      placeholder="Full name"
      prepend-inner-icon="mdi-account-outline"
      variant="outlined"
    ></v-text-field> 
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
<div class="d-flex terms_wrapper gap-4 mt-n2 ml-n2">
    <v-checkbox class="mt-n2"
    v-model="isenable"></v-checkbox><p class="terms_text">By creating an account means you agree to the<span>Terms
& Conditions</span>  and our <span>Privacy Policy</span></p>
</div>
    <v-btn :disabled="!isenable" block class="text-none signin_btn" color="#624CF5" size="large" >
        Sign Up
      </v-btn>
    </v-col>        
     </v-form>    
    </div>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
const isenable =ref(true)
</script>
<style  scoped>
.checkbox{
font-size: 12px;
font-weight: 400;
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
.terms_text{
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #6B6478;
}
@media (min-width: 992px) {
    .terms_wrapper{
    width: 25.5rem;
}
}

.terms_text span{
color: #0E0B26;
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
}

</style>