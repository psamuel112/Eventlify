<template>
  <div class="card_container px-4 py-8">
    <div class="d-flex justify-between">
      <div>
        <p>Revenue</p>
        <p>120k</p>
      </div>
      <div class="">
        <button>24H</button>
        <button>1W</button>
        <button>1M</button>
        <button>1Y</button>
        <button>ALL</button>
      </div>
    </div>

    <client-only>
      <div id="chart">
        <apexchart
          type="area"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </client-only>
  </div>
</template>
<script setup>
const series = ref([
  {
    name: "series1",
    data: [10000, 20000, 30000, 5000, 50000, 60000, 50000, 30000],
  },
]);

const chartOptions = {
  chart: {
    height: 300,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  yaxis: {
    type: "string",
    categories: ["f", "f"],
  },
  xaxis: {
    type: "string",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};
</script>
<style lang="scss" scoped>
.card_container {
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}
</style>

