<template>
  <div class="container mt-8">
    <div class="d-flex gap-4">
      <img src="../../assets/images/svg/Ellipse.svg" />
      <div>
        <p class="h5_semibold purple90">Hello Hendrix!👋🏽</p>
        <p class="body3_medium dark3">Hope you’re having a good day</p>
      </div>
    </div>
    <div class="d-flex gap-2 my-10">
      <v-btn class="text-none" flat border>
        <img src="../../assets/images/svg/allevent.svg" /> All Events</v-btn
      >
      <v-btn class="text-none" flat border>
        <img src="../../assets/images/svg/sports.svg" /> Sports</v-btn
      >
      <v-btn class="text-none" flat border>
        <img src="../../assets/images/svg/music.svg" />Music</v-btn
      >
      <v-btn class="text-none" flat border>
        <img src="../../assets/images/svg/realestate.svg" />All Events</v-btn
      >
      <v-btn class="text-none" flat border>
        <img src="../../assets/images/svg/businesses.svg" />Businesses</v-btn
      >
      <v-btn class="text-none" flat border>
        <img src="../../assets/images/svg/finance.svg" />Finance</v-btn
      >
      <v-btn class="text-none" flat border>
        <img src="../../assets/images/svg/art.svg" />Art</v-btn
      >
      <v-btn class="text-none" flat border>
        <img src="../../assets/images/svg/photography.svg" />Photography</v-btn
      >
      <v-btn class="text-none" flat border>
        <img src="../../assets/images/svg/academics.svg" />Academics</v-btn
      >
    </div>
    <div class="d-flex justify-between align-center">
      <p class="h5_semibold purple90">Popular events</p>
      <p class="h6_bold purple90">See all</p>
    </div>
    <div>
      <div class="card_container pointer gap-4 mb-10 mt-6">
        <div
          @click="navigateToCard(card.id)"
          class="card pointer mb-4"
          v-for="card in cards"
          :key="card"
        >
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
              <p class="body2_medium dark2">{{ card.time }}</p>
            </div>
            <p class="h4_semibold dark0 mb-4">{{ card.note }}</p>
            <div class="">
              <p class="body1_bold purple50">{{ card.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-8">
        <div class="d-flex mb-4 justify-between align-center">
          <p class="h5_semibold purple90">Nearby & Organizers</p>
          <p class="h6_bold purple90">See all</p>
        </div>
        <div class="organizer_container">
          <div>
            <img class="w-100" src="../../assets/images/png/map1.png" alt="" />
          </div>
          <div class="organizer_cards">
            <div
              class="follow_card px-6 py-8"
              v-for="followCard in followCards"
              :key="followCard"
            >
              <div class="text-center">
                <img class="mx-auto mb-2" :src="followCard.img" alt="" />
                <p class="mb-2 body_semibold purple90">{{ followCard.name }}</p>
                <p class="mb-4 body_regular dark2">
                  {{ followCard.followers }}
                </p>
                <v-btn class="follow_card_btn text-none" flat border>{{
                  followCard.follow_btn
                }}</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-8">
        <div class="d-flex mb-4 justify-between align-center">
          <p class="h5_semibold purple90">More events</p>
          <p class="h6_bold purple90">See all</p>
        </div>
        <div class=" ">
          <div class="more_events_cards">
            <div
              class="more_event"
              v-for="moreEvent in moreEvents"
              :key="moreEvent"
            >
              <div class="d-flex px-6 py-6 justify-between">
                <div class="d-flex gap-4">
                  <div>
                    <img class="" :src="moreEvent.img" alt="" />
                  </div>
                  <div class="">
                    <p class="mt-n1 h5_semibold purple90">
                      {{ moreEvent.name }}
                    </p>
                    <div class="d-flex mt-5 gap-2">
                      <img
                        src="../../assets/images/svg/calendarevent.svg"
                        alt=""
                      />
                      <p class="body3_medium dark2">{{ moreEvent.date }}</p>
                    </div>
                  </div>
                </div>
                <div class="mt-10">
                  <p class="purple50 body2_bold">{{ moreEvent.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EvHeader from "~/components/common/EvHeader.vue";
import EvSearchInput from "~/components/common/EvSearchInput.vue";
import eventcard1 from "../../assets/images/png/eventcard1.png";
import eventcard2 from "../../assets/images/png/eventcard2.png";
import eventcard3 from "../../assets/images/png/eventcard3.png";
import eventcard4 from "../../assets/images/png/eventcard4.png";
import frame15 from "../../assets/images/png/Frame15.png";
import frame16 from "../../assets/images/png/Frame16.png";
import frame17 from "../../assets/images/png/Frame17.png";
import frame18 from "../../assets/images/png/Frame18.png";
import event1 from "../../assets/images/png/p1.png";
import event2 from "../../assets/images/png/p2.png";
import event3 from "../../assets/images/png/p3.png";
import event4 from "../../assets/images/png/p4.png";
import { defineProps } from "vue";

import { ref } from "vue";
definePageMeta({
  layout: "user-event",
});

const selectedOption = ref("option1");

const cards = ref([
  {
    id: 1,
    time: "8:45AMApr (WAT)",
    note: "The Beginning of financial freedom for you",
    img: eventcard1,
    price: "N8,000",
    state_color: "green",
    state_text: "Today",
  },
  {
    id: 2,
    time: "8:45AMApr (WAT)",
    note: "Celebrating the Co-Founder’s birthday",
    img: eventcard2,
    price: "N8,000",
    state_text: "Trending",
    state_color: "red",
  },
  {
    id: 3,
    time: "8:45AMApr (WAT)",
    note: "The Art of Digital Marketing for better conversion",
    img: eventcard3,
    price: "N8,000",
    state_text: "Trending",
    state_color: "red",
  },
]);

const followCards = ref([
  {
    img: frame15,
    name: "Realvest",
    followers: "25k Followers",
    follow_btn: "Follow",
  },
  {
    img: frame16,
    name: "Rewin Studio",
    followers: "25k Followers",
    follow_btn: "Follow",
  },
  {
    img: frame17,
    name: "DC&Marvel",
    followers: "25k Followers",
    follow_btn: "Follow",
  },
  {
    img: frame15,
    name: "Arc Villa",
    followers: "25k Followers",
    follow_btn: "Follow",
  },
]);

const moreEvents = ref([
  {
    img: event1,
    name: "Gyutaro Reign: Holiday Special",
    date: "Dec 31, 10:00 PM (WAT)",
    price: "₦8,000",
  },
  {
    img: event2,
    name: "Gyutaro Reign: Holiday Special",
    date: "Dec 31, 10:00 PM (WAT)",
    price: "₦8,000",
  },
  {
    img: event3,
    name: "Gyutaro Reign: Holiday Special",
    date: "Dec 31, 10:00 PM (WAT)",
    price: "₦8,000",
  },
  {
    img: event4,
    name: "Gyutaro Reign: Holiday Special",
    date: "Dec 31, 10:00 PM (WAT)",
    price: "₦8,000",
  },
]);
const router = useRouter();
const navigateToCard = (id) => {
  router.push(`/user-event/${id}`);
};
</script>

<style lang="scss" scoped>
.container {
}

.organizer_container {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 36% 64%;
}
@media screen and (max-width: 768px) {
  .organizer_container {
    grid-template-columns: 1fr;
  }
}
.organizer_cards {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
@media screen and (max-width: 768px) {
  .organizer_cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 500px) {
  .organizer_cards {
    grid-template-columns: 1fr 1fr;
  }
}
.more_events_cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
@media screen and (max-width: 768px) {
  .more_events_cards {
    grid-template-columns: 1fr;
  }
}
.plan_btn:focus {
  color: #624cf5;
  border: 1.5px solid #a193f9;
  background-color: #f2f1fe;
}
.follow_card {
  border: 1px solid #e4e5e7;
  border-radius: 16px;
  max-width: 168px;
}
.more_event {
  border: 1px solid #e4e5e7;
  border-radius: 16px;
}
.editor {
  height: 12rem;
}
.follow_card_btn {
  padding: 10px, 24px, 10px, 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  border: 1.5px solid #624cf5;
  color: #624cf5;
}

.form_container {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}
.tag_wrapper {
  background-color: #f7f7fd;
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
.card_container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
@media screen and (max-width: 1200px) {
  .card_container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .card_container {
    grid-template-columns: 1fr;
  }
}
</style>
