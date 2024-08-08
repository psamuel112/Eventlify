<template>
    <div class="mr-md-n10 ml-md-n10">
     <v-form>
    <v-col
    class=""
        >
    <v-text-field
      density="compact"
      placeholder="Email"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
    ></v-text-field>
    <NuxtLink to="verifyemail">
        <v-btn  block class="text-none text-white signin_btn" color="#624CF5" size="large" >
        Continue
      </v-btn>
    </NuxtLink>
    </v-col>        
     </v-form>    
    </div>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
const isenable =ref(true)
</script>
<style  scoped>
@media (min-width: 992px) {
    .terms_wrapper{
    width: 25.5rem;
}
}
</style>