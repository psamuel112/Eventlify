<template>
    <div class="">
        <v-divider></v-divider>
        <div class="d-flex footer_container justify-space-between align-center">
            <p class="footer_text">
                ©2023, All Rights reserved
            </p>
            <p class="footer_text">Eventlify</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.footer_container{
  padding: 40px 104px 40px 104px;
  background-color: #F7F7FD;  
}
@media screen and (max-width: 550px) {
  .footer_container {
   padding: 40px 80px 40px 80px
  }
}
.footer_text{
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
text-align: right;
color: #3F434A;
}
@media screen and (max-width: 550px) {
  .footer_text {
   font-size: 12px
  }
}
</style>