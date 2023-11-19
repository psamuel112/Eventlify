<template>
  <div class="main_container  px-md-16 px-8 py-20">
    <div class="secondary_container z-100 d-md-flex">
      <div class="image">
        <div
          class="relative z-0 w-100"
          v-motion-slide-left
          :initial="{ opacity: 0, x: -100 }"
          :visible="{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { ease: 'easeIn', duration: 1000 },
          }"
        >
          <img class="mx-auto" src="../../assets/images/png/intro.png" alt="" />
        </div>
      </div>
      <div
        v-motion-slide-right
        :initial="{ opacity: 0, x: 100 }"
        :visible="{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { ease: 'easeIn', duration: 1300 },
        }"
        class="text_container w-100"
      >
        <div>
          <div class="d-flex mb-2 mb-md-6">
            <p class="primary_text mt-3">Get to Know Us</p>
            <img
              class="primary_img mb-10"
              src="../../assets/images/svg/splash.svg"
              alt=""
            />
          </div>
          <p class="secondary_text mb-8">
            At Eventlify, we are about bringing the very best opportunity for
            users (creators) to create content for a set of audiences as well
            give everyone (audience) a chance at enjoying various categories of
            events
          </p>
        </div>
        <div class="d-flex align-center option">
          <img src="../../assets/images/svg/tick-circle.svg" alt="" />
          <p class="options_text">Create event as a creator</p>
        </div>
        <div class="d-flex align-items-center mt-4 option">
          <img src="../../assets/images/svg/tick-circle.svg" alt="" />
          <p class="options_text">
            Consume contents as a member of the audience
          </p>
        </div>
        <div class="d-flex align-center mt-4 option">
          <img src="../../assets/images/svg/tick-circle.svg" alt="" />
          <p class="options_text">
            Make money as the audience attend your events
          </p>
        </div>
        <button class="start_btn mt-8">Get started</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.image {
  position: relative !important;
  z-index: 0 !important;
}
.primary_text {
  font-size: 48px;
  font-weight: 600;
  line-height: 64px;
  color: #2a282b;
}
@media screen and (max-width: 768px) {
  .primary_text {
    font-size: 36px;
    line-height: 48px;
  }
}
@media screen and (max-width: 550px) {
  .primary_text {
    font-size: 24px;
    line-height: 32px;
  }
  .primary_img {
    width: 24px;
  }
}
.secondary_text {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: #6b6478;
}

.main_container {
  background-color: #ffffff;
  background-image: url(../../assets/images/png/group.png);
  background-position: right bottom 20px;
}

.secondary_container {
  gap: 6.6rem;
}

.secondary_text {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: #6b6478;
}
@media screen and (max-width: 550px) {
  .secondary_text {
    font-size: 20px;
  }
}

.text_container {
  margin-top: 4rem;
}

.option {
  gap: 1rem;
}

.options_text {
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  color: #6b6478;
}

.start_btn {
  padding: 16px 40px 16px 40px;
  border-radius: 12px;
  border: 1.5px solid #624cf5;
  font-size: 16px;
  line-height: 24px;
  color: #624cf5;
  font-weight: 700;
}
</style>
