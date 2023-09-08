<template>
    <div>
        <div class="d-md-flex">
            <div class="d-none  d-md-block">
                <img class="" src="../../assets/images/png/cover.png" />
            </div>
            <div class="mx-auto justify-center  py-32 px-sm-16 px-8 align-center form_container">
                <p class="primary_text ml-2 ml-md-n7">Sign In to your Account 🚀</p>
                <p class="secondary_text ml-2 ml-md-n7 mt-4 mb-4">Welcome back. Kindly enter your details</p>
                <EvSigninForm />
                <div class="d-flex mt-6  justify-between align-center">
                    <div class="line">
                    </div>
                    <div class="text-center">
                        <span class="divider_text">Or sign in with</span>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="d-flex mt-8 gap-4 justify-center align-center">
                    <v-btn border
                    variant="text"
                    class="text-none" >
                        <img src="../../assets/images/svg/google.svg" alt="Image" class="mr-2" />Google
                    </v-btn>
                    <v-btn 
                    border
                    variant="text"
                    class="text-none" >
                        <img src="../../assets/images/svg/fb.svg" alt="Image" class="mr-2" />Facebook
                    </v-btn>
                </div>
                <div class="mt-8">
                    <p class="signup_text">Don’t have an account? <span class="signup">Sign Up</span></p>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import EvSigninForm from "~/components/auth/EvSigninForm.vue";
</script>

<style lang="scss" scoped>
.primary_text {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    color: #0e0b26;
}

.secondary_text {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    color: #6b6478;
}
.line{
    width: 9.1rem;
    height: 1px;
   background-color:  #E2E8F0;
}

.divider_text {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: #64748B;
}
.signup{
color: #624CF5;
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
}
.signup_text{
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color:#0e0b26;
}
</style>