<template>
    <div class="category_container px-md-16 px-8 py-20">
        <div class="mb-6 d-md-flex justify-space-between primary_container">
            <div class="mt-n5 w-100">
                <div>
                    <div class="d-flex">
                        <p class="primary_text mt-3">All Categories of Events</p>
                        <img class="mb-10 primary_img" src="../../assets/images/svg/splash.svg" alt="" />
                    </div>
                    <p class="primary_text mt-n4 mt-md-0">to Celebrate</p>
                  </div>
                <p class="secondary_text pr-md-8  mt-6">You’re provided with an avenue to create the most engaging activities for
                    thousands of audiences. Also, you
                    can find events to attend based on your interests</p>
                <button class="join_btn mt-4 mb-4 mb-md-0">Join Now</button>
            </div>
            <div class="w-100">
                <img class="w-100" src="../../assets/images/png/Maskgroup.png" alt="" />
            </div>
        </div>
         <div class="d-md-flex  secondary_image  ">
            <img class="w-100 mb-4 mb-md-0" src="../../assets/images/png/Maskgroup1.png" alt="" />
            <img class="w-100" src="../../assets/images/png/Maskgroup2.png" alt="" />
        </div> 
    </div>
</template>

<script setup>

</script>

<style scoped>
.category_container {
    background-color: #F7F7FD;
}

.primary_container {
    gap: 3rem;
}

.primary_text {
    font-size: 48px;
    font-weight: 600;
    line-height: 64px;
    color: #2A282B;
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
  .primary_img{
    width: 24px
  }

}
.secondary_text {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: #6B6478;  
}
@media screen and (max-width: 550px) {
  .secondary_text {
    font-size: 20px;
  
  }
}
.join_btn {
    padding: 16px 40px 16px 40px;
    border-radius: 12px;
    border: 1.5px solid #624CF5;
    font-size: 16px;
    line-height: 24px;
    color: #624CF5;
    font-weight: 700;
}

.secondary_image {
    gap: 2rem;
  justify-content: flex-end;
}
</style>