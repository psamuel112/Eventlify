<template>
  <div class="container mt-8">
    <v-form @submit.prevent="submitForm">
      <div class="m-auto text-center">
        <p class="h3_semibold purple90">Create An Event</p>
        <p class="h6_medium dark2 mt-4 mb-8 px-8 px-md-28">
          Kindly fill out the details carefully and make sure to fill in
          required fields as you create your event of a lifetime
        </p>
      </div>
      <div>
        <p class="h4_semibold purple90 mb-1">Tickets</p>
        <p class="body3_medium dark2 pr-32 mb-4">
          Create your ticket, set category (paid or free), number available and
          so on.
        </p>
      </div>
      <div class="form_container px-8 py-8">
        <div>
          <p class="h5_semibold dark0 mb-4">Add Ticket</p>
          <div>
            <p class="body3_medium dark0">Select ticket type</p>
            <div>
              <v-radio-group v-model="form.type">
                <div>
                  <v-btn flat border class="mr-4">
                    <v-radio
                      class="text-none event_btn"
                      label="Paid"
                      value="Paid"
                      color="#624cf5"
                    ></v-radio>
                  </v-btn>
                  <v-btn flat border>
                    <v-radio
                      class="text-none event_btn"
                      label="Free"
                      value="Free"
                      color="#624cf5"
                    ></v-radio>
                  </v-btn>
                </div>
              </v-radio-group>
            </div>
          </div>
          <div>
            <p class="body3_medium dark0">Select ticket status</p>
            <div>
              <v-radio-group v-model="form.status">
                <div>
                  <v-btn flat border class="mr-4">
                    <v-radio
                      class="text-none event_btn"
                      label="Public"
                      value="Public"
                      color="#624cf5"
                    ></v-radio>
                  </v-btn>
                  <v-btn class="plan_btn" flat border>
                    <v-radio
                      class="text-none event_btn"
                      label="Invite only"
                      value="invite_only"
                      color="#624cf5"
                    ></v-radio>
                  </v-btn>
                </div>
              </v-radio-group>
            </div>
          </div>
          <div class="mb-4">
            <p class="body3_medium dark0">Select ticket plans available</p>
            <div class="gap-4">
              <v-btn
                border
                flat
                class="mr-2 plan_btn text-none"
                :class="{ 'selected-btn': form.plan === 'Regular' }"
                @click="selectPlan('Regular')"
              >
                Regular
              </v-btn>
              <v-btn
                border
                flat
                class="mr-2 plan_btn text-none"
                :class="{ 'selected-btn': form.plan === 'VIP' }"
                @click="selectPlan('VIP')"
              >
                VIP
              </v-btn>
              <v-btn
                border
                flat
                class="mr-2 plan_btn text-none"
                :class="{ 'selected-btn': form.plan === 'VVIP' }"
                @click="selectPlan('VVIP')"
              >
                VVIP
              </v-btn>
              <v-btn
                border
                flat
                class="plan_btn text-none"
                :class="{ 'selected-btn': form.plan === 'Tables' }"
                @click="selectPlan('Tables')"
              >
                Tables
              </v-btn>
            </div>
          </div>
          <div class="">
            <label class="body3_medium dark0">Ticket name</label>
            <div class="d-flex align-center w-100">
              <div class="w-100">
                <input
                v-model="form.name"
                  type="text"
                  placeholder="Name of event"
                  class="w-100 input px-2 py-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <v-row>
            <v-col cols="12" lg="6">
              <div class="">
                <label class="body3_medium dark0"
                  >Regular tickets available</label
                >
                <div class="d-flex align-center w-100">
                  <div class="w-100">
                    <input
                      type="text"
                      placeholder="no. of tickets "
                      class="w-100 input px-2 py-2"
                    />
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" lg="6">
              <div class="">
                <label class="body3_medium dark0">Price per ticket</label>
                <div class="d-flex align-center w-100">
                  <div class="naira">
                    <div class="">
                      <p class="mt-2 ml-4">₦</p>
                    </div>
                  </div>
                  <div class="w-100">
                    <input
                      type="text"
                      placeholder="1000"
                      class="w-100 input px-2 py-2"
                    />
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <div class="">
                <label class="body3_medium dark0">VIP tickets available</label>
                <div class="d-flex align-center w-100">
                  <div class="w-100">
                    <input
                      type="text"
                      placeholder="no. of tickets "
                      class="w-100 input px-2 py-2"
                    />
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" lg="6">
              <div class="">
                <label class="body3_medium dark0">Price per ticket</label>
                <div class="d-flex align-center w-100">
                  <div class="naira">
                    <div class="">
                      <p class="mt-2 ml-4">₦</p>
                    </div>
                  </div>
                  <div class="w-100">
                    <input
                      type="text"
                      placeholder="1000"
                      class="w-100 input px-2 py-2"
                    />
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="mt-6">
          <label class="body3_medium dark0">Ticket Sales end</label>
          <div>
            <v-row>
              <v-col cols="12" lg="4">
                <div class="">
                  <div class="align-center w-100">
                    <div class="w-100">
                      <input
                        type="text"
                        placeholder="no. of tickets "
                        class="w-100 input px-2 py-2"
                      />
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="4">
                <div class="d-flex align-center">
                  <div class="w-100">
                    <select name="category" class="px-2 py-2 input w-100">
                      <option value="" selected>Hour(s)</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                  <div class="ml-n8">
                    <img src="../../assets/images/svg/arrow.svg" />
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="4">
                <div class="d-flex align-center">
                  <div class="w-100">
                    <select name="category" class="px-2 py-2 input w-100">
                      <option value="" selected>Before event starts</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                  <div class="ml-n8">
                    <img src="../../assets/images/svg/arrow.svg" />
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <div class="d-flex justify-end gap-4 mt-8 mb-16">
        <button class="back_btn text-none py-3 px-10">Back</button>
        <button 
        @click="submitForm"
        class="text-none nxt_btn py-3 px-10">Continue</button>
      </div>
    </v-form>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

const form = reactive({
type:"",
plan:"",
status:""
});

const selectPlan = (selectedPlan) => {
  form.plan = selectedPlan;
};
definePageMeta({
  layout: "events",
});

const router = useRouter();
// Load form data from local storage if it exists
onMounted(() => {
  const savedForm = JSON.parse(localStorage.getItem('formData'));
  if (savedForm) {
    Object.assign(form, savedForm);
  }
});

const submitForm = () => {
  localStorage.setItem('formData', JSON.stringify(form));
  console.log("details", form)
  router.push('/go-live'); // Navigate to the next form page
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 48.1rem;
}
.naira {
  width: 48px;
  height: 43px;
  padding: 12px, 0px, 12px, 0px;
  background-color: #e2e8f0;
}
.plan_btn:focus {
  color: #624cf5;
  border: 1.5px solid #a193f9;
  background-color: #f2f1fe;
}
.editor {
  height: 12rem;
}
.nxt_btn {
  color: #ffffff;
  border-radius: 12px;
  background-color: #624cf5;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.selected-btn {
  background-color: #624cf5;
  color: white;
}
.plan_btn {
  transition: background-color 0.3s, color 0.3s;
}
.back_btn {
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  border: 1.5px solid #e2e8f0;
}
.input {
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.input1 {
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  border-right: none;
  font-size: 16px;
  font-weight: 500;
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
