<template>
  <div class="container mt-8">
    <div class="m-auto text-center">
      <p class="header_text">Create An Event</p>
      <p class="sub_text mt-4 mb-8 px-8 px-md-28">
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
      <div class="d-flex">
        <div class="">
          <img
            class="w-100"
            src="../../assets/images/png/liveimage.png"
            alt=""
          />
        </div>
        <div class="d-flex  pl-4 py-4">
          <div class="">
            <div>
              <div>
                <p class="info_heading mb-3">Go Live</p>
                <p class="sub_text mb-3">
                  Bringing the best show to the limelight in a tech<br> meeting to
                  isnspire the young generation
                </p>
              </div>
              <div class="d-flex align-center mb-3 gap-4">
                <div class="d-flex align-center gap-2">
                  <img src="../../assets/images/svg/smallticket.svg" alt="" />
                  <p class="details_text">₦ 5,000</p>
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
              <div class="d-flex align-center gap-2">
                <img src="../../assets/images/svg/smallclock.svg" alt="" />
                <p class="details_text">Thursday 21stMarch, 2023 at 16: WAT</p>
              </div>
            </div>
          </div>
          <div class="text-right ml-20 justify-end">
            <p class="preview_text">Preview Link</p>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link to="go-live2">
      <div class="d-flex justify-end gap-4 mt-8 mb-16">
      <button class="text-none nxt_btn py-3 px-10">Go Live</button>
    </div>
    </nuxt-link>
   
  </div>
</template>

<script setup>

definePageMeta({
  layout: "events",
});

import { defineProps } from "vue";

</script>

<style lang="scss" scoped>
.container {
  max-width: 48.1rem;
}
.tag_text {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #6b6478;
}
.editor {
  height: 12rem;
}
.details_text {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #6b6478;
}
.preview_text {
  font-size: 14px;
  font-weight: 700;
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
.back_btn {
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  border: 1.5px solid #e2e8f0;
}
.input {
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.header_text {
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  color: #0e0b26;
}
.event_btn {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
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
.form_label {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #2a282b;
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
.zoom_text {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.image_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #2a282b;
}
</style>
