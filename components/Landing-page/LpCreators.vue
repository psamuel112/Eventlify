<template>
    <div class="creator_container px-8 w- px-md-16">
        <div class="w-100 d-flex justify-center mb-16 mb-md-20 primary_wrapper">
            <p class="h1_semibold dark0  text-center">Giving our creators/audiences <br>a great experience</p>
            <img class="primary_img mr-8" src="../../assets/images/svg/splash.svg" alt="" />
        </div>
        <div class="d-md-flex card_wrapper">
            <i id="left" class="fa-solid fa-angle-left"></i>
            <div class="creator_card w-100 mb-4 mb-md-0 py-5">
                <img class="px-6" src="../../assets/images/svg/quote.svg" alt="" />
                <p class="text-left body2_medium dark1 mt-3 mb-9 px-6">“ Having to organize my birthday virtually was so easy. Kudos to the
                    creator of this
                    product”</p>
                <div class="px-6 d-flex  creator_details align-center">
                    <div>
                        <img src="../../assets/images/svg/creator1.svg" alt="" />
                    </div>
                    <div class="">
                        <p class="h6_semibold dark1">Wisdom Ezekiel</p>
                        <p class="h6_medium dark2 mt-1">Founder, Pertinence Group</p>
                    </div>
                </div>
            </div>
            <div class="creator_card w-100 mb-4 mb-md-0 py-5">
                <img class="px-6" src="../../assets/images/svg/quote.svg" alt="" />
                <p class="text-left body2_medium dark1 mt-3 mb-3 px-6">“ I was blown away by the quality experience I got using this
                    product. I organized my events seamlessly and my audience were pleased”</p>
                <div class="px-6 d-flex  creator_details align-center">
                    <div>
                        <img src="../../assets/images/svg/creator2.svg" alt="" />
                    </div>
                    <div class="">
                        <p class="h6_semibold dark1">Tunji Ademuyiwa</p>
                        <p class="h6_medium dark2 mt-1">CEO, DataFirst</p>
                    </div>
                </div>
            </div>
            <div class="creator_card w-100 mb-4 mb-md-0 py-5">
                <img class="px-6" src="../../assets/images/svg/quote.svg" alt="" />
                <p class="text-left body2_medium dark1 mt-3 mb-9 px-6">“ Omo, this Eventlify app is so goood. I’m definitely organizing more
                    events with it ”</p>
                <div class="px-6 d-flex  creator_details align-center">
                    <div>
                        <img src="../../assets/images/svg/creator3.svg" alt="" />
                    </div>
                    <div class="">
                        <p class="h6_semibold dark1">Olufemi Joshua</p>
                        <p class="h6_medium dark2 mt-1">Team Lead, Eventlify</p>
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
.creator_details {
    gap: 1rem;
}

.creator_card {
    background-color: #F7F7FD;
    border-radius: 12px;
}
.primary_img {
    margin-top: -7rem
}
@media screen and (max-width: 550px) {
  .primary_img {
    width: 24px;
    margin-top: -5rem; 
  }
}
.card_wrapper {
    gap: 1.5rem;
}

@media screen and (max-width: 768px) {
  .primary_text {
    font-size: 36px;
    line-height: 48px;
  }
}
@media screen and (max-width: 550px) {
  .primary_text {
    font-size: 24px;
    line-height: 32px;
  }
}
</style>