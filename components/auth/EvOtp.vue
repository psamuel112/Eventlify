<template>
    <div class="mr-md-n10 ml-md-n10">
     <v-form>
    <v-col
    class=""
        >
        <v-otp-input
      length="6"
    ></v-otp-input>
    <v-btn  block class="text-none text-white signin_btn" color="#624CF5" size="large" >
        Reset Password
      </v-btn>
    </v-col>        
     </v-form>    
    </div>
</template>

<script setup>
import { VOtpInput } from 'vuetify/labs/VOtpInput'
</script>
<style  scoped>
@media (min-width: 992px) {
    .terms_wrapper{
    width: 25.5rem;
}
}
</style>