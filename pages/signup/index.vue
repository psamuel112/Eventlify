<template>
    <div>
        <div class="d-md-flex">
            <div class="d-none  d-md-block">
                <img class="" src="../../assets/images/png/Cover.png" />
            </div>
            <div class="mx-auto justify-center  py-32 px-sm-16 px-8 px-md-32 align-center form_container">
                <p class="h4_bold purple90 ml-2 mb-4 ml-md-n7">Sign Up for an Account 🚀</p>
                <EvSignupForm />
                <div class="d-flex mt-6  justify-between align-center">
                    <div class="line">
                    </div>
                    <div class="text-center">
                        <span class="body3_medium dark2 w-100">Or sign up with</span>
                    </div>
                    <div class="line "></div>
                </div>
                <div class="d-flex mt-8 gap-4 justify-center align-center">
                    <v-btn border
                    variant="text"
                    class="text-none" >
                        <img src="../../assets/images/svg/google.svg" alt="Image" class="mr-2 purple90" />Google
                    </v-btn>
                    <v-btn 
                    border
                    variant="text"
                    class="text-none" >
                        <img src="../../assets/images/svg/fb.svg" alt="Image" class="mr-2 purple90" />Facebook
                    </v-btn>
                </div>
                <div class="mt-8">
                    <NuxtLink to="/signin">
                        <p class="body3_regular dark2 text-center ">Already have an account? <span class="body3_bold purple50">Login</span></p>
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
.line{
    width: 9.1rem;
    height: 1px;
   background-color:  #E2E8F0;
}
</style>