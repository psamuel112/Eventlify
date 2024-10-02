<template>
  <div>
    <p class="mt-8 header">Event Booking</p>
    <div>
      <div class="d-flex align-center justify-between">
        <div>
          <p class="sub_header">Below is the summary of your booking</p>
        </div>
        <div class="d-flex mb-4 gap-4">
          <div :class="state == 'personalData' ? 'tab__active' : 'white'" @click="state = 'personalData'"
            class="d-flex gap-4 align-center">
            <v-btn :icon="`mdi-numeric-${n}`" border height="28" variant="text" width="28" @click="toggle"
              color="#624cf5">1</v-btn>
            <p class="data_text">Personal Data</p>
            <img src="../../assets/images/svg/next.svg" alt="" />
          </div>
          <div :class="state == 'ticket' ? 'tab__active' : 'white'" @click="state = 'ticket'"
            class="d-flex gap-4 align-center">
            <v-btn :icon="`mdi-numeric-${n}`" border height="28" variant="text" width="28" @click="toggle"
              color="#624cf5">2</v-btn>
            <p class="data_text">Select Tickets</p>
            <img src="../../assets/images/svg/next.svg" alt="" />
          </div>
          <div :class="state == 'summary' ? 'tab__active' : 'white'" @click="state = 'summary'"
            class="d-flex gap-4 align-center">
            <v-btn :icon="`mdi-numeric-${n}`" border height="28" variant="text" width="28" @click="toggle"
              color="#624cf5">3</v-btn>
            <p class="data_text">Summary</p>
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
            <p class="section_title my-6">Date & Time</p>
            <div class="d-flex wrapper gap-14 justify-between px-4 py-4 datetime_wrapper">
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
                The Living Gallery 1094 Broadway Lekki Phase 1 Lagos, Nigeria.
              </p>
            </div>
          </div>
        </div>

        <div v-if="state == 'personalData'" class="wrapper px-6 py-6">
          <p class="header my-4">Personal Data</p>
          <div>
            <div class="d-md-flex gap-4">
              <input placeholder="First name" type="text" class="w-100 mt-2 input px-2 py-2" />
              <input placeholder="Last name" type="text" class="w-100 mt-2 input px-2 py-2" />
            </div>
            <input placeholder="Email address" type="text" class="w-100 mt-2 input px-2 py-2" />
            <input placeholder="Phone number" type="text" class="w-100 mt-2 input px-2 py-2" />
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
                </template></v-checkbox>
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
                </template></v-checkbox>
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
                </template></v-checkbox>
            </div>
            <v-btn :disabled="!isenable" block flat border class="text-none" size="large" color="#624cf5">
              Continue
            </v-btn>
          </div>
        </div>

        <div v-if="state == 'ticket'" class="wrapper px-6 py-6">
          <p class="my-4 header">Select Tickets</p>
          <div class="d-flex gap-4">
            <div v-for="ticket in tickets" :key="ticket" class="ticket relative">
              <div class="px-6 py-6 absolute">
                <img class="" :src="ticket.img" />
                <p class="ticket_title mt-3">{{ ticket.title }}</p>
                <p class="ticket_note mb-3 mt-1">{{ ticket.note }}</p>
                <div class="dashed-line"></div>
                <p class="ticket_price mt-3">
                  {{ ticket.price }}<span>/person</span>
                </p>
              </div>
              <img class="" :src="ticket.frame" />
            </div>
          </div>
          <div>
            <div class="mt-8 d-flex justify-between align-center">
              <p class="ticket_text">Regular Tickets</p>
              <div class="d-flex mx-auto align-center">
                <button class="minus_btn">-</button>
                <div class="counter">
                  <p class="mt-2 text-center">2</p>
                </div>
                <button class="plus_btn">+</button>
                <img class="ml-2" src="../../assets/images/svg/delete.svg" />
              </div>
              <p class="price_text text-right">₦6,000</p>
            </div>
            <div class="mt-4 d-flex justify-between align-center">
              <p class="ticket_text">Vip Tickets</p>
              <div class="d-flex mx-auto align-center">
                <button class="minus_btn">-</button>
                <div class="counter">
                  <p class="mt-2 text-center">2</p>
                </div>
                <button class="plus_btn">+</button>
                <img class="ml-2" src="../../assets/images/svg/delete.svg" />
              </div>
              <p class="price_text text-right">₦10,000</p>
            </div>
          </div>
          <div class="line mt-8 mb-8"></div>
          <div class="d-flex justify-between align-center">
            <p class="section_title">Total Amount</p>
            <p class="ticket_price">₦16,000</p>
          </div>
          <v-btn block flat border class="text-none mt-8" size="large" color="#624cf5">
            Continue
          </v-btn>
        </div>

        <div v-if="state == 'summary'" class="wrapper px-6 py-6">
          <p class="my-4 header">Summary</p>
          <p class="mb-4">Below shows your event and payment summary</p>
          <div>
            <div>
              <p class="sub_header">Event</p>
              <div class="mt-4 d-flex justify-between align-center">
                <div>
                  <p class="mb-4">Title</p>
                  <p class="mb-4">Location</p>
                  <p class="mb-4">Date</p>
                  <p class="mb-4">Time</p>
                </div>
                <div class="text-right">
                  <p class="mb-4">The CEO’s birthday</p>
                  <p class="mb-4">Pertinence Place, Egbeda, Lagos</p>
                  <p class="mb-4">Saturday, 31 July 2023</p>
                  <p class="mb-4">7:00PM (WAT)</p>
                </div>
              </div>
            </div>
            <div>
              <p class="sub_header my-4">Payment</p>
              <div class="d-flex justify-between align-center">
                <div class="">
                  <p class="mb-4">Total tickets</p>
                  <p class="mb-4">Subtotal</p>
                  <p class="mb-4">VAT</p>
                </div>
                <div class="text-right">
                  <p class="mb-4">2 Regular & 1 VIP</p>
                  <p class="mb-4">₦ 16,000</p>
                  <p class="mb-4">₦ 1,250</p>
                </div>
              </div>
            </div>
            <div class="line mt-8 mb-8"></div>
            <div class="my-4 d-flex justify-between align-center">
              <p class="sub_header section_title">Total Amount</p>
              <p class="ticket_price">₦16,000</p>
            </div>
            <paystack buttonText="Pay Online" :publicKey="publicKey" :email="email" :amount="amount"
              :reference="reference" :onSuccess="onSuccessfulPayment" :onCancel="onCancelledPayment" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Paystack from "~/components/payment/paystack.vue";
import purpleframe from "../../assets/images/png/Subtract.png";
import purpleticket from "../../assets/images/svg/buyticket.svg";
import darkframe from "../../assets/images/png/darkframe.png";
import darkticket from "../../assets/images/svg/darkticket.svg";
import paystack from "vue3-paystack";
import { nanoid } from "nanoid"; // if using nanoid

const publicKey = ref('pk_test_25fe56e27d7d24435f8dd16d46df0a01b14905d9');
const amount = ref(1000); // Expressed in lowest denomination, so 1000kobo is equivalent to 10 Naira
const email = ref('somteacodes@gmail.com');
const firstname = ref('Somtea'); // optional field
const lastname = ref('Codes'); // optional field

// Generate the reference using nanoid or JS logic
const reference = computed(() => {
  return nanoid(15); // Generates a 15 character random reference using nanoid
  /*
    Uncomment and use this if you prefer using plain JavaScript to generate the reference:
    
    let randomRef = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 15; i++) {
      randomRef += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomRef;
  */
});

// Handle successful payment
function onSuccessfulPayment(response) {
  console.log(response);
}

// Handle payment cancellation
function onCancelledPayment() {
  console.log("Payment cancelled by user");
}
definePageMeta({
  layout: "user-event",
});
const state = ref("personalData");
const model = ref(null);
const isenable = ref(true);
const tickets = ref([
  {
    title: "Regular",
    note: "Admission to the in-person drink & draw.",
    price: "₦8,000",
    img: purpleticket,
    frame: purpleframe,
  },
  {
    title: "Regular",
    note: "Admission to the in-person drink & draw.",
    price: "₦8,000",
    img: purpleticket,
    frame: purpleframe,
  },
  {
    title: "Regular",
    note: "Admission to the in-person drink & draw.",
    price: "₦8,000",
    img: darkticket,
    frame: darkframe,
  },
]);
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

.minus_btn {
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 8px, 0px, 0px, 8px;
  border: 1px solid #e2e8f0;
  color: #a29daf;
}

.data_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #211B57;
}

.ticket_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #0e0b26;
  width: 144px;
}

.plus_btn {
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 0px, 8px, 8px, 0px;
  border: 1px solid #e2e8f0;
  color: #a29daf;
}

.counter {
  width: 56px;
  height: 40px;
  padding: 8px, 0px, 8px, 0px;
  border: 1px solid #e2e8f0;
}

.ticket {
  max-width: 164px;
}

.dashed-line {
  border: 1px dashed #624cf5;
}

.date_card_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #121933;
}

.price_text {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #624cf5;
  width: 144px;
}

.tag_text {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #3f434a;
}

.ticket_title {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #121933;
}

.ticket_note {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #717585;
}

.ticket_price {
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: #624cf5;
}

.ticket_price span {
  color: #624cf5;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.30000001192092896px;
  text-align: center;
}

.section_title {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #0e0b26;
}

.card_text {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #0e0b26;
}

.month_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #624cf5;
}

.about_text {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #a29daf;
}

.data_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #0e0b26;
}

.company_text {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #a29daf;
}

.wrapper {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

.card_wrapper {
  border: 1px solid #e2e8f0;
  border-radius: 16px;
}

.card_wrapper_img {
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
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #0e0b26;
}

.sub_header {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #0e0b26;
}

.line {
  border: 1px solid #e2e8f0;
}
</style>
