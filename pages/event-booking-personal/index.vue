<template>
  <div>
    <p class="mt-8 header">Event Booking</p>
    <div>
      <div class="d-flex align-center justify-between">
        <div>
          <p class="sub_header">Below is the summary of your booking</p>
        </div>
        <div class="d-flex gap-4">
          <div class="d-flex gap-4 align-center">
            <v-btn
              :icon="`mdi-numeric-${n}`"
              border
              height="28"
              variant="text"
              width="28"
              @click="toggle"
              color="#624cf5"
              >1</v-btn
            >
            <p>Personal Data</p>
            <img src="../../assets/images/svg/next.svg" alt="" />
          </div>
          <div class="d-flex gap-4 align-center">
            <v-btn
              :icon="`mdi-numeric-${n}`"
              border
              height="28"
              variant="text"
              width="28"
              @click="toggle"
              color="#624cf5"
              >2</v-btn
            >
            <p>Personal Data</p>
            <img src="../../assets/images/svg/next.svg" alt="" />
          </div>
          <div class="d-flex gap-4 align-center">
            <v-btn
              :icon="`mdi-numeric-${n}`"
              border
              height="28"
              variant="text"
              width="28"
              @click="toggle"
              color="#624cf5"
              >3</v-btn
            >
            <p>Personal Data</p>
            <img src="../../assets/images/svg/next.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="wrapper px-6 py-6">
          <div class="card_wrapper">
            <img class="w-100 card_wrapper_img" src="../../assets/images/png/booking.png" alt="" />
           <div class="px-6 py-6">
            <div class="d-flex gap-4">
              <p class="month_text">JUL</p>
              <p class="card_text">Birthday of the CEO</p>
            </div>
            <div class="d-flex gap-4">
              <p class="date_text">31</p>
              <p class="company_text">By Realvest</p>
            </div>
           </div>
           
          </div>
          <div>
            <p class="section_title">About</p>
            <p class="about_text">
              Join us in celebrating a momentous occasion as we honor and
              commemorate the birthday of our esteemed CEO at Realvest Company.
              It is a time of joy, appreciation, and reflection as we gather to
              honor the visionary leader who has been instrumental in guiding
              our company to unparalleled heights...
            </p>
          </div>
          <div class="d-flex gap-4 flex-wrap">
            <div v-for="tag in tags" :key="tag" class="tags_wrapper d-flex">
              <p class="tag_text">{{ tag.name }}</p>
            </div>
          </div>
          <div class="">
            <p class=" section_title my-6">Date & Time</p>
            <div
              class="d-flex wrapper gap-14 justify-between px-4 py-4 datetime_wrapper"
            >
              <div>
                <p class="date_card_text">Wednesday, 27 Nov 2022</p>
                <p class="about_text">07:00 PM - 10:00 PM</p>
              </div>
              <div>
                <img src="../../assets/images/svg/bluecalander.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <p class="section_title my-6">Location</p>
            <div class="d-flex gap-6">
              <img src="../../assets/images/svg/bluelocation.svg" alt="" />
              <p class="sub_header">
                The Living Gallery 1094 Broadway Lekki Phase 1
                Lagos, Nigeria.
              </p>
            </div>
          </div>
        </div>

        <div class="wrapper px-6 py-6">
          <p>Personal Data</p>
          <div>
            <div class="d-md-flex gap-4">
              <input
                placeholder="First name"
                type="text"
                class="w-100 mt-2 input px-2 py-2"
              />
              <input
                placeholder="Last name"
                type="text"
                class="w-100 mt-2 input px-2 py-2"
              />
            </div>
            <input
              placeholder="Email address"
              type="text"
              class="w-100 mt-2 input px-2 py-2"
            />
            <input
              placeholder="Phone number"
              type="text"
              class="w-100 mt-2 input px-2 py-2"
            />
          </div>
          <div>
            <div class="">
              <v-checkbox v-model="isenable">
                <template v-slot:label>
                  <div>
                    <p class="">
                      Keep me updated on more events and news from this event
                      organizer.
                    </p>
                  </div>
                </template></v-checkbox
              >
            </div>
            <div class="mt-n8">
              <v-checkbox v-model="isenable">
                <template v-slot:label>
                  <div>
                    <p class="">
                      Send me emails about the best events happening nearby or
                      online.
                    </p>
                  </div>
                </template></v-checkbox
              >
            </div>
            <div class="mt-n8">
              <v-checkbox v-model="isenable">
                <template v-slot:label>
                  <div>
                    <p class="">
                      I accept the Eventlify’s Terms of Service and Privacy
                      Policy.
                    </p>
                  </div>
                </template></v-checkbox
              >
            </div>
            <v-btn
              :disabled="!isenable"
              block
              flat
              border
              class="text-none"
              size="large"
              color="#624cf5"
            >
              Continue
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "user-event",
});
const model = ref(null);
const isenable = ref(true);

const tags = ref([
  {
    name: "#birthday2023",
  },
  {
    name: "#theCEO",
  },
  {
    name: "#Realvestevents",
  },
  {
    name: "#Onecommunity",
  },
  {
    name: "#billionCEO",
  },
  {
    name: "##Wiseze23",
  },
]);
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 34% 66%;
  gap: 1.5rem;
}
.date_card_text{
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #121933;
}
.tag_text{
font-size: 12px;
font-weight: 500;
line-height: 16px;
color: #3F434A;
}
.section_title{
font-size: 16px;
font-weight: 600;
line-height: 24px;
color: #0E0B26
}
.card_text{
font-size: 20px;
font-weight: 600;
line-height: 32px;
color: #0e0b26;
}
.month_text{
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #624CF5;
}
.about_text{
font-size: 14px;
font-weight: 500;
line-height: 20px;
color:#A29DAF;
}
.date_text{
font-size: 24px;
font-weight: 600;
line-height: 32px;
color: #0e0b26;
}
.company_text{
font-size: 16px;
font-weight: 600;
line-height: 24px;
color: #A29DAF;
}
.wrapper{
  border: 1px solid #E2E8F0;
  border-radius: 12px;
}
.card_wrapper{
  border: 1px solid #E2E8F0;
  border-radius: 16px;
}
.card_wrapper_img{
border-radius: 16px 16px 0 0;
}
.input {
  outline: none;
  border: 1px solid #eaeaef;
  border-radius: 8px;
}
.tags_wrapper {
  background-color: #f7f7fd;
  border-radius: 16px;
  width: fit-content;
  padding: 10px 16px 10px 16px;
}
.header {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #0e0b26;
}
.sub_header {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #a29daf;
}
</style>
