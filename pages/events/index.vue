<template>
  <div>
    <div class="px-6 px-md-16">
      <p class="heading_text mt-8 ml-4">Events</p>
      <div class="d-md-flex align-center justify-between">
        <div class="d-md-flex gap-4 align-center">
          <div style="width: 100%" class="">
            <EvSearchInput label="Search events" />
          </div>

          <div class="d-md-block d-none custom-dropdown px-2 py-2">
            <div class="dropdown-wrapper">
              <select
                v-model="selectedOption"
                class="dropdown-select"
                @change="handleChange"
              >
                <option value="option1">Upcoming Event</option>
                <option value="option2">Week</option>
                <option value="option3">Month</option>
              </select>
              <v-icon class="dropdown-icon mdi mdi-chevron-down" />
            </div>
          </div>
        </div>
        <div>
          <v-btn class="text-none d-md-block d-none create_btn">+ Create</v-btn>
        </div>
        <div class="d-flex pl-2 align-center d-md-none d-block">
          <div class="custom-dropdown px-2 py-2">
            <div class="dropdown-wrapper">
              <select
                v-model="selectedOption"
                class="dropdown-select"
                @change="handleChange"
              >
                <option value="option1">Upcoming Event</option>
                <option value="option2">Week</option>
                <option value="option3">Month</option>
              </select>
              <v-icon class="dropdown-icon mdi mdi-chevron-down" />
            </div>
          </div>
          <v-btn class="text-none create_btn_mobile">+ Create</v-btn>
        </div>
      </div>
      <div class="event pl-4 pl-md-4 pointer card_container">
        <div v-for="(event, index) in events" :key="index" class="pointer">
          <div
            style="cursor: pointer"
            @click="navigateToCard(event.id)"
            class="card mb-4 pointer"
          >
            <div class="image_wrapper">
              <img
                class="card_img"
                v-if="event.images && event.images.length > 0"
                :src="event.images[0].url"
              />
              <div v-if="event.is_online === 1">
                <v-btn class="text-none status_btn mr-6 mt-6" flat
                  >On Sale</v-btn
                >
              </div>
              <div v-else>
                <v-btn class="text-none ended_btn mr-6 mt-6" flat>Ended</v-btn>
              </div>
            </div>
            <div class="px-4 py-4">
              <div class="d-flex mb-4 align-center gap-4">
                <p class="card_text">
                  {{ event.start_date }} {{ event.start_time }}
                  {{ event.timezone }}
                </p>
                <img src="../../assets/images/svg/dot.svg" />
                <img src="../../assets/images/svg/ticket.svg" />
                <p class="card_text">
                  {{ event.tickets[0]?.plan_value || 0 }} sold
                </p>
              </div>
              <p class="card_heading mb-4">{{ event.description }}</p>
              <div class="d-flex gap-4">
                <img src="../../assets/images/svg/spot.svg" />
                <p v-if="event.online_location" class="card_text">Online</p>
                /
                <p v-if="event.location" class="card_text">Offline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ev-pagination
        :currentPage="currentPage"
        :totalRecords="total"
        @onchange="handlePaginateEvent"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EvHeader from '~/components/common/EvHeader.vue';
import EvSearchInput from '~/components/common/EvSearchInput.vue';
import eventcard1 from '../../assets/images/png/eventcard1.png';
import eventcard2 from '../../assets/images/png/eventcard2.png';
import eventcard3 from '../../assets/images/png/eventcard3.png';
import eventcard4 from '../../assets/images/png/eventcard4.png';
import EvPagination from '@/components/common/EvPagination.vue';
import { useEventStore } from '~/store/Event';
const event = useEventStore();
const events = ref('');
const form = ref(null);
const total = ref();
const perPage = ref(1);
const currentPage = ref(1);

onMounted(async () => {
  loadData({ page: 1, perPage: 6 });
});
definePageMeta({
  layout: 'dashboard',
});
async function loadData(e) {
  try {
    const data = await event.fetchEvents(e);
    events.value = data.data.data;

    // console.log(data.data.total);
    // console.log('events', events);
    currentPage.value = data.data.current_page;
    total.value = data.data.total;
    console.log(total.value);
  } catch (error) {
    console.error(error);
  }
}

async function handlePaginateEvent(e) {
  console.log(e);
  loadData({ page: e, perPage: 6 });
}

const selectedOption = ref('option1');

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
    time: '8, 8:45AMApr (WAT)',
    amount: '5 Sold',
    note: ' Building Wealth Through Real Estate',
    img: eventcard1,
    status: 'Online',
    state_color: 'orange',
    state_text: 'Ended',
  },
  {
    id: 2,
    time: '8, 8:45AMApr (WAT)',
    amount: '5 Sold',
    note: 'Celebrating the Co-Founder’s birthday',
    img: eventcard2,
    status: 'Online',
    state: 'active',
    state_text: 'On Sale',
    state_color: 'green',
  },
  {
    id: 3,
    time: '8, 8:45AMApr (WAT)',
    amount: '5 Sold',
    note: 'How Agriculture would come to play in today’s economy',
    img: eventcard3,
    status: 'Online',
    state: 'active',
    state_text: 'On Sale',
    state_color: 'green',
  },
  {
    id: 4,
    time: '8, 8:45AMApr (WAT)',
    amount: '5 Sold',
    note: 'How Agriculture would come to play in today’s economy',
    img: eventcard4,
    status: 'Online',
    state: 'active',
    state_text: 'On Sale',
    state_color: 'orange',
  },
]);
</script>

<style scoped>
.custom-dropdown {
  position: relative;
  /* Adjust the width as per your needs */
}

.dropdown-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  background-color: #f7f7fd;
}

.dropdown-select {
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #333;
  margin-right: 3rem;
  appearance: none;
  /* Remove default arrow */
  outline: none;
}

.dropdown-icon {
  position: absolute;
  right: 10px;
  font-size: 1.25rem;
  color: #666;
  margin-left: 8px;
  pointer-events: none;
  /* Ensures the icon is non-interactive */
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
  /* height: 380px; */
}

.status_btn {
  height: 46px;
  padding: 8px 16px 8px 16px;
  gap: 8px;
  border-radius: 8px;
  opacity: 0px;
  position: absolute;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  top: 0;
  right: 0;
  background-color: #24d164;
  color: #ffffff;
}

.ended_btn {
  height: 46px;
  padding: 8px 16px 8px 16px;
  gap: 8px;
  border-radius: 8px;
  opacity: 0px;
  position: absolute;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  top: 0;
  right: 0;
  background-color: #db6b2b;
  color: #ffffff;
}

.state_color-offline {
  background-color: #db6b2b;
  color: #ffffff;
}

.state_color-online {
}

.card_img {
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
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

  .image_wrapper {
    height: 210px;
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

.create_btn_mobile {
  width: 100px;
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
