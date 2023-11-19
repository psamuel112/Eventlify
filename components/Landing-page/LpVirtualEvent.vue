<template>
    <div class="virtual_container py-20 px-8 px-md-16">
        <div>
            <div>
                <div class="d-flex">
                    <p class="primary_text mt-3 ml-md-6">Create Your Virtual Event in Just 5 Minutes</p>
                    <img class="primary_img  mb-24" src="../../assets/images/svg/splashdark.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="d-md-flex secondary_card mt-6">
            <div class="px-md-8 mb-8 mb-md-0 px-0">
                <img src="../../assets/images/svg/Frame.svg" alt="" />
                <p class="secondary_title mt-4">Create an Event</p>
                <p class="secondary_text mt-4">Choose a date, time and location for your event. Determine the purpose and
                    goals of the event, as well as the target audience and then create!</p>
            </div>
            <div class="px-md-8 mb-8 mb-md-0 px-0">
                <img src="../../assets/images/svg/Frame1.svg" alt="" />
                <p class="secondary_title mt-4">Share Your Event</p>
                <p class="secondary_text mt-4">Share the invitation with your intended audience through the chosen platform,
                    and follow up with any necessary reminders or updates.</p>
            </div>
            <div class="px-md-8 px-0" >
                <img src="../../assets/images/svg/Frame9.svg" alt="" />
                <p class="secondary_title mt-4">Earn on bought tickets</p>
                <p class="secondary_text mt-4">When your potential audience accesses your ticket, you earn a certain
                    percentage for every ticket someone buys via your link</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.primary_text {
    font-size: 48px;
    font-weight: 600;
    line-height: 64px;
    color: #ffffff;
    width: 50%
components/Landing-page/LpCreators.vue}
@media screen and (max-width: 1200px) {
  .primary_text {
    font-size: 36px;
    line-height: 48px;
    width: 75%
  }
}
@media screen and (max-width: 768px) {
  .primary_text {
    font-size: 36px;
    line-height: 48px;
    width: 100%
  }
}
@media screen and (max-width: 550px) {
  .primary_text {
    font-size: 24px;
    line-height: 32px;
    width: 100%
  }
  .primary_img{
    width: 24px
  }
}
.virtual_container {
    background-image: url(../../assets/images/png/virtualbg.png);
    background-size: cover;
}
.secondary_card {
    gap: 3rem;
}

.secondary_text {
    color: #EFEDFE;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}
.secondary_title {
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    text-align: left;
}
</style>