<template>
    <div>
        <div class="d-md-flex">
            <div class="d-none  d-md-block">
                <img class="" src="../../assets/images/png/cover.png" />
            </div>
            <div class="mx-auto justify-center  py-32 px-sm-16 px-8 px-md-32 align-center form_container">
                <p class="primary_text ml-2 mb-4 ml-md-n7">Sign Up for an Account 🚀</p>
                <EvSignupForm />
                <div class="d-flex mt-6  justify-between align-center">
                    <div class="line">
                    </div>
                    <div class="text-center">
                        <span class="divider_text w-100">Or sign up with</span>
                    </div>
                    <div class="line "></div>
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
                    <NuxtLink to="/signin">
                        <p class="signup_text">Already have an account? <span>Login</span></p>
                    </NuxtLink>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import EvSignupForm from "~/components/auth/EvSignupForm.vue";
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
.signup_text{
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color:#0e0b26;

}
.signup_text span{
    color: #624CF5;
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
}
</style>