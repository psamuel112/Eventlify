<template>
  <div class="explore_container w-100">
    <div class="">
      <p class="primary_text relative w-100 text-5xl md:text-4xl lg:text-3xl xl:text-2xl text-9xl">Manage all Events as a <br><span>Creator</span> or an <span>Attendee</span> all<br>
        in one platform</p>
      <p class="secondary_text mt-6">Create/ attend events (virtually or live) and sell your tickets<br> right from the
        comfort of your device when you utilize the <br> application</p>
      <button class="explore_btn mt-6">Explore now</button>
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
  padding: 96px 104px 96px 104px;
  background-image: url(../../assets/images/png/tickets.png);
  background-position: right bottom 20px;
}

.primary_text {
  color: #ffffff;
  font-size: 72px;
  font-weight: 600;
  line-height: 80px
}

.primary_text span {
  color: #624cf5;
}

.secondary_text {
  color: #EFEDFE;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px
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