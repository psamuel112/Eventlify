<template>
    <div>
        <div class="d-md-flex">
            <div class="d-none  d-md-block">
                <img class="" src="../../assets/images/png/Cover.png" />
            </div>
            <div class="mx-auto justify-center  py-32 px-sm-16 px-8 align-center form_container">
                <p class="h4_bold purple90ml-2 ml-md-n7">Sign In to your Account 🚀</p>
                <p class="body3_medium dark2 ml-2 ml-md-n7 mt-4 mb-4">Welcome back. Kindly enter your details</p>
                <EvSigninForm />
                <div class="d-flex mt-6  justify-between align-center">
                    <div class="line">
                    </div>
                    <div class="text-center">
                        <span class="body4_medium dark2">Or sign in with</span>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="d-flex mt-8 gap-4 justify-center align-center">
                    <v-btn border
                    variant="text"
                    class="text-none text-purple90" >
                        <img src="../../assets/images/svg/google.svg" alt="Image" class="mr-2" />Google
                    </v-btn>
                    <v-btn 
                    border
                    variant="text"
                    class="text-none text-purple90" >
                        <img src="../../assets/images/svg/fb.svg" alt="Image" class="mr-2" />Facebook
                    </v-btn>
                </div>
                <div class="mt-8">
                    <NuxtLink to="/signup">
                        <p class="text-center bold3_bold">Don’t have an account? <span class="purple50">Sign Up</span></p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import EvSigninForm from "~/components/auth/EvSigninForm.vue";
</script>

<style lang="scss" scoped>
.line{
    width: 9.1rem;
    height: 1px;
   background-color:  #E2E8F0;
}
</style>