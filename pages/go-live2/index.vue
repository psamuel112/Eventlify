<template>
  <div class="container mt-8">
    <div class="m-auto text-center">
      <p class="header_text">Create An Event</p>
      <p class="sub_text mt-4 mb-8 px-28">
        Kindly fill out the details carefully and make sure to fill in required
        fields as you create your event of a lifetime
      </p>
    </div>
    <div>
      <p class="info_heading mb-1">Go Live</p>
      <p class="basic_sub pr-32 mb-4">
        Publish your events with your friends and the individuals you wish to
        invite
      </p>
    </div>
    <div class="form_container">
      <div class="px-8 py-8">
        <img class="w-100" src="../../assets/images/png/image.png" alt="" />
        <div class="form_container mt-8 mx-40 m-auto text-center">
          <div class="py-4">
            <div class="text-center">
              <p class="info_head">Go Live</p>
              <p class="px-8 sub_text">
                Bringing the best show to the limelight in a tech meeting to
                isnspire the young generation
              </p>
            </div>
            <div
              class="d-flex mt-8 align-center justify-center text-center mb-3 gap-4"
            >
              <div class="d-flex align-center gap-2">
                <img src="../../assets/images/svg/smallticket.svg" alt="" />
                <p class="details_text">₦ 5,000 - ₦ 10,000</p>
              </div>
              <div class="d-flex align-center gap-2">
                <img src="../../assets/images/svg/Group.svg" alt="" />
                <p class="details_text">7 attendes</p>
              </div>
              <div class="d-flex align-center gap-2">
                <img src="../../assets/images/svg/gps.svg" alt="" />
                <p class="details_text">Online</p>
              </div>
            </div>
            <div class="d-flex mb-8 justify-center align-center gap-2">
              <img src="../../assets/images/svg/smallclock.svg" alt="" />
              <p class="details_text">Thursday 21stMarch, 2023 at 16: WAT</p>
            </div>
            <div class="text-center">
              <p class="preview_text">Preview Link</p>
            </div>
          </div>
        </div>
        <div class="d-flex mt-10 gap-6">
          <div class="w-50">
            <p class="tags_head">Additional Info</p>
            <p class="info_text">
              Indulge in an unforgettable birthday celebration at a paid event
              in vibrant Lagos, Nigeria. Experience a lively atmosphere,
              delicious food, and exciting entertainment tailored to make your
              special day truly memorable.
            </p>
          </div>
          <div class="w-50">
            <p class="tags_head">Tags</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"> <v-btn flat class="text-none tag_wrapper">
              <p class="tag_btn_text">besttime</p>
              <p class="ml-4">x</p>
            </v-btn>
            <v-btn flat class="text-none tag_wrapper">
              <p class="tag_btn_text">happytime</p>
              <p class="ml-4">x</p>
            </v-btn>
            <v-btn flat class="text-none tag_wrapper">
              <p class="tag_btn_text">technology</p>
              <p class="ml-4">x</p>
            </v-btn>
            <v-btn flat class="text-none px-3 tag_wrapper">
              <p class="tag_btn_text">celebration</p>
              <p class="ml-4">x</p>
            </v-btn>
            <v-btn flat class="text-none  tag_wrapper">
              <p class="tag_btn_text">real estate</p>
              <p class="ml-4">x</p>
            </v-btn></div>
           
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-end gap-4 mt-8 mb-16">
      <button class="text-none nxt_btn py-3 px-10">Go Live</button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "events",
});

import { defineProps } from "vue";
const props = defineProps({
  layout: "events",
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 48.1rem;
}
.info_text {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #6b6478;
}

.details_text {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #6b6478;
}
.preview_text {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #624cf5;
  text-decoration: underline;
}
.nxt_btn {
  color: #ffffff;
  border-radius: 12px;
  background-color: #624cf5;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}


.header_text {
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  color: #0e0b26;
}

.form_heading {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #2a282b;
}
.sub_text {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #3f434a;
}
.form_container {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}
.tag_wrapper {
  background-color: #f7f7fd;

}
.info_heading {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #0e0b26;
}
.info_head {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #0e0b26;
}
.tags_head {
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: #0e0b26;
}

.basic_sub {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #6b6478;
}
.form_sub_text {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #a29daf;
}
.tag_btn_text {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #2a282b;
}
</style>
