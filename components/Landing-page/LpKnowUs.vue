<template>
    <div class="main_container">
        <div class="secondary_container d-md-flex">
            <div class="">
                <img class="w-100" src="../../assets/images/png/intro.png" alt="" />
            </div>
            <div class="text_container">
                <div>
                    <div class=" d-flex mb-5">
                        <p class="primary_text mt-3 ">Get to Know Us</p>
                        <img class="mb-10" src="../../assets/images/svg/splash.svg" alt="" />
                    </div>
                    <p class="secondary_text mb-8">At Eventlify, we are about bringing the very best<br> opportunity for
                        users (creators) to create content for <br> a set of audiences as well give everyone (audience) a
                        <br>chance at enjoying various categories of events </p>
                </div>
                <div class="d-flex align-center option">
                    <img src="../../assets/images/svg/tick-circle.svg" alt="" />
                    <p class="options_text ">Create event as a creator</p>
                </div>
                <div class="d-flex align-items-center mt-4 option">
                    <img src="../../assets/images/svg/tick-circle.svg" alt="" />
                    <p class="options_text ">Consume contents as a member of the audience</p>
                </div>
                <div class="d-flex align-center mt-4 option">
                    <img src="../../assets/images/svg/tick-circle.svg" alt="" />
                    <p class="options_text ">Make money as the audience attend your events</p>
                </div>
                <button class="start_btn mt-8">Get started</button>
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
    color: #2A282B;
}

.main_container {
    background-color: #ffffff;
    padding: 80px 104px 80px 104px;
    background-image: url(../../assets/images/png/group.png);
    background-position: right bottom 20px;
}

.secondary_container {
    gap: 6.6rem;
}

.secondary_text {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: #6B6478;
}

.text_container {
    margin-top: 4rem;
}

.option {
    gap: 1rem;
}

.options_text {
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    color: #6B6478;
}

.start_btn {
    padding: 16px 40px 16px 40px;
    border-radius: 12px;
    border: 1.5px solid #624CF5;
    font-size: 16px;
    line-height: 24px;
    color: #624CF5;
    font-weight: 700;
}
</style>






















