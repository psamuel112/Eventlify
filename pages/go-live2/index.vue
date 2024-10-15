<template>
  <div v-if="form" class="container mt-8">
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
    <div v-if="form" class="form_container w-100">
      <div class="px-8 py-8">
        <img v-if="form.images && form.images.length > 0" :src="form.images[0].url" alt="Event Image" class="w-100" />
        <div class=" w-100 mt-8 mx-40 mx-auto text-center">
          <div class="py-4">
            <div class="text-center">
              <p class="info_head">Go Live</p>
              <p class="px-8 sub_text">
                {{ form.description }}
              </p>
            </div>
            <div v-for="ticket in form.tickets" :key="ticket"
              class="d-flex mt-8 align-center justify-center text-center mb-3 gap-4">
              <div class="d-flex align-center gap-2">
                <img src="../../assets/images/svg/smallticket.svg" alt="" />
                <p class="details_text">{{ ticket.price }}</p>
              </div>
              <div class="d-flex align-center gap-2">
                <img src="../../assets/images/svg/Group.svg" alt="" />
                <p class="details_text">{{ ticket.plan_value }}</p>
              </div>
              <div class="d-flex align-center gap-2">
                <img src="../../assets/images/svg/gps.svg" alt="" />
                <p class="details_text">{{ form.is_online }}</p>
              </div>
            </div>
            <div class="d-flex mb-8 justify-center align-center gap-2">
              <img src="../../assets/images/svg/smallclock.svg" alt="" />
              <p class="details_text">
                {{ form.start_date }}, {{ form.start_time }}:
                {{ form.timezone }}
              </p>
            </div>
            <div class="text-center">
              <p class="preview_text">Preview Link</p>
            </div>
          </div>
        </div>
        <div class="d-md-flex mt-10 gap-6">
          <div class="w-100">
            <p class="tags_head">Additional Info</p>
            <p class="info_text">
              {{ form.additional_info }}
            </p>
          </div>
          <div class="w-100 mt-8 mt-md-0">
            <p class="tags_head">Tags</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <!-- <v-btn
                v-for="tag in form.tags"
                :key="tag"
                flat
                class="text-none tag_wrapper"
              >
                <p class="tag_btn_text">{{ tag }}</p>
              </v-btn> -->
              <div class="d-flex gap-4 flex-wrap">
                <div v-for="tag in form.tags" :key="tag" cålass="tags_wrapper d-flex">
                  <p class="body3_medium dark1">{{ tag }}</p>
                </div>
              </div>
              <!-- <v-btn flat class="text-none tag_wrapper">
              <p class="tag_btn_text">technology</p>
              <p class="ml-4">x</p>
            </v-btn>
            <v-btn flat class="text-none px-3 tag_wrapper">
              <p class="tag_btn_text">celebration</p>
              <p class="ml-4">x</p>
            </v-btn>
            <v-btn flat class="text-none  tag_wrapper">
              <p class="tag_btn_text">real estate</p>
              <p class="ml-4">x</p>
            </v-btn> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-end gap-4 mt-8 mb-16">
      <button @click="submitForm" class="text-none nxt_btn py-3 px-10">Go Live</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useEventStore } from '~/store/Event';

definePageMeta({
  layout: "events",
});
const form = ref(null);
const event = useEventStore();
onMounted(() => {
  const data = JSON.parse(localStorage.getItem("form")) || {};
  if (data) {
    form.value = data;
  }
});
const router = useRouter();

const loadForm = () => {

}


async function submitForm() {
  try {
    const response = await event.createEvent(form.value);
    if (response) {
      // Navigate to dashboard
      router.push('/dashboard');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
}

</script>

<style lang="scss" scoped>
.container {
  max-width: 48.1rem;
}

.info_text {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #6b6478;
}

.details_text {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #6b6478;
}

.preview_text {
  font-size: 14px;
  font-weight: 500;
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

.header_text {
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  color: #0e0b26;
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

.tags_wrapper {
  background-color: #f7f7fd;
  border-radius: 16px;
  width: fit-content;
  padding: 10px 16px 10px 16px;
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

.info_head {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #0e0b26;
}

.tags_head {
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: #0e0b26;
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

.tag_btn_text {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #2a282b;
}
</style>
