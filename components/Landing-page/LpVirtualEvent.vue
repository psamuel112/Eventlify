<template>
    <div class="virtual_container">
        <div>
            <div>
                <div class="d-flex">
                    <p class="primary_text mt-3">Create Your Virtual Event</p>
                    <img class="mb-10 primary_image" src="../../assets/images/svg/splashdark.svg" alt="" />
                </div>
                <p class="primary_text">in Just 5 Minutes</p>
            </div>
        </div>
        <div class="d-md-flex secondary_card mt-6">
            <div>
                <img src="../../assets/images/svg/Frame.svg" alt="" />
                <p class="secondary_title mt-4">Create an Event</p>
                <p class="secondary_text mt-4">Choose a date, time and location for your event.<br> Determine the purpose and
                    goals of the event, as<br> well as the target audience and then create!</p>
            </div>
            <div>
                <img src="../../assets/images/svg/Frame1.svg" alt="" />
                <p class="secondary_title mt-4">Share Your Event</p>
                <p class="secondary_text mt-4">Share the invitation with your intended audience<br> through the chosen platform,
                    and follow up with any<br> necessary reminders or updates.</p>
            </div>
            <div>
                <img src="../../assets/images/svg/Frame9.svg" alt="" />
                <p class="secondary_title mt-4">Earn on bought tickets</p>
                <p class="secondary_text mt-4">When your potential audience accesses your ticket,<br> you earn a certain
                    percentage for every ticket<br> someone buys via your link</p>
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
}
.virtual_container {
    background-image: url(../../assets/images/png/virtualbg.png);
    background-size: cover;

    padding: 80px 104px 80px 104px;
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