<template>
  <div>
    <Navbar />
   
    <div class="px-20">
        <div>
      <p class="">Back to event dashboard</p>
      <p>Winning in Tech</p>
    </div>
      <div class="card_container justify-between d-flex px-6 py-6">
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
      <div>
      <p>Share Ticket</p>
      <input
        disabled
        label="Physical address"
        placeholder="Enter the physical address here"
        class="w-100 px-4 body2_medium dark3 input mb-4 py-2"
      />
      <input
        disabled
        label="Physical address"
        placeholder="Enter the physical address here"
        class="w-100 px-4 body2_medium dark3 input mb-4 py-2"
      />
      <input
        disabled
        label="Physical address"
        placeholder="Enter the physical address here"
        class="w-100 px-4 body2_medium dark3 input mb-4 py-2"
      />
    </div>
    </div>
   
  </div>
</template>
<script setup>
import Navbar from "~/components/event/Navbar.vue";
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
</style>
