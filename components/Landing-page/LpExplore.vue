<template>
  <div class="explore_container w-100 px-8 py-20 px-md-16">
    <div>
    <div
    
      class="w-100"
    >
      <p class="primary_text d1_semibold white px-md-8">
        Manage all Events as a<span class="purple50"> Creator</span> or an
        <span class="purple50">Attendee</span> all in one platform
      </p>
      <p class="h4_medium secondary_text white1 px-md-8 mt-6">
        Create/ attend events (virtually or live) and sell your tickets right
        from the comfort of your device when you utilize the application
      </p>
    </div>
      <button
        class="lp_btn ml-md-8 mt-6"
      >
        Explore now
      </button>
    </div>
    <!-- <div class="">
  <img class="ticket" src="../../assets/images/png/tickets.png" alt="" />  
</div> -->
  </div>
</template>

<script setup></script>

<style scoped>
.ticket {
  margin-top: 7rem;
}

.explore_container {
  background-color: #0e0b26;
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
    background-position: center bottom -180px;
  }
}
@media screen and (max-width: 550px) {
  .explore_container {
    background-position: center bottom -50px;
    height: 100vh;
  }
}
.primary_text {
 
  width: 75%;
}
@media screen and (max-width: 1200px) {
  .primary_text {
 
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .primary_text {
  
    width: 100%;
  }
}
@media screen and (max-width: 550px) {
  .primary_text {
 
    width: 100%;
  }
}

.secondary_text {
  width: 50%;
}
@media screen and (max-width: 768px) {
  .secondary_text {
    width: 100%;
  }
}
@media screen and (max-width: 550px) {
  .secondary_text {
    font-size: 20px;
  }
}

</style>
