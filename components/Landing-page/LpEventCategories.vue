<template>
    <div class="category_container px-md-24 px-8 py-24">
        <div class="mb-6 d-md-flex justify-space-between primary_container">
            <div class="mt-n5">
                <div>
                    <div class="d-flex">
                        <p class="primary_text mt-3">All Categories of Events</p>
                        <img class="mb-10" src="../../assets/images/svg/splash.svg" alt="" />
                    </div>
                    <p class="primary_text">to Celebrate</p>
               aw34 </div>
                <p class="secondary_text mt-6">You’re provided with an avenue to create the most<br> engaging activities for
                    thousands of audiences. Also,<br> you
                    can find events to attend based on your interests</p>
                <button class="join_btn mt-10">Join Now</button>
            </div>
            <div>
                <img class="w-100" src="../../assets/images/png/Maskgroup.png" alt="" />
            </div>
        </div>
         <div class="d-md-flex  secondary_image  ">
            <img class="w-100" src="../../assets/images/png/Maskgroup1.png" alt="" />
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

.secondary_text {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: #6B6478;
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