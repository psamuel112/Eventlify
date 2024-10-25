<template>
    <div class="container mt-8">
      <div class="d-flex justify-between align-center">
        <p class="h5_semibold purple90">All Events</p>
      </div>
      <div>
        <div>
          <div class="event pl-4 ga-4 pl-md-4 card_img pointer card_contain" v-if="loading">
            <skeletonLoader 
              class="card_img ga-8" 
              v-for="index in 3" 
              :key="index" 
              :loaderWidth="imageWidth" 
              :loaderHeight="imageHeight"
            />
          </div>
        </div>
        <div class="card_contain pointer gap-4 mb-10 mt-6">
          <div
            @click="navigateToCard(card.id)"
            class="card pointer mb-4"
            v-for="card in allEvents.slice(0, 6)"
            :key="card"
          >
            <div class="image_wrapper">
              <img
                class="card_img"
                v-if="card.images && card.images.length > 0"
                :src="card.images[0].url"
              />
            </div>
            <div class="px-4 py-4">
              <div class="d-flex mb-4 align-center gap-4">
                <p class="body2_medium dark2">{{ card.start_time }}</p>
              </div>
              <p class="h4_semibold dark0 mb-4">{{ card.description }}</p>
            </div>
          </div>
        </div>   
      </div>
      <Loader v-if="isLoading" />
    </div>
  </template>
  
  <script setup>
  import Loader from "~/components/common/loader.vue";
  import skeletonLoader from '~/components/common/skeletonLoader.vue';
  import { useEventStore } from '~/store/Event';
  import { useAccountStore } from "~/store/Account";
  const Account = useAccountStore();
  import { useAuthentication } from '~/store/Authentication';
  const auth = useAuthentication();
  const account = ref("")
  const event = useEventStore();
  const allEvents = ref('');
  const loading = ref(true);
  const isLoading = ref(false)
  const typeEvent = ref('');
  const ticket = ref('');
  onMounted(async () => {
    loadData();
  });
  
  async function loadData(event_type_id) {
    try {
  
      // event card
      await new Promise(resolve => setTimeout(resolve, 2000));
      const data = await event.fetchAllEvents();
      allEvents.value = data.data.data;
      loading.value = false;
      console.log('events', allEvents);
      if (event_type_id) {
        isLoading.value = true
        await new Promise(resolve => setTimeout(resolve, 900));
        const filteredEvents = allEvents.value.filter(
          (event) => event.event_type_id === event_type_id
        );
        allEvents.value = filteredEvents;
        isLoading.value = false;
        console.log('Filtered events', allEvents);
      } else {
        allEvents.value = allEvents.value;
      }
    } catch (error) {
      console.error(error);
    }
  }
  function filterEvents(event_type_id) {
    loadData(event_type_id);
  }
  
  import { ref } from 'vue';
  definePageMeta({
    layout: 'user-event',
  });
  const router = useRouter();
  const navigateToCard = (id) => {
    router.push(`/user-event/${id}`);
  };
  </script>
  
  <style lang="scss" scoped>

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
z
  .card_img {
    border-radius: 16px 16px 0 0;
    object-fit: cover;
    width: 100%;
  }
  .card_contain {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .card_contain {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1200px) {
    .card_contain {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 768px) {
    .card_contain {
      grid-template-columns: 1fr;
    }
  }
  </style>
  