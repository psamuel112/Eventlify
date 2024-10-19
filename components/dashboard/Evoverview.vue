<template>
  <div>
    <div class="d-flex justify-between px-6 px-md-14 py-6">
      <div class="d-flex gap-4">
        <img src="../../assets/images/svg/Ellipse.svg" />
        <div>
          <p class="welcome_text"> {{ account?.name || 'Guest' }}!👋🏽</p>
          <p class="sub_text">Hope you’re having a good day</p>
        </div>
      </div>
      <div class="custom-dropdown">
        <div class="prepend-icon">
          <img src="../../assets/images/svg/calendar.svg" />
        </div>
        <select
          density="compact"
          label="Compact"
          class="v-btn v-btn--small text-none"
          @change="handleChange"
        >
          Hendrix
          <option class="text-none" value="option1">Today</option>
          <option value="option2">Week</option>
          <option value="option3">Month</option>
        </select>
        <div class="append-icon">
          <v-icon icon="mdi-chevron-down" />
        </div>
      </div>
    </div>
    <div class="px-14 py-6 d-none d-md-block">
      <div class="card_container justify-between d-flex px-6 py-6">
        <div class="d-flex card gap-4 pr-16">
          <div>
            <img src="../../assets/images/svg/card1.svg" />
          </div>
          <div>
            <p class="card_heading mb-4">Total Sales</p>
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
            <p class="card_heading mb-4">Total Events</p>
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
            <p class="card_heading mb-4">Total Audience</p>
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
        <v-divider class="border-opacity-100" vertical=""></v-divider>
        <div class="d-flex card pr-16 gap-4">
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


    <div class="px-6 d-md-none py-6">
      <div style="gap:12px;" class="mobile-cards ">
        <div class="card_container justify-between px-6 mb-8 py-6 d-flex card gap-4 ">
          <div>
            <img src="../../assets/images/svg/card1.svg" />
          </div>
          <div>
            <p class="card_heading mb-4">Total Sales</p>
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
            <p class="card_heading mb-4">Total Events</p>
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
            <p class="card_heading mb-4">Total Audience</p>
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

    <div>
      <div class="px-6 px-md-14 chart">
        <img class="w-100" src="../../assets/images/png/frame1.png" />
        <img class="w-100" src="../../assets/images/png/frame2.png" />
      </div>
      <div class="px-6 px-md-14 mb-16 mt-8 chart2">
        <img class="w-100" src="../../assets/images/png/frame3.png" />
        <img class="w-100" src="../../assets/images/png/frame4.png" />
      </div>
    </div>

    <!-- <div class="d-flex justify-between w-100">
      <div class="w-100">
        <LineChart />
      </div>
      <div class="w-100">
        <DonutChart />
      </div>
    </div>
    <div>
     <BarChart />
    </div> -->
  </div>
</template> 

<script setup>
import BarChart from "~/components/dashboard/BarChart.vue"
import LineChart from "~/components/dashboard/LineChart.vue";
import DonutChart from "~/components/dashboard/DonutChart.vue";
import { ref, onMounted } from 'vue';
import { useAccountStore } from "~/store/Account";
const Account = useAccountStore();
import { useAuthentication } from '~/store/Authentication';
const auth = useAuthentication();
const account = ref("")
onMounted(() => {
 loadData();
});
async function loadData() {
  try {
    const data = await Account.fetchAccountDetails();
    const fullName = data.data.name;  
    const firstName = fullName.split(' ')[0];  
    account.value = { ...data.data, name: firstName };  
  } catch (error) {
    console.error(error);
  }
}
</script>

<style lang="scss" scoped>
.chart {
  display: grid;
  grid-template-columns: 58% 40%;
  gap: 1.5rem;
}
@media screen and (max-width: 768px) {
  .chart {
    grid-template-columns: 1fr;
  }
}
.chart2 {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1.5rem;
}
@media screen and (max-width: 768px) {
  .chart2 {
    grid-template-columns: 1fr;
  }
}
.card_container {
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}

.custom-dropdown {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}

.price {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #0e0b26;
}

.prepend-icon,
.append-icon {
  display: flex;
  align-items: center;
  padding: 5px;
}

.percent_wrapper {
  background-color: #eefbf3;
}
.percent_wrapper_red {
  background-color: #fdedee;
}
.percent_wrapper_red p {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #ed4f59;
}
.welcome_text {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #0e0b26;
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
.mobile-cards {
  gap: 8px;
}
</style>
