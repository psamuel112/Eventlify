<template>
    <div class="">
      <div class="relative">
        <div class="absolute arrow w-100 px-24 justify-between d-flex">
          <img class="backward" src="../../assets/images/png/back.png" alt="" />
          <img class="forward" src="../../assets/images/png/forward.png" alt="" />
        </div>
        <img src="../../assets/images/png/detailsImg.png" alt="" />
      </div>
      <div class="secondary_wrapper px-8 px-md-16 py-8">
        <div class="">
          <div>
            <p class="h3_semibold purple90">The Birthday of the CEO</p>
            <p class="h6_semibold dark3">By<span class="purple50"> Realvest</span></p>
            <p class="body2_medium dark3">
              Join us in celebrating a momentous occasion as we honor and
              commemorate the birthday of our esteemed CEO at Realvest Company. It
              is a time of joy, appreciation, and reflection as we gather to honor
              the visionary leader who has been instrumental in guiding our
              company to unparalleled heights. This birthday celebration holds
              immense significance for us as it presents a unique opportunity to
              honor and commemorate the achievements of our visionary leader. Our
              CEO's unwavering dedication, exceptional leadership, and
              forward-thinking approach have played a pivotal role in propelling
              Realvest Company to unparalleled heights in the in.
            </p>
          </div>
          <div>
            <p class="h5_semibold dark0 my-6">Date & Time</p>
            <div class="d-flex gap-14 justify-between px-4 py-4 datetime_wrapper">
              <div>
                <p class="h6_medium purple90">Wednesday, 27 Nov 2022</p>
                <p class="body3_medium dark3">07:00 PM - 10:00 PM</p>
              </div>
              <div>
                <img src="../../assets/images/svg/bluecalander.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <p class="h5_semibold dark0 my-6">Location</p>
            <div class="d-flex gap-6">
              <img src="../../assets/images/svg/bluelocation.svg" alt="" />
              <p class="h6_medium dark3">
                The Living Gallery 1094 Broadway Lekki Phase 1,<br />
                Lagos, Nigeria.
              </p>
            </div>
          </div>
          <div>
            <v-btn class="h6_semibold purple50 mt-6" flat>Show map</v-btn>
            <img src="../../assets/images/png/Maps.png" alt="" />
          </div>
          <div>
            <p class="h5_semibold dark0  my-6">More Info</p>
            <p class="body2_medium dark3">
              Join us in celebrating a momentous occasion as we honor and
              commemorate the birthday of our esteemed CEO at Realvest Company. It
              is a time of joy, appreciation, and reflection as we gather to honor
              the visionary leader who has been instrumental in guiding our
              company to unparalleled heights... Read more
            </p>
          </div>
          <div>
            <p class="h5_semibold dark0  my-6">Tags</p>
            <div class="d-flex gap-4 flex-wrap">
              <div v-for="tag in tags" :key="tag" class="tags_wrapper d-flex">
                <p class="body3_medium dark1">{{ tag.name }}</p>
              </div>
            </div>
          </div>
          <div>
            <p class="h5_semibold dark0 my-6">Organizer</p>
            <div class="more_event justify-between py-4 px-4 align-center d-flex">
              <div class="d-flex">
                <div>
                  <img src="../../assets/images/png/p3.png" alt="" />
                </div>
                <div class="mr-16 ml-4">
                  <p class="purple90 h6_semibold">Realvest Global Technologies</p>
                  <p class="body4_medium dark2">25K Followers</p>
                </div>
              </div>
              <div class="">
                <v-btn flat border class="follow_btn text-none">Follow</v-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="d-flex gap-6 float-right">
            <img src="../../assets/images/svg/love.svg" alt="" />
            <img src="../../assets/images/svg/share.svg" alt="" />
          </div>
          <div class="ticket_wrapper mt-12 px-6 py-6">
            <p class="body3_medium dark3">Ticket base price</p>
            <p class="h4_bold purple50 mb-6">₦8,000</p>
            <div class="d-flex gap-2 px-6 py-6 ticket_note_container">
              <img src="../../assets/images/svg/ticketnote.svg" alt="" />
              <p class="body3_medium yellow">
                Note that ticket price varies based on its type (that is regular,
                premium, VIP, etc.)
              </p>
            </div>
            <div class="py-6">
                <v-divider border-opacity-100></v-divider>
              </div>
              <nuxt-link to="/event-booking-tickets">
                <v-btn border flat class="w-100  follow_btn text-none"> Buy Ticket </v-btn>
              </nuxt-link>
           
          </div>
        </div>
      </div>
      <div class="px-8 px-md-16">
        <div class="d-flex  justify-between align-center">
          <p class="h5_semibold purple90">Similar events</p>
          <p class="h6_bold purple50">See all</p>
        </div>
        <div class="card_container w-100 gap-4 mb-10">
          <div class="w-100 card mb-4" v-for="card in cards" :key="card">
            <div class="image_wrapper">
              <img class="card_img" :src="card.img" />
              <v-btn
                class="text-none status_btn ml-6 mt-6"
                :class="`state_color-${card.state_color}`"
                flat
                >{{ card.state_text }}</v-btn
              >
            </div>
            <div class="px-4 py-4">
              <div class="d-flex mb-4 align-center gap-4">
                <p class="body2_medium">{{ card.time }}</p>
              </div>
              <p class="h4_semibold dark0 mb-4">{{ card.note }}</p>
              <div class="">
                <p class="body1_bold purple50">{{ card.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import eventcard1 from "../../assets/images/png/eventcard1.png";
  import eventcard2 from "../../assets/images/png/eventcard2.png";
  import eventcard3 from "../../assets/images/png/eventcard3.png";
  import eventcard4 from "../../assets/images/png/eventcard4.png";
  definePageMeta({
    layout: "event-details",
  });
  
  
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
  const cards = ref([
    {
      time: "8:45AMApr (WAT)",
      note: "The Beginning of financial freedom for you",
      img: eventcard1,
      price: "N8,000",
      state_color: "green",
      state_text: "Today",
    },
    {
      time: "8:45AMApr (WAT)",
      note: "Celebrating the Co-Founder’s birthday",
      img: eventcard2,
      price: "N8,000",
      state_text: "Trending",
      state_color: "red",
    },
    {
      time: "8:45AMApr (WAT)",
      note: "The Art of Digital Marketing for better conversion",
      img: eventcard3,
      price: "N8,000",
      state_text: "Trending",
      state_color: "red",
    },
  ]);
  </script>
  
  <style lang="scss" scoped>
  .arrow {
    top: 40%;
  }
  .secondary_wrapper {
    display: grid;
    grid-template-columns: 58% 33%;
    gap: 5rem;
  }
  @media screen and (max-width: 768px) {
    .secondary_wrapper {
      grid-template-columns: 1fr;
    }
  }
  .datetime_wrapper {
    border: 1px solid #e4e5e7;
    border-radius: 12px;
    width: fit-content;
  }
  .tags_wrapper {
    background-color: #f7f7fd;
    border-radius: 16px;
    width: fit-content;
    padding: 10px 16px 10px 16px;
  }
  .more_event {
    border: 1px solid #e4e5e7;
    border-radius: 12px;
    width: fit-content;
  }
  .card {
    border-radius: 16px;
    border: 1px solid #e2e8f0;
  }
  .image_wrapper {
    position: relative;
    object-fit: fill;
  }
  .status_btn {
    position: absolute;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    top: 0;
    left: 0;
  }
  .state_color-red {
    background-color: #ed4f59;
    color: #ffffff;
  }
  .state_color-green {
    background-color: #24d164;
    color: #ffffff;
  }
  .card_img {
    border-radius: 16px 16px 0 0;
    object-fit: cover;
    width: 100%;
  }
  .card_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1200px) {
    .card_container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 768px) {
    .card_container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 550px) {
    .card_container {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }
  .follow_btn {
    background-color: #624cf5;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  }
  .ticket_wrapper {
    border-radius: 16px;
    border: 1px solid #e2e8f0;
  }
  .ticket_note_container {
    background-color: #fff8e8;
    border-radius: 12px;
  }
  </style>
  