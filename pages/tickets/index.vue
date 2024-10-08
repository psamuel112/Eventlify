<template>
  <div class="container mt-8">
    <div class="m-auto text-center">
      <p class="h3_semibold purple90">Create An Event</p>
      <p class="h6_medium dark2 mt-4 mb-8 px-8 px-md-28">
        Kindly fill out the details carefully and make sure to fill in required
        fields as you create your event of a lifetime
      </p>
    </div>
    <div>
      <p class="h4_semibold purple90 mb-1">Tickets</p>
      <p class="body3_medium dark2 pr-32 mb-4">
        Create your ticket, set category (paid or free), number available and so
        on.
      </p>
    </div>
    <div
      v-for="(ticket, index) in form.tickets"
      :key="index"
      class="form_container px-8 py-8"
    >
    
      <v-row>
        <v-col cols="12" lg="6">
          <div class="">
            <div class="">
              <label class="body3_medium dark0"> Ticket name</label>
              <div class="d-flex align-center w-100">
                <div class="mb-8 w-100">
                  <input
                    v-model="ticket.name"
                    type="text"
                    placeholder="Name of event"
                    class="w-100 input px-2 py-2"
                  />
                  <div v-if="nameErrors[0]" class="error-message ">{{ nameErrors[0] }}</div>
                </div>
              </div>
            </div>
            <div class="">
              <label class="body3_medium dark0"> Ticket plan</label>
              <div class="d-flex align-center w-100">
                <div class="mb-8 w-100">
                  <input
                    v-model="ticket.plan"
                    type="text"
                    placeholder="Name of event"
                    class="w-100 input px-2 py-2"
                  />
                  <div v-if="planErrors[0]" class="error-message ">{{ planErrors[0] }}</div>
                </div>
              </div>
            </div>
            <div>
              <p class="body3_medium dark0">Select ticket type</p>
              <div>
                <v-radio-group
                :error-messages="typeErrors"
                v-model="ticket.type">
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
                <v-radio-group 
                :error-messages="statusErrors"
                v-model="ticket.status">
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
            <div>
              <label class="body3_medium dark0"
                >Regular tickets available</label
              >
              <div class="d-flex align-center w-100">
                <div class="w-100">
                  <input
                    v-model="ticket.plan_value"
                    type="text"
                    placeholder="no. of tickets "
                    class="w-100 input px-2 py-2"
                  />
                  <div v-if="plan_valueErrors[0]" class="error-message ">{{ plan_valueErrors[0] }}</div>
                </div>
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
                  v-model="ticket.price"
                  type="text"
                  placeholder="1000"
                  class="w-100 input px-2 py-2"
                />
              </div>
             
            </div>
            <div v-if="priceErrors[0]" class="error-message ">{{ priceErrors[0] }}</div>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="mt-6">
            <label class="body3_medium dark0">Ticket Sales end</label>
            <div class="">
              <div class="align-center w-100">
                <div class="w-100">
                  <input
                    v-model="ticket.end_timing"
                    type="date"
                    placeholder="no. of tickets "
                    class="w-100 input px-2 py-2"

                  />
                  <div v-if="end_timingErrors[0]" class="error-message ">{{ end_timingErrors[0] }}</div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <button class="nxt_btn px-2 mt-4" type="button" @click="addNewTicket">Add Another Ticket +</button>
      <button class="px-2 ml-4" style="background-color: red; color:white; border-radius:12px; font-weight:700;" v-if="form.tickets.length > 1" type="button" @click="removeTicket(index)">Remove Ticket -</button>
 
    </div>
    <div class="d-flex justify-end gap-4 mt-8 mb-16">
      <button @click="backbtn" class="back_btn text-none py-3 px-10">
        Back
      </button>
      <button @click="submitForm" class="text-none nxt_btn py-3 px-10">
        Continue
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { onBeforeUnmount } from "vue";

const option = ref([]);

const form = ref({
  is_online: true,
  tickets: [
    {
      name: "",
      price: "",
      type: "",
      status: "",
      plan: "",
      plan_value: "",
      start_timing: "",
      end_timing: ""
    },
  ],
});

// Validation errors
const typeErrors = ref([]);
const statusErrors = ref([]);
const planErrors = ref([]);
const start_timingErrors = ref([]);
const end_timingErrors = ref([]);
const priceErrors = ref([]);
const nameErrors = ref([]);
const plan_valueErrors = ref([]);

// Validation function
function validateForm() {
  // Clear errors
  plan_valueErrors.value = [];
  typeErrors.value = [];
  statusErrors.value = [];
  start_timingErrors.value = [];
  planErrors.value = [];
  end_timingErrors.value = [];
  priceErrors.value = [];
  nameErrors.value = [];

  let valid = true;

  // Loop through each ticket in the form
  form.value.tickets.forEach((ticket, index) => {
    // Initialize error arrays per ticket
    if (!ticket.name) {
      nameErrors.value.push(`Name is required`);
      valid = false;
    }
    if (!ticket.type) {
      typeErrors.value.push(`Type is required`);
      valid = false;
    }
    if (!ticket.plan) {
      planErrors.value.push(`Plan is required`);
      valid = false;
    }
    if (!ticket.price) {
      priceErrors.value.push(`Price is required`);
      valid = false;
    } else if (!/^\d+$/.test(ticket.price)) {
      priceErrors.value.push(`Must contain only numbers`);
      valid = false;
    }

    if (!ticket.end_timing) {
      end_timingErrors.value.push(`End date is required`);
      valid = false;
    }
    if (!ticket.status) {
      statusErrors.value.push(`Status is required`);
      valid = false;
    }
    if (!ticket.start_timing) {
      start_timingErrors.value.push(`Start time is required`);
      valid = false;
    }
    if (!ticket.plan_value) {
      plan_valueErrors.value.push(`Available tickets is required`);
      valid = false;

    } else if (!/^\d+$/.test(ticket.plan_value)) {
      plan_valueErrors.value.push(`Must contain only numbers`);
      valid = false;
    }
  });

  return valid;
}

// Function to add a new ticket
const addNewTicket = () => {
  form.value.tickets.push({
    name: "",
    price: "",
    type: "",
    status: "",
    plan: "",
    plan_value: "",
    start_timing: "",
    end_timing: ""
  });
};

// Function to remove a ticket
const removeTicket = (index) => {
  if (form.value.tickets.length > 1) {
    form.value.tickets.splice(index, 1);
  }
};


// const selectPlan = (index, selectedPlan) => {

//   const planIndex = form.tickets[index].plan.indexOf(selectedPlan);
//   if (planIndex > -1) {
//     // Plan is already selected, remove it
//     form.tickets[index].plan.splice(planIndex, 1);
//   } else {
//     // Plan is not selected, add it
//     form.tickets[index].plan.push(selectedPlan);
//   }
// };
const backbtn = () => {
  router.push("/details");
};
const selectPlan = (index, selectedOption) => {
  options[index] = selectedOption; // Update the option for the specific ticket
};

definePageMeta({
  layout: "events",
});

const router = useRouter();
 // Load form data from local storage if it exists
onMounted(() => {
  const savedForm = JSON.parse(localStorage.getItem("formData"));
  if (savedForm) {
    Object.assign(form, savedForm);
  }
  //  window.addEventListener("beforeunload", () => {
  //    localStorage.removeItem("formData");
  //  });
});

const loadForm = () => {
  const data = localStorage.getItem("form");
  if (data) {
    object.assign(form, JSON.parse(data).tickets);
  }
};

const savedData = () => {
  const currentData = JSON.parse(localStorage.getItem("form")) || {};
  const updatedData = {
    ...currentData,
    ...form.value,
    tickets: form.value.tickets,
    currentData: form.value.currentData
  };
  localStorage.setItem("form", JSON.stringify(updatedData));
  console.log("info", updatedData);
};
const submitForm = (form) => {

    savedData();
    router.push("/go-live2");

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

.error-message {
  hyphens: auto;
  transition-duration: 150ms;
  color: rgba(176, 0, 32);
  font-size: 12px
}

.form_container {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}
.tag_wrapper {
  background-color: #f7f7fd;
}
</style>
