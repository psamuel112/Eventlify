<template>
    <div>
        <div class="header_container  d-flex justify-space-between align-center">
            <div class="d-flex align-center  w-50">
                <p class="header_icon mr-8">Eventlify</p>
                <EvSearchInput label="Search events" />
            </div>
            <div class="d-flex align-center ">
                <button class="create_event mr-8">Create an event</button>
                <NuxtLink to="/signin">
                    <button class="login_btn mr-8">Login</button>
                </NuxtLink>
                <NuxtLink to="/signup">
                    <button class="signup_btn">Get Started</button>
                </NuxtLink>
            </div>
        </div> 
    </div>
</template>

<script setup>
import EvSearchInput from '~/components/common/EvSearchInput.vue';

</script>

<style scoped>
.header_container {
    padding: 12px 96px 12px 104px;
}

.header_icon {
    font-weight: 600;
    line-height: 32px;
    font-size: 24px;
}

.login_btn {
    padding: 16px 40px 16px 40px;
    border-radius: 12px;
    border: 1.5px solid #624CF5;
    font-size: 16px;
    line-height: 24px;
    color: #624CF5;
    font-weight: 700;
}

.signup_btn {
    padding: 16px 40px 16px 40px;
    border-radius: 12px;
    background-color: #624CF5;
    color: #ffffff;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
}

.create_event {
    color: #624CF5;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
}
</style>