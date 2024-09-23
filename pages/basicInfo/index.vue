<template>
  <div class="container mt-8">
    <div class="m-auto text-center">
      <p class="header_text h3_semibold purple90">Create An Event</p>
      <p class="sub_text h6_medium dark2 mt-4 mb-8 px-md-28 px-8">
        Kindly fill out the details carefully and make sure to fill in required
        fields as you create your event of a lifetime
      </p>
    </div>
    <div>
      <p class="info_heading h4_semibold purple90 mb-1">Basic Information</p>
      <p class="basic_sub body3_medium dark2 pr-32 mb-4">
        Give your event a name and tell your potential attendees why they should
        come.<br />
        Make sure to point out unique tags of your event
      </p>
    </div>

    <div class="form_container px-8 py-8">
      <div>
        <p class="h5_semibold dark0">Event Information</p>
        <p class="body3_medium dark3 mb-4">
          Clearly give the right name of the event, organizer and type of<br />
          event for attendees to take note
        </p>
      </div>
      <div>
        <div class="">
          <label class="body3_medium dark0">Event name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter event name"
            class="w-100 body2_medium dark3 mt-2 mb-4 input px-4 py-2"
          />
        </div>
        <div class="w-100">
          <label class="body3_medium dark0">Organiser</label>
          <input
            v-model="form.organizer"
            type="text"
            placeholder="Organiser's name"
            class="w-100 px-4 body2_medium dark3 input mt-2 mb-4 py-2"
          />
        </div>
        <div class="mt-2 w-100">
          <label class="body3_medium dark0">Types of Event</label>
          <div class="d-flex align-center w-100">
            <div class="w-100">
              <select
              label="Select Event Type"
                v-model="form.event_type_id"
                name="category"
                class="w-100 body2_medium dark3 input mt-2 mb-4 px-4 py-2"              
                item-value="id"
                item-title="name"
              >
              <option value="" selected>Please Select event type</option>
                  <option
                    v-for="item in eventTypes"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
              </select>
            </div>
            <div class="ml-n8">
              <img src="../../assets/images/svg/arrow.svg" />
            </div>
          </div>
        </div>
        <div class="">
          <label class="body3_medium dark0">Tags</label>
          <div class="">
            <div class="d-flex align-center">
              <input
              v-model="tag"
                @keyup.enter="addTag" 
                type="text"
                placeholder="Add tags"
                class="w-100 body2_medium mr-3 dark3 px-4 py-2 input mb-2 mt-2"
              />
              <button
                @click="addTag"
                class="py-2 input form_label text-none px-4"
              >
                Add
              </button>
            </div>
            <p class="validation-message mb-4" v-if="showValidationMessage">
              Input field is empty
            </p>
          </div>
          <div class="tags">
            <div
              v-for="(tag, index) in form.tags"
              :key="index"
              class="d-flex gap-4 align-center"
            >
              <input
                :value="tag"
                type="text"
                placeholder="Add tags to improve discoverability of your event"
                class="w-100 body2_medium dark3 px-4 py-2 input mb-2 mt-2"
              />
              <img
                src="../../assets/images/svg/cancel.svg"
                class="ml-n10"
                @click="removeTag(index)"
              />
            </div>
          </div>
        </div>
        <!-- <div>
          <p class="body3_regular dark3 mb-4">
              <span>1</span>/<span>8</span> tags
            </p>
        </div> -->
      </div>
    </div>
    <div class="location_wrapper mt-8 px-8 py-8 form_container">
      <p class="h5_semibold dark0">Location</p>
      <p class="body3_medium dark3 mb-4">
        Kindly let potential attendees know the location of an event (if<br />
        there is) by attaching thr right address
      </p>
      <div>
        <v-radio-group v-model="form.is_online">
          <div class="">
            <v-btn flat border class="mr-4">
              <v-radio
                class="text-none event_btn"
                label="Online event"
                :value="true"
                color="#624cf5"
              ></v-radio>
            </v-btn>
            <v-btn flat border>
              <v-radio
                class="text-none event_btn"
                label="Physical event"
                :value="false"
                color="#624cf5"
              ></v-radio>
            </v-btn>
          </div>
        </v-radio-group>
      </div>
      <div v-if="form.is_online === true" class="">
        <input
          v-model="form.location"
          label="Streaming link (Zoom/Google Meet)"
          placeholder="Enter link here"
          class="w-100 px-4 body2_medium dark3 input mb-4 py-2"
        />
      </div>
      <div v-if="form.is_online === false" class="">
        <input
        v-model="form.location"
          label="Physical address"
          placeholder="Enter the physical address here"
          class="w-100 px-4 body2_medium dark3 input mb-4 py-2"
        />
      </div>
      <p class="body3_regular dark0">
        You would be able to add links to for streaming live or use zoom/google
        meet link
      </p>
    </div>
    <div class="date_wrapper px-8 py-8 mt-8 form_container">
      <p class="h5_semibold dark0">Date and Time</p>
      <p class="body3_medium dark3 mb-4">
        Let the your attendees know the exact time for start and ending of your
        event so they can plan accordingly
      </p>
      <div>
        <v-radio-group v-model="form.is_single">
          <div>
            <v-btn flat border class="mr-4">
              <v-radio
                class="text-none event_btn"
                label="Single Event"
                value="single"
                color="#624cf5"
              ></v-radio>
            </v-btn>
            <v-btn flat border>
              <v-radio
                class="text-none event_btn"
                label="Recurring Event"
                value="recurring"
                color="#624cf5"
              ></v-radio>
            </v-btn>
          </div>
        </v-radio-group>
      </div>
      <div>
        <div class="mt-2 w-100">
          <label class="body3_medium dark0">Select time zone</label>
          <div class="d-flex align-center w-100">
            <!-- <div class="w-100">
              <select
                v-model="form.timezone"
                name="category"
                class="px-2 py-2 body2_medium dark3 input w-100"
              >
                <option value="timezone" selected>
                  (UTC+01:00) West Central Africa
                </option>
                <option  value="WAT">
                 WAT
                </option>
              </select>
            </div> -->
            <div class="ml-n8">
              <img src="../../assets/images/svg/arrow.svg" />
            </div>
          </div>
        </div>
        <div class="mt-4">
          <v-row>
            <v-col cols="12" lg="6">
              <div class="">
                <label class="body3_medium dark0">Start Date</label>
                <div class="d-flex align-center w-100">
                  <div class="w-100">
                    <input
                      v-model="form.start_date"
                      type="date"
                      placeholder="22/04/2023"
                      class="w-100 body2_medium dark3 input px-2 py-2"
                    />
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" lg="6">
              <div class="">
                <label class="body3_medium dark0">Start Time</label>
                <div class="d-flex align-center w-100">
                  <div class="w-100">
                    <input
                      v-model="form.start_time"
                      type="time"
                      placeholder="10:00"
                      class="w-100 body2_medium dark3 input px-2 py-2"
                    />
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <div class="">
                <label class="body3_medium dark0">End Date</label>
                <div class="d-flex align-center w-100">
                  <div class="w-100">
                    <input
                      v-model="form.end_date"
                      type="date"
                      placeholder="22/04/2023"
                      class="w-100 body2_medium dark3 input px-2 py-2"
                    />
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" lg="6">
              <div class="">
                <label class="form_label">End Time</label>
                <div class="d-flex align-center w-100">
                  <div class="w-100">
                    <input
                      v-model="form.end_time"
                      type="time"
                      placeholder="10:00"
                      class="w-100 body2_medium dark3 input px-2 py-2"
                    />
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <div class="d-flex justify-end gap-4 mt-8 mb-16">
      <button @click="submitForm(form)" class="text-none nxt_btn py-3 px-10">
        Continue
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useEventStore } from '~/store/Event';
const event = useEventStore();
const eventTypes = ref([]);
definePageMeta({
  layout: "events",
});

const showValidationMessage = ref(false);
// Define a reactive form object
const form = reactive({
  name: "",
  organizer: "",
  start_date: "",
  start_time: "",
  end_time: "",
  end_date: "",
  tags: [],
  event_type_id: "",
  location: "",
  timezone: "",
  is_online: "",
  is_single: ""
});
const tag = ref("");
const router = useRouter();

function addTag() {
  if (tag.value.trim() === "") {
    showValidationMessage.value = true;
  } else {
    showValidationMessage.value = false;
    form.tags.push(tag.value.trim());
    tag.value = "";
  }
}

function removeTag(index) {
  form.tags.splice(index, 1);
}

// Load form data from local storage if it exists
onMounted(() => {
  const savedForm = JSON.parse(localStorage.getItem("formData"));
  if (savedForm) {
    Object.assign(form, savedForm);
  }
});
// fetch event types
onMounted(async () => {
  loadData();
});

async function loadData(){
  try {
    const data = await event.fetchEventTypes();
    eventTypes.value = data.data
    console.log("eventTypes", eventTypes)
  }
  catch (error) {
    console.error(error);
  }
}

const loadForm = () => {
  const data = JSON.parse(localStorage.getItem("form")) || {};
  if (data) {
    object.assign(form, data)
  }
}




const savedData = () => {
  const currentData = JSON.parse(localStorage.getItem("form")) ||
{};
const updatedData = {
  ...currentData,
  ...form
}
localStorage.setItem("form",JSON.stringify(updatedData))
console.log("info", updatedData)
}
const submitForm = (form) => {
  savedData();
  router.push("/details")
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 48.1rem;
}
.tags {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
}
.input {
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.nxt_btn {
  color: #ffffff;
  border-radius: 12px;
  background-color: #624cf5;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.event_btn {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.form_container {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}
.tag_wrapper {
  background-color: #f7f7fd;
}
</style>
