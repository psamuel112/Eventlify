<template>
  <div>
    <div class="px-8 px-md-16">
      <p class="heading_text mt-8 ml-4">Events</p>
      <div class="d-flex align-center justify-between">
        <div class="d-flex gap-4 align-center">
          <div>
            <EvSearchInput label="Search events" />
          </div>
          <div class="">
            <v-btn flat class="text-none list_btn" pointer>
              <img src="../../assets/images/svg/listicon.svg" />
              <p>List</p>
            </v-btn>
          </div>
          <div>
            <v-btn flat class="text-none grid_btn">
              <img src="../../assets/images/svg/gridicon.svg" />
              <p>Grid</p>
            </v-btn>
          </div>
          <div class="custom-dropdown px-2 py-2">
            <select
              density="compact"
              label="Compact"
              class="v-btn v-btn--small text-none"
              v-model="selectedOption"
              @change="handleChange"
            >
              Upcoming Event
              <option class="text-none" value="option1">Upcoming Event</option>
              <option value="option2">Week</option>
              <option value="option3">Month</option>
            </select>
            <div class="append-icon ml-8">
              <v-icon icon="mdi-chevron-down" />
            </div>
          </div>
        </div>
        <div>
          <v-btn class="text-none create_btn">+ Create</v-btn>
        </div>
      </div>
      <div class="event  pointer card_container">
        <div
        v-for="(event, index) in events" :key="index"
        class=" pointer">
          <div
          style="cursor: pointer"
          @click="navigateToCard(event.id)" class="card mb-4 pointer">
            <div class="image_wrapper">
              <img
                class="card_img"             
                :src="event.image_url"
              />
              <v-btn
                class="text-none status_btn mr-6 mt-6"
                :class="`state_color-${event.is_online}`"
                flat
                >{{ event.event_type }}</v-btn
              >
            </div>
            <div class="px-4 py-4">
              <div class="d-flex mb-4 align-center  gap-4">
                <p class="card_text">
                  {{ event.start_date }} {{ event.start_time }} {{
                    event.timezone
                  }}
                </p>
                <img src="../../assets/images/svg/dot.svg" />
                <img src="../../assets/images/svg/ticket.svg" />
                <p class="card_text">{{ event.tickets.price }} sold</p>
              </div>
              <p class="card_heading mb-4">{{ event.description }}</p>
              <div class="d-flex gap-4">
                <img src="../../assets/images/svg/spot.svg" />
                <p v-if="event.is_online = true" class="card_text">Online</p>
                <p v-if="event.is_online = false" class="card_text">Offline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import EvHeader from "~/components/common/EvHeader.vue";
import EvSearchInput from "~/components/common/EvSearchInput.vue";
import eventcard1 from "../../assets/images/png/eventcard1.png";
import eventcard2 from "../../assets/images/png/eventcard2.png";
import eventcard3 from "../../assets/images/png/eventcard3.png";
import eventcard4 from "../../assets/images/png/eventcard4.png";
import { useEventStore } from "~/store/Event";
const event = useEventStore();
const events = ref("");
const form = ref(null);
onMounted(async () => {
  loadData();
});

async function loadData() {
  try {
    const data = await event.fetchEvents();
    events.value = data.data.data;
    console.log("events", events);
  } catch (error) {
    console.error(error);
  }
}

const selectedOption = ref("option1");

definePageMeta({
  layout: "dashboard",
});

// onMounted(() => {
//   const data = JSON.parse(localStorage.getItem("form")) || {};
//   if (data) {
//      form.value = data;
//    }
// });
const router = useRouter();

const navigateToCard = (id) => {
  router.push(`/events/${id}`);
};

const cards = ref([
  {
    id: 1,
    time: "8, 8:45AMApr (WAT)",
    amount: "5 Sold",
    note: " Building Wealth Through Real Estate",
    img: eventcard1,
    status: "Online",
    state_color: "orange",
    state_text: "Ended",
  },
  {
    id: 2,
    time: "8, 8:45AMApr (WAT)",
    amount: "5 Sold",
    note: "Celebrating the Co-Founder’s birthday",
    img: eventcard2,
    status: "Online",
    state: "active",
    state_text: "On Sale",
    state_color: "green",
  },
  {
    id: 3,
    time: "8, 8:45AMApr (WAT)",
    amount: "5 Sold",
    note: "How Agriculture would come to play in today’s economy",
    img: eventcard3,
    status: "Online",
    state: "active",
    state_text: "On Sale",
    state_color: "green",
  },
  {
    id: 4,
    time: "8, 8:45AMApr (WAT)",
    amount: "5 Sold",
    note: "How Agriculture would come to play in today’s economy",
    img: eventcard4,
    status: "Online",
    state: "active",
    state_text: "On Sale",
    state_color: "orange",
  },
]);
</script>

<style scoped>
.custom-dropdown {
  display: flex;
  align-items: center;
  border: 1px solid #e2e8f0;
  padding: 5px;
  border-radius: 5px;
  background-color: #f7f7fd;
}

.heading_text {
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  color: #0e0b26;
}

.prepend-icon,
.append-icon {
  display: flex;
  align-items: center;
  padding: 5px;
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
  right: 0;
}
.state_color-offline {
  background-color: #db6b2b;
  color: #ffffff;
}
.state_color-online {
  background-color: #24d164;
  color: #ffffff;
}

.card_img {
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  width: 100%;
}

.card_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #6b6478;
}

.card_heading {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #2a282b;
}

.card_container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}
@media screen and (max-width: 1200px) {
  .card_container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 680px) {
  .card_container {
    grid-template-columns: 1fr;
  }
}
.create_btn {
  width: 209px;
  height: 56px;
  padding: 16px, 40px, 16px, 40px;
  border-radius: 12px;
  background: #624cf5;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #ffffff;
}

.list_btn,
.grid_btn {
  background-color: #f7f7fd;
}
</style>
