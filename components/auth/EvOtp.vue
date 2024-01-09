<template>
    <div class="mr-md-n10 ml-md-n10">
     <v-form>
    <v-col
    class=""
        >
        <v-otp-input
      length="6"
    ></v-otp-input>
    <v-btn  block class="text-none signin_btn" color="#624CF5" size="large" >
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
.checkbox{
font-size: 12px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0nem;
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