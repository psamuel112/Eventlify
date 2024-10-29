<template>
  <div class="px-md-16 px-8" v-if="ticket">
    <p class="mt-8  header">Event Booking</p>
    <div>
      <div class="d-block d-md-flex align-center justify-between">
        <div>
          <p class="sub_header">Below is the summary of your booking</p>
        </div>
        <div class="d-flex mb-4 gap-4">
          <div
            :class="state == 'personalData' ? 'tab__active' : 'white'"
            @click="state = 'personalData'"
            class="d-flex gap-4 align-center"
          >
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
            <p class="data_text">Personal Data</p>
            <img src="../../../assets/images/svg/next.svg" alt="" />
          </div>
          <div
            :class="state == 'ticket' ? 'tab__active' : 'white'"
            @click="state = 'ticket'"
            class="d-flex gap-4 align-center"
          >
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
            <p class="data_text">Select Tickets</p>
            <img src="../../../assets/images/svg/next.svg" alt="" />
          </div>
          <div
            :class="state == 'summary' ? 'tab__active' : 'white'"
            @click="state = 'summary'"
            class="d-flex gap-4 align-center"
          >
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
            <p class="data_text">Summary</p>
            <img src="../../../assets/images/svg/next.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="wrapper px-6 py-6">
          <div class="card_wrapper">
            <img
              class="card_img card_wrapper"
              v-if="singleEvent.images && singleEvent.images.length > 0"
              :src="singleEvent.images[0].url"
            />
            <div class="px-6 py-6">
              <div class="d-flex gap-4">
                <p class="month_text">
                  {{ formatMonth(singleEvent.start_date) }}
                </p>
                <p class="card_text">{{ singleEvent.name }}</p>
              </div>
              <div class="d-flex gap-4">
                <p class="date_text">{{ formatDay(singleEvent.start_date) }}</p>
                <p class="company_text">By Realvest</p>
              </div>
            </div>
          </div>
          <div>
            <p class="section_title">About</p>
            <p class="about_text">
              {{ singleEvent.description }}
            </p>
          </div>
          <div class="d-flex gap-4 flex-wrap">
            <div
              v-for="(tag, index) in singleEvent.tags"
              :key="index"
              class="tags_wrapper d-flex"
            >
              <p class="body3_medium dark1">#{{ tag }}</p>
            </div>
          </div>
          <div class="">
            <p class="section_title my-6">Date & Time</p>
            <div
              class="d-flex wrapper gap-14 justify-between px-4 py-4 datetime_wrapper"
            >
              <div>
                <p class="date_card_text">
                  {{ formatDate(singleEvent.start_date) }}
                </p>
                <p
                  v-if="singleEvent.start_time && singleEvent.end_time"
                  class="about_text"
                >
                  {{ convertTo12Hour(singleEvent.start_time) }} -
                  {{ convertTo12Hour(singleEvent.end_time) }}
                </p>
              </div>
              <div>
                <img src="../../../assets/images/svg/bluecalander.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <p class="section_title my-6">Location</p>
            <div class="d-flex gap-6">
              <img src="../../../assets/images/svg/bluelocation.svg" alt="" />
              <p class="sub_header">
                {{ singleEvent.location }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="state == 'personalData'" class="wrapper px-6 py-6">
          <p class="header my-4">Personal Data</p>
          <div>
            <div class="d-md-flex gap-4">
              <input
                v-model="form.first_name"
                placeholder="First name"
                type="text"
                class="w-100 mt-2 input px-2 py-2"
              />
              <input
                v-model="form.last_name"
                placeholder="Last name"
                type="text"
                class="w-100 mt-2 input px-2 py-2"
              />
            </div>
            <input
              v-model="form.email"
              placeholder="Email address"
              type="text"
              class="w-100 mt-2 input px-2 py-2"
            />
            <input
              v-model="form.phone"
              placeholder="Phone number"
              type="text"
              class="w-100 mt-2 input px-2 py-2"
            />
          </div>
          <div>
            <div class="">
              <v-checkbox>
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
              <v-checkbox>
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
              @click="handleContinue"
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

        <div v-if="state == 'ticket'" class="wrapper px-6 py-6">
          <p class="my-4 header">Select Tickets</p>
          <div v-for="(ticket, index) in form.tickets" :key="index">
            <div class="d-flex">
              <div @click="addTicket(ticket.name)" class="gap-4 pointer">
                <div class="ticket relative">
                  <div class="px-6 py-6 absolute">
                    <img class="" :src="purpleticket" />
                    <p class="ticket_title mt-3">{{ ticket.name }}</p>
                    <p class="ticket_note mb-3 mt-1">{{ ticket.plan }}</p>
                    <div class="dashed-line"></div>
                    <p class="ticket_price mt-3">
                      {{ ticket.price }}<span>/person</span>
                    </p>
                  </div>
                  <img class="" :src="purpleframe" />
                </div>
              </div>
            </div>

            <div class="d-flex mb-4 justify-space-between align-center">
              <p>{{ ticket.plan }} Tickets</p>
              <input
                class="ticket-input"
                v-model="form.tickets[index].quantity"
                type="number"
              />
            </div>
          </div>

          <div class="line mt-8 mb-8"></div>
          <div class="d-flex justify-between align-center">
            <p class="section_title">Total Amount</p>
            <p class="ticket_price">₦{{ totalAmount }}</p>
          </div>
          <v-btn
            block
            @click="submitTicket"
            flat
            border
            class="text-none mt-8"
            size="large"
            color="#624cf5"
          >
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
                  <p class="mb-4">{{ singleEvent.name }}</p>
                  <p class="mb-4">{{ singleEvent.location }}</p>
                  <p class="mb-4">{{ formatDate(singleEvent.start_date) }}</p>
                  <p class="mb-4">
                    {{ convertTo12Hour(singleEvent.start_time) }}
                  </p>
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
                  <p class="mb-4">{{ plan }} x {{ quantity }}</p>
                  <p class="mb-4">₦{{ totalAmount }}</p>
                  <p class="mb-4">₦1222</p>
                </div>
              </div>
            </div>
            <div class="line mt-8 mb-8"></div>
            <div class="my-4 d-flex justify-between align-center">
              <p class="sub_header section_title">Total Amount</p>
              <p class="ticket_price">₦{{ totalAmount }}</p>
            </div>
            <paystack
              buttonText="Pay Online"
              :publicKey="publicKey"
              :email="form.email"
              :lastname="form.last_name"
              :firsnName="form.first_name"
              :phone="form.phone"
              :amount="amount"
              :reference="reference"
              :onSuccess="onSuccessfulPayment"
              :onCancel="onCancelledPayment"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Paystack from '~/components/payment/paystack.vue';
import purpleframe from '@/assets/images/png/Subtract.png';
import purpleticket from '@/assets/images/svg/buyticket.svg';
import darkframe from '@/assets/images/png/darkframe.png';
import darkticket from '@/assets/images/svg/darkticket.svg';
import paystack from 'vue3-paystack';
import { nanoid } from 'nanoid'; // if using nanoid
import { useEventStore } from '~/store/Event';
import { useEventBookingStore } from '~/store/EventBooking';
import { useRoute, useRouter } from 'nuxt/app';

const booking = useEventBookingStore();
definePageMeta({
  layout: 'user-event',
});
const name =
  JSON.parse(localStorage.getItem('user'))?.user?.name.split(' ')[0] || 'Guest';
console.log(name);
const ticket = ref([
  { id: 1, name: 'VIP', plan: 'Premium', price: 100 },
  { id: 2, name: 'General', plan: 'Standard', price: 50 },
]);

const route = useRoute();

const ID = route.params.id;
const singleEvent = ref('');
const event = useEventStore();

const form = ref({
  email: '',
  phone: '',
  last_name: '',
  first_name: '',
  event_id: route.params.id,
  tickets: [], // Initialize as an empty array
  payment_method: '',
});

onMounted(async () => {
  try {
    const data = await event.fetchAllEventsById(ID);
    singleEvent.value = data;
    console.log('booking-event', singleEvent);
    const tickets = await event.fetchTicketsById(ID);
    form.value.tickets = tickets;
    console.log('booking-ticket', tickets);
  } catch (error) {
    console.log(error);
  } finally {
  }
});

// calculate ticket  price
const multipliedResult = (price, quantity) => {
  return quantity * price;
};
//Submit booking details
async function submitForm() {
  try {
    const response = await booking.eventBooking(form.value);
    if (response) {
      // Navigate to dashboard
      // route.push('/dashboard');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
}



function submitTicket() {
  localStorage.setItem('event-form', JSON.stringify(form.value));
  state.value = 'summary';
}

const formatMonth = (fullDateString) => {
  const date = new Date(fullDateString);
  const month = date.toLocaleString('default', { month: 'short' }); // Full month name
  return month; // Return the formatted month
};
const formatDay = (fullDateString) => {
  const date = new Date(fullDateString);
  const day = date.getDate(); 
  return day; 
};
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-GB', options);
}
function convertTo12Hour(timeString) {
  // Assuming the timeString is in "HH:mm" format (e.g., "14:30")
  const [hours, minutes] = timeString.split(':');
  const period = +hours >= 12 ? 'PM' : 'AM';
  const hour12 = +hours % 12 || 12; // Converts 0 to 12 for midnight
  return `${hour12}:${minutes} ${period}`;
}

const totalAmount = computed(() => {
  return form.value.tickets.reduce((total, ticket) => {
    return total + parseFloat(ticket.price) * ticket.quantity;
  }, 0);
});

const publicKey = import.meta.env.VITE_VUE_APP_PAYSTACK_KEY;
// Expressed in lowest denomination, so 1000kobo is equivalent to 10 Naira
const amount = computed(() => totalAmount.value * 100); // Paystack amount in kobo
const email = computed(() => form.value.email);
const first_name = computed(() => form.value.first_name);
const last_name = computed(() => form.value.last_name);
const phone = computed(() => form.value.phone)
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
const localStorage =

// Handle successful payment
function onSuccessfulPayment(response) {
  console.log(response);
}

// Handle payment cancellation
function onCancelledPayment() {
  console.log('Payment cancelled by user');
}

const state = ref('personalData');
const model = ref(null);
const isenable = ref(true);

const handleContinue = () => {
  console.log('here');
  state.value = 'ticket';
  // You can add any validation or actions here before transitioning to 'ticket'
  if (isenable.value) {
    state.value = 'ticket'; // Change the state
    saveForm();
    // Additional actions can be performed here, like logging or analytics
  }
};

// Add a ticket type to the selectedTickets array if it hasn't been selected yet
const addTicket = (type) => {
  const alreadySelected = selectedTickets.value.find((t) => t.type === type);
  if (!alreadySelected) {
    selectedTickets.value.push({ type });
  }
};

// onMounted(() => {
//   const savedForm = JSON.parse(localStorage.getItem('formData'));
//   if (savedForm) {
//     Object.assign(form, savedForm);
//   }
// });

const savedData = () => {
  const currentData = JSON.parse(localStorage.getItem('form')) || {};
  const updatedData = {
    ...currentData,
    ...form,
  };
  localStorage.setItem('form', JSON.stringify(updatedData));
  console.log('info', updatedData);
};
const saveForm = (form) => {
  //  if (!validateForm()) return; {
  savedData();
  //  }
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 34% 66%;
  gap: 1.5rem;
}

@media (max-width: 1023px) and (min-width: 768px) {
  .container {
    grid-template-columns: 50% 50%;
    /* Adjust to equal halves for medium screens */
  }
}

/* For screens smaller than 768px (mobile devices) */
@media (max-width: 767px) {
  .container {
    grid-template-columns: 100%;
    /* Stack columns on top of each other for small screens */
  }
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
  color: #211b57;
}

.ticket_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #0e0b26;
  width: 144px;
}

.ticket-input {
  border: 1px solid #d7dfea;
  width: 56px;
  height: 40px;
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

.flex {
  display: flex;
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
