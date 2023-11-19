<template>
  <div class="category_container px-md-16 px-8 py-20">
    <div
      class="mb-8 d-md-flex pl-md-14 mx-auto justify-between primary_container"
    >
      <div class="mt-n5 w-100">
        <div>
          <div class="d-flex">
            <p class="primary_text mt-3">All Categories of Events</p>
            <img
              class="mb-10 primary_img"
              src="../../assets/images/svg/splash.svg"
              alt=""
            />
          </div>
          <p class="primary_text mt-n4 mt-md-0">to Celebrate</p>
        </div>
        <div>
          <p class="secondary_text pr-md-8 mt-6">
            You’re provided with an avenue to create the most engaging
            activities for thousands of audiences. Also, you can find events to
            attend based on your interests
          </p>
        </div>

        <button class="join_btn mt-4 mb-8 mb-md-0">Join Now</button>
      </div>
      <div class="w-100">
        <img
          class="ml-md-8"
          src="../../assets/images/png/Maskgroup.png"
          alt=""
        />
      </div>
    </div>
    <div class="secondary_image mr-12 gap-8 d-md-flex">
      <div class="">
        <img
          class="mb-8 mb-md-0"
          src="../../assets/images/png/Maskgroup1.png"
          alt=""
        />
      </div>
      <div class="">
        <img class="" src="../../assets/images/png/Maskgroup2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.category_container {
  background-color: #f7f7fd;
}

.primary_container {
  gap: 3rem;
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
  .secondary_image {
    width: 100%;
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
@media screen and (max-width: 550px) {
  .secondary_text {
    font-size: 20px;
  }
}
.join_btn {
  padding: 16px 40px 16px 40px;
  border-radius: 12px;
  border: 1.5px solid #624cf5;
  font-size: 16px;
  line-height: 24px;
  color: #624cf5;
  font-weight: 700;
}

.secondary_image {
  gap: 2rem;
  justify-content: flex-end;
}
</style>
