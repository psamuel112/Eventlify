<template>
    <div class="creator_container">
        <div class="d-flex justify-center primary_wrapper">
            <p class="primary_text text-center">Giving our creators/audiences <br>a great experience</p>
            <img class="primary_img" src="../../assets/images/svg/splash.svg" alt="" />
        </div>
        <div class="d-flex card_wrapper">
            <i id="left" class="fa-solid fa-angle-left"></i>
            <div class="creator_card w-100 py-5">
                <img class="px-6" src="../../assets/images/svg/quote.svg" alt="" />
                <p class="creator_text mt-3 mb-9 px-6">“ Having to organize my birthday virtually was so easy. Kudos to the
                    creator of this
                    product”</p>
                <div class="px-6 d-flex  creator_details align-center">
                    <div>
                        <img src="../../assets/images/svg/creator1.svg" alt="" />
                    </div>
                    <div class="">
                        <p class="creator_name">Wisdom Ezekiel</p>
                        <p class="creator_company mt-1">Founder, Pertinence Group</p>
                    </div>
                </div>
            </div>
            <div class="creator_card w-100 py-5">
                <img class="px-6" src="../../assets/images/svg/quote.svg" alt="" />
                <p class="creator_text mt-3 mb-3 px-6">“ I was blown away by the quality experience I got using this
                    product. I organized my events seamlessly and my audience were pleased”</p>
                <div class="px-6 d-flex  creator_details align-center">
                    <div>
                        <img src="../../assets/images/svg/creator2.svg" alt="" />
                    </div>
                    <div class="">
                        <p class="creator_name">Tunji Ademuyiwa</p>
                        <p class="creator_company mt-1">CEO, DataFirst</p>
                    </div>
                </div>
            </div>
            <div class="creator_card w-100 py-5">
                <img class="px-6" src="../../assets/images/svg/quote.svg" alt="" />
                <p class="creator_text mt-3 mb-9 px-6">“ Omo, this Eventlify app is so goood. I’m definitely organizing more
                    events with it ”</p>
                <div class="px-6 d-flex  creator_details align-center">
                    <div>
                        <img src="../../assets/images/svg/creator3.svg" alt="" />
                    </div>
                    <div class="">
                        <p class="creator_name">Olufemi Joshua</p>
                        <p class="creator_company mt-1">Team Lead, Eventlify</p>
                    </div>
                </div>
            </div>
            <i id="left" class="fa-solid fa-angle-right"></i>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped>
.creator_container {
    padding: 80px 104px 80px 104px;
}
.creator_text {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #3F434A;
}
.creator_details {
    gap: 1rem;
}
.creator_company {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    color: #6B6478;
}
.creator_name {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    color: #3F434A;
}
.primary_wrapper {
    margin-bottom: 5rem
}
.creator_card {
    background-color: #F7F7FD;
    border-radius: 12px;
}
.primary_img {
    margin-top: -7rem
}
.card_wrapper {
    gap: 1.5rem;
}
.primary_text {
    font-size: 48px;
    font-weight: 600;
    line-height: 64px;
    color: #2A282B;
}</style>