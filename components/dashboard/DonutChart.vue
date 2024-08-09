<template>
    <div class="card_container">
      <div class="p">
        <div class="d-flex justify-between">
      <div>
        <p>Revenue</p>
        <p>120k</p>
      </div>
      <div class="">
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
    </div>
        <apexchart width="400" type="donut" :options="chartOptions" :series="series"></apexchart>
      </div>     
      </div>
</template>
<script setup>
const series = [44, 55, 41];
const chartOptions = {
  chart: {
    type: "donut",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        plotOptions: {},
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
          show: false,
        },
      },
    },
  ],
  legend: {
    position: "right",

  },
  dataLabels: {
    enabled: false,
  },
};
</script>
<style lang="scss" scoped>
.card_container {
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}
.custom-dropdown {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>

