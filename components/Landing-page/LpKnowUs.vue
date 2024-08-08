<template>
  <div class="main_container px-md-16 px-8 py-20">
    <div class="secondary_container d-md-flex">
      <div class="image w-100">
        <img
          class="mx-auto w-100"
          src="../../assets/images/png/intro.png"
          alt=""
        />
      </div>
      <div class="text_container">
        <div>
          <div class="d-flex mb-2 mb-md-6">
            <p class="h1_semibold dark0 mt-3">Get to Know Us</p>
            <img
              class="primary_img mb-10"
              src="../../assets/images/svg/splash.svg"
              alt=""
            />
          </div>
          <p class="h4_medium dark2 mb-8">
            At Eventlify, we are about bringing the very best opportunity for
            users (creators) to create content for a set of audiences as well
            give everyone (audience) a chance at enjoying various categories of
            events
          </p>
        </div>
        <div class="d-flex align-center option">
          <img src="../../assets/images/svg/tick-circle.svg" alt="" />
          <p class="h5_medium dark1">Create event as a creator</p>
        </div>
        <div class="d-flex align-items-center mt-4 option">
          <img src="../../assets/images/svg/tick-circle.svg" alt="" />
          <p class="h5_medium dark1">
            Consume contents as a member of the audience
          </p>
        </div>
        <div class="d-flex align-center mt-4 option">
          <img src="../../assets/images/svg/tick-circle.svg" alt="" />
          <p class="h5_medium dark1">
            Make money as the audience attend your events
          </p>
        </div>
        <button class="lp_wbtn mt-8">Get started</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main_container {
  background-color: #ffffff;
  background-image: url(../../assets/images/png/group.png);
  background-position: right bottom 20px;
}

.secondary_container {
  gap: 6.6rem;
}

.text_container {
  margin-top: 4rem;
}

.option {
  gap: 1rem;
}
</style>
