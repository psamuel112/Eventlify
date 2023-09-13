<template>
    <div>
        <div class="d-md-flex">
            <div class="d-none  d-md-block">
                <img class="" src="../../assets/images/png/cover.png" />
            </div>
            <div class="mx-auto justify-center  py-32 px-sm-16 px-8 align-center form_container">
                <p class="primary_text ml-2 ml-md-n7">Verify your Email</p>
                <p class="secondary_text ml-2 ml-md-n7 mt-4">Kindly input the<span> 6 digit code</span> that was sent to the email address, <span>hendrix.j***@mail.com</span></p>
                <EvOtp />
                <div class="">
                    <p class="signup_text">Didn’t recieve code? <span class="signup">Resend</span></p>
                </div>
                <div class="mt-60">
                    <NuxtLink to="/signup">
                        <p class="signup_text">Don’t have an account? <span class="signup">Sign Up</span></p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import EvOtp from "~/components/auth/EvOtp.vue";
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
.secondary_text span{ 
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:#0E0B26;
}
@media (min-width: 992px) {
    .secondary_text{
    width: 25.5rem;
}
}
.signin {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #624cf5
}

.signup {
    color: #624cf5;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
}

.signup_text {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #0e0b26;
}
</style>