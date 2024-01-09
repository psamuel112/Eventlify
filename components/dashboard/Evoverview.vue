<template>
  <div>
    <div class="d-flex justify-between px-14 py-6">
      <div class="d-flex gap-4">
        <img src="../../assets/images/svg/Ellipse.svg" />
        <div>
          <p class="welcome_text">Hello Hendrix!👋🏽</p>
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
    <div class="px-14 py-6">
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
    <div>
      <div class="px-14 chart">
      <img class="w-100" src="../../assets/images/png/frame1.png" />
      <img class="w-100" src="../../assets/images/png/frame2.png" />
    </div>
    <div class="px-14 mb-16 mt-8 chart2">
      <img class="w-100" src="../../assets/images/png/frame3.png" />
      <img class="w-100" src="../../assets/images/png/frame4.png" />
    </div>
    </div>
   
    <!-- <div class="d-flex justify-between w-100">
      <div class="w-100">
  
        <client-only>
          <apexchart
            type="area"
            :options="splineOptions"
            :series="splineSeries"
          ></apexchahgrt>
        </client-only>
      </div>
      <div class="w-100">
        <apexchart
          type="donut"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
    <div>
        <div id="chart">
        <apexchart type="bar" height="350" :options="bars" :series="bar"></apexchart>
      </div> 
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "dashboard",
});

const splineSeries = reactive([
  {
    name: "Property Flex",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
]);
const splineOptions = reactive({
  chart: {
    height: 300,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#624CF5"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="arrow_box">' +
        "<span>" +
        series[seriesIndex][dataPointIndex] +
        "</span>" +
        "</div>"
      );
    },
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "string",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: {
      style: {
        // colors: [],
        fontSize: "12px",
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: 500,
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: true,
      borderType: "dashed",
      color: "#78909C",
      width: 0,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      style: {
        // colors: [],
        fontSize: "12px",
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: 500,
      },
    },
  },
});



const series = [44, 55, 41];
const chartOptions = {
  chart: {
    type: "donut",
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        plotOptions: {
       
        },
        chart: {
          width: 200,
       
        },
        legend: {
          position: "bottom",
          show: false
        },
      },
    },
  ],
  legend: {
    position: 'right'
  },
  dataLabels: {
              enabled: false
            },
};




const bar = [
  {
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  
];
const bars = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};





</script>

<style lang="scss" scoped>
.chart{
  display: grid;
  grid-template-columns:58% 40%;
  gap: 1.5rem
}
@media screen and (max-width: 768px) {
  .chart {
    grid-template-columns: 1fr;
  }
}
.chart2{
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1.5rem
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
</style>
