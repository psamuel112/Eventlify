<template>
  <div class="px-6 px-md-14">
    <div class="d-flex mb-8 align-center mt-8 justify-between">
      <p class="heading_text">Records</p>
      <v-btn flat border class="text-none px-6">
        <img class="" src="../../assets/images/svg/export.svg" />
        <p class="">Export</p>
      </v-btn>
    </div>
    <div class="mb-8">
      <p class="all_text mb-2">All <span class="px-2 ">900</span></p>
      <div class="line">
        <v-progress-linear
          model-value="6"
          height="2"
          color="#304ffd"
        ></v-progress-linear>
      </div>
    </div>
    <div class="table_wrapper">
      <div class="px-6 py-8">
        <div>
            <EvRecordSearch />
        </div>

        <v-table class="mb-5">
        <template #default>
          <thead>
            <tr>
              <th class="text-left">
                <input type="checkbox" name="" id="" />
              </th>
              <th class="text-left"> <div class="d-flex align-center"><p class="mr-2">TICKET NO</p> <img src="../../assets/images/svg/arrow.svg" /></div></th>
              <th class="text-left"> <div class="d-flex align-center"><p class="mr-2">ATTENDEE</p> <img src="../../assets/images/svg/arrow.svg" /></div></th>
              <th class="text-left"> <div class="d-flex align-center"><p class="mr-2">DATE</p> <img src="../../assets/images/svg/arrow.svg" /></div></th>
              <th class="text-left"> <div class="d-flex align-center"><p class="mr-2">TOTAL</p> <img src="../../assets/images/svg/arrow.svg" /></div></th>
              <th class="text-left"> <div class="d-flex align-center"><p class="mr-2">PAYMENT</p> <img src="../../assets/images/svg/arrow.svg" /></div></th>
              <th class="text-left"> <div class="d-flex align-center"><p class="mr-2">STATUS</p> <img src="../../assets/images/svg/arrow.svg" /></div></th>
              <th class="text-left"> <div class="d-flex align-center"><p class="mr-2">ACTION</p> <img src="../../assets/images/svg/arrow.svg" /></div></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in records" :key="index">
              <td class="py-3">
                <input type="checkbox" name="" id="" />
              </td>
              <td class="py-3">
                <p class="black4--text font-weight-medium text-body-1 mb-0">{{ record.ticketNo }}
                </p>
              </td>
              <td class="py-3">
                <p class="black4--text font-weight-medium text-body-1 mb-0">{{ record.attendee }}
                </p>
              </td>
              <td class="py-3">
                <p class="black4--text font-weight-medium text-body-1 mb-0">{{ record.date }}
                </p>
              </td>
              <td class="py-3">
                <p class="black4--text font-weight-medium text-body-1 mb-0">{{ record.total }} 
                </p>
              </td>
              <td class="py-3">
                <p class="black4--text font-weight-medium text-body-1 mb-0">{{ record.payment }}
                </p>
              </td>
              <td class="py-3 ">
                <v-btn
                class="text-none state"
                  flat
                  :class="`state-${record.status}`"
                >
                {{ record.status }} 
                </v-btn>
              </td>
              <td class="py-3">
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn flat icon="mdi-dots-vertical" v-bind="props"></v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, i) in actionItem" :key="i">
                    <v-list-item-title >{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              </td>
            </tr>
          </tbody>
        </template>
      </v-table>   
      </div>
       
    </div>
  </div>
</template>

<script setup>
import EvRecordSearch from "~/components/dashboard/EvRecordSearch.vue";
import { ref } from "vue";

const records = ref([
  {
    ticketNo: "#790841",
    attendee: "Steven Styles",
    date: "12.09.20",
    total: "₦8,145.85",
    payment: "Bank Transfer",
    status: "Confirmed"
  },
  {
    ticketNo: "#790841",
    attendee: "Steven Styles",
    date: "12.09.20",
    total: "₦8,145.85",
    payment: "Bank Transfer",
    status: "Processing"
  },
  {
    ticketNo: "#790841",
    attendee: "Steven Styles",
    date: "12.09.20",
    total: "₦8,145.85",
    payment: "Bank Transfer",
    status: "Processing"
  },
  {
    ticketNo: "#790841",
    attendee: "Steven Styles",
    date: "12.09.20",
    total: "₦8,145.85",
    payment: "Bank Transfer",
    status: "Cancelled"
  },
  {
    ticketNo: "#790841",
    attendee: "Steven Styles",
    date: "12.09.20",
    total: "₦8,145.85",
    payment: "Bank Transfer",
    status: "Confirmed"
  },
]);
const actionItem = ref([
  { title: "Verified" },
  { title: "Upgrade" },
  { title: "Deactivate" },
]);
</script>


<style lang="scss" scoped>
.all_text{
font-size: 15px;
font-weight: 400;
line-height: 23px;
}
.all_text span{
font-size: 10px;
font-weight: 600;
line-height: 15px;
text-align: center;
color: #8A9099;
background-color: #F7F7FD;
height: 20px;
margin-left: 7px;
border-radius: 6px;

}
.state {
  width: 100%;
  height: fit-content;
  padding: 8px 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}
.state-Confirmed {
  background: #e8fbf4 !important ;
  border: 0.4px solid #FDEDEE !important;
  border-radius: 8px !important;
  color: #00cd84 !important;
}
.state-Processing {
  background: #fff5e9 !important;
  border: 0.4px solid #FDEDEE !important;
  border-radius: 8px !important;
  color: #f08000 !important;
}
.state-Cancelled {
  background: #fff5e9 !important;
  border: 0.4px solid #FDEDEE !important;
  border-radius: 8px !important;
  color:  #ED4F59 !important;
}
.table_wrapper{
  border: 1px solid #E2E8F0;
  border-radius: 12px;
}
.heading_text {
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  color: #0e0b26;
}
</style>
