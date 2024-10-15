<template>
  <div v-if="eventId">
    <Navbar />
    <div class="px-6 px-md-16">
      <div class="my-10">
        <NuxtLink to="/dashboard">
          <div class="d-flex align-center">
          <img src="../../assets/images/svg/Ico4.svg" />
          <p class="h6_medium dark2 ml-6">Back to event dashboard</p>
        </div>
        </NuxtLink>   
        <p class="h3_semibold purple90">{{ eventId.name }}</p>
      </div>
      <div class="d-none d-md-block">
        <div class="card_container  justify-between d-flex px-6 py-6">
        <div class="d-flex card gap-4 pr-16">
          <div>
            <img src="../../assets/images/svg/card1.svg" />
          </div>
          <div>
            <p class="card_heading mb-4">Ticket Sales</p>
            <div class="d-flex mb-4 align-center gap-2">
              <div class="">
                <p class="price">N 120K</p>
              </div>
              <div class="percent_wrapper px-2 py-1">
                <p>&#8593; 28%</p>
              </div>
            </div>
            <p class="card_date">Last week <span>₦ 104,000</span></p>
          </div>
        </div>
        <v-divider class="border-opacity-100" vertical=""></v-divider>
        <div class="d-flex card pr-16 gap-4">
          <div>
            <img src="../../assets/images/svg/card1.svg" />
          </div>
          <div>
            <p class="card_heading mb-4">Total Attendees</p>
            <div class="d-flex mb-4 align-center gap-2">
              <div class="">
                <p class="price">53</p>
              </div>
              <div class="percent_wrapper px-2 py-1">
                <p>&#8593; 3%</p>
              </div>
            </div>
            <p class="card_date">Last week <span>₦ 104,000</span></p>
          </div>
        </div>
        <v-divider class="border-opacity-100" vertical=""></v-divider>
        <div class="d-flex card pr-16 gap-4">
          <div>
            <img src="../../assets/images/svg/card1.svg" />
          </div>
          <div>
            <p class="card_heading mb-4">Attendees Interactions</p>
            <div class="d-flex mb-4 align-center gap-2">
              <div class="">
                <p class="price">354</p>
              </div>
              <div class="percent_wrapper_red px-2 py-1">
                <p>&darr; 5%</p>
              </div>
            </div>
            <p class="card_date">Last week <span>₦ 104,000</span></p>
          </div>
        </div>
      </div>
      </div>


      <div class="d-md-none py-6">
      <div style="gap:12px;" class="mobile-cards ">
        <div class="card_container justify-between px-6 mb-8 py-6 d-flex card gap-4 ">
          <div>
            <img src="../../assets/images/svg/card1.svg" />
          </div>
          <div>
            <p class="card_heading mb-4">Ticket Sales</p>
            <div class="d-flex mb-4 align-center gap-2">
              <div class="">
                <p class="price">N 120K</p>
              </div>
              <div class="percent_wrapper px-2 py-1">
                <p>&#8593; 28%</p>
              </div>
            </div>
            <p class="card_date">Last week <span>₦ 104,000</span></p>
          </div>
        </div>
        
        <div class="card_container justify-between px-6 py-6 mb-8 d-flex card gap-4">
          <div>
            <img src="../../assets/images/svg/card1.svg" />
          </div>
          <div>
            <p class="card_heading mb-4">Total Attendees</p>
            <div class="d-flex mb-4 align-center gap-2">
              <div class="">
                <p class="price">53</p>
              </div>
              <div class="percent_wrapper px-2 py-1">
                <p>&#8593; 3%</p>
              </div>
            </div>
            <p class="card_date">Last week <span>₦ 104,000</span></p>
          </div>
        </div>
            
        <div class="card_container justify-between px-6 py-6 mb-8 d-flex card gap-4">
          <div>
            <img src="../../assets/images/svg/card1.svg" />
          </div>
          <div>
            <p class="card_heading mb-4">Audience Interactions</p>
            <div class="d-flex mb-4 align-center gap-2">
              <div class="">
                <p class="price">3,400</p>
              </div>
              <div class="percent_wrapper px-2 py-1">
                <p>&#8593; 28%</p>
              </div>
            </div>
            <p class="card_date">Last week <span>₦ 104,000</span></p>
          </div>
        </div>
      </div>
    </div>
    <button @click="toggleEvent" class="text-none status_btn mr-6 mt-6">
      {{ eventId.is_online ? 'Online' : 'Offline' }}
    </button>
      <div>
        <p class="h4_medium purple90 mt-10 mb-4">Share Ticket</p>
        <div>
          <label class="body3_medium dark0">Event URL</label>
          <div class="d-flex align-center">
            <input
            disabled
            label=""
            placeholder="entlify.com/birthday event"
            class="w-100 px-4 body2_medium dark3 input mb-4 py-2"
          />             
          <img class="ml-n10 mt-n4" src="../../assets/images/svg/copy.svg" />
        </div>
        </div>
        <p class="body3_medium dark0 mb-4 mt-4">share on social media</p>
        <div class="d-flex align-center icons">
          <img src="../../assets/images/svg/Facebook2.svg" />
          <img src="../../assets/images/svg/Messanger.png" />
          <img src="../../assets/images/svg/Twitter2.svg" />
          <img src="../../assets/images/svg/Linkedin2.svg" />
          <img src="../../assets/images/svg/Instagram2.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Navbar from "~/components/event/Navbar.vue";
import { useEventStore } from "~/store/Event";
import { useRoute } from "nuxt/app";
const route = useRoute();
const ID = route.params.id;
const event = useEventStore();
const eventId = ref("")

onMounted(async () => {
  try {
    const data = await event.fetchEventsById(ID);
    eventId.value = data;
    console.log("event", event);
  } catch (error) {
    console.log(error); 
  } finally {
  }
});
const toggleEvent = () => {
  eventId.value.is_online = !eventId.value.is_online; // Toggle the online status of the event
};
</script>

<style>
.card_heading {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #2a282b;
}
.card_date {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #a29daf;
}
.card_date span {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #a29daf;
}
.price {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #0e0b26;
}
.icons {
  gap: 20px;
}
.percent_wrapper p {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #24d164;
}
.sub_text {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #a29daf;
}
.card_container {
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}
.input {
  max-width: 468px;
  height: 48px;
  padding: 12px 16px 12px 16px;
  border-radius: 8px 0px 0px 0px;
  opacity: 0px;
  border: 1px solid #e2e8f0;
}
</style>
