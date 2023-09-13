<template>
  <div class="explore_container w-100 px-8 py-20 px-md-16">
    <div class="">
      <p class="primary_text  px-md-8">Manage all Events as a<span> Creator</span> or an <span>Attendee</span> all
        in one platform</p>
      <p class="secondary_text px-md-8 mt-6 ">Create/ attend events (virtually or live) and sell your tickets right from the
        comfort of your device when you utilize the application</p>
      <button class="explore_btn ml-md-8 mt-6">Explore now</button>
    </div>
    <!-- <div class="">
  <img class="ticket" src="../../assets/images/png/tickets.png" alt="" />  
</div> -->
  </div>
</template>

<script setup>

</script>

<style scoped>
.ticket {
  margin-top: 7rem;
}

.explore_container {
  background-color: #0E0B26;
  background-image: url(../../assets/images/png/tickets.png);
  background-position: right 25px bottom 10px;

}
@media screen and (max-width: 1200px) {
  .explore_container {
    background-position: right bottom -20px;
  }
}
@media screen and (max-width: 768px) {
  .explore_container {
    background-position: center bottom -70px;
  }
}
@media screen and (max-width: 550px) {
  .explore_container {
    background-position: center bottom -180px;
    height: 100vh
  }
}
.primary_text {
  color: #ffffff;
  font-size: 72px;
  font-weight: 600;
  line-height: 80px;
  width: 75%;
}
@media screen and (max-width: 1200px) {
  .primary_text {
    font-size: 72px;
    line-height: 80px;
    width: 100%
  }
}
@media screen and (max-width: 768px) {
  .primary_text {
    font-size: 52px;
    line-height: 70px;
    width: 100%
  }
}
@media screen and (max-width: 550px) {
  .primary_text {
    font-size: 32px;
    line-height: 42px;
    width: 100%
  }
}
.primary_text span {
  color: #624cf5;
}

.secondary_text {
  color: #EFEDFE;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  width: 50%
}
@media screen and (max-width: 768px) {
  .secondary_text {
    width: 100%
  }
}
@media screen and (max-width: 550px) {
  .secondary_text {
    font-size: 20px;
  }
}
.explore_btn {
  padding: 16px 40px 16px 40px;
  border-radius: 12px;
  background-color: #624CF5;
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}</style>