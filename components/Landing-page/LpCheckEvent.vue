<template>
    <div class="event_container px-12 px-md-16 py-20">
        <div class=" d-flex">
            <p class="primary_text mt-3">Check out events</p>
            <img class="mb-10 primary_img" src="../../assets/images/svg/splash.svg" alt="" />
        </div>
        <div class="btn_wrapper md:px-24 w-100 justify-space-between py-4 d-md-flex align-center ">
            <button class="px-6 py-2 event_btn">All</button>
            <button class=" px-6 py-1 event_btn">Entertainment</button>
            <button class=" px-6 py-1 event_btn">Business</button>
            <button class="px-6 py-1 event_btn">Finance</button>
            <button class="px-6 py-1 event_btn">Design</button>
            <button class="px-6 py-1 event_btn">Digital Marketing</button>
            <button class="px-6 py-1 event_btn">Artificial Intelligence</button>
        </div>
        <div class="card_container  w-100 align-center py-6">
            <div v-for="card in cards" :key="card" class="event_cards w-100">
                <img class="card_image w-100" :src="card.img" alt="" />
                <div class="px-6 w-100 py-4">
                    <p class="card_date">{{ card.date }}</p>
                    <p class="card_text mt-4">{{ card.text }}</p>
                    <p class="card_name mt-6">{{ card.name }}</p>
                </div>
            </div>
        </div>
        <div class="text-center pt-8">
            <button class="see_btn">
                See more
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Rectangle from "../../assets/images/png/Rectangle.png";
import Rectangle1 from "../../assets/images/png/Rectangle1.png";
import Rectangle2 from "../../assets/images/png/Rectangle2.png";
import Rectangle3 from "../../assets/images/png/Rectangle3.png";

const cards = ref([
    {
        name: 'Wisdom Ezekiel',
        date: 'Mon, 8th Apr, 8:45 am',
        text: 'Analytic thinking required in Solving today’s problem',
        img: Rectangle
    },
    {
        name: 'Wisdom Ezekiel',
        date: 'Mon, 8th Apr, 8:45 am',
        text: 'Analytic thinking required in Solving today’s problem',
        img: Rectangle1
    },
    {
        name: 'Wisdom Ezekiel',
        date: 'Mon, 8th Apr, 8:45 am',
        text: 'Analytic thinking required in Solving today’s problem',
        img: Rectangle2
    },
    {
        name: 'Wisdom Ezekiel',
        date: 'Mon, 8th Apr, 8:45 am',
        text: 'Analytic thinking required in Solving today’s problem',
        img: Rectangle3
    },
    {
        name: 'Wisdom Ezekiel',
        date: 'Mon, 8th Apr, 8:45 am',
        text: 'Analytic thinking required in Solving today’s problem',
        img: Rectangle
    },
    {
        name: 'Wisdom Ezekiel',
        date: 'Mon, 8th Apr, 8:45 am',
        text: 'Analytic thinking required in Solving today’s problem',
        img: Rectangle1
    },
    {
        name: 'Wisdom Ezekiel',
        date: 'Mon, 8th Apr, 8:45 am',
        text: 'Analytic thinking required in Solving today’s problem',
        img: Rectangle2
    },
    {
        name: 'Wisdom Ezekiel',
        date: 'Mon, 8th Apr, 8:45 am',
        text: 'Analytic thinking required in Solving today’s problem',
        img: Rectangle3
    },
])
</script>

<style scoped>
.event_container {

}
.event_btn{
font-size: 24px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0em;
border-radius: 8px;
color: #2A282B;
}
.event_btn:hover{
    background-color:  #624CF5;
    color: #ffffff;
}
.btn_wrapper{
    gap: 8px;
    overflow-x: hidden;
 
}

.event_cards {
    border-radius: 16px;
    border: 1px solid #EFEDFE;
 
}

.card_container {
    gap: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
}
@media screen and (max-width: 1200px) {
  .card_container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .card_container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 550px) {
  .card_container {
    width: 100%;
    grid-template-columns: 1fr;
  }
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

.card_image {
    border-radius: 16px 16px 0px 0px;
}

.card_date {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #6B6478;
}
.see_btn{
    padding: 16px 40px 16px 40px;
    border-radius: 12px;
    border: 1.5px solid #624CF5;
    font-size: 16px;
    line-height: 24px;
    color: #624CF5;
    font-weight: 700;  
}
.card_text {
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    color: #2A282B;
}

.card_name {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #2A282B;
}
</style>