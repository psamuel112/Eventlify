<template>
    <div>
      <main>
        <header class="d-none d-md-block">
          <nav>
            <navBar :account="account"/>
          </nav>
        </header>
  
        <div class="content mt-20 mt-md-0">
          <slot></slot>
        </div>
        <div class=" d-md-none">
        <EvMobileHeader :account="account"/>
    </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import EvMobileHeader from '~/components/common/EvMobileHeader.vue'
  import navBar from "~/components/eventDetails/navBar.vue";
  
  import { ref, onMounted } from 'vue';
import { useAccountStore } from "~/store/Account";
const Account = useAccountStore();
import { useAuthentication } from '~/store/Authentication';
const auth = useAuthentication();
const account = ref("")
onMounted(() => {
 loadData();
});
async function loadData() {
  try {
    const data = await Account.fetchAccountDetails();
    const fullName = data.data.name;  
    const firstName = fullName.split(' ')[0];  
    account.value = { ...data.data, name: firstName };  
  } catch (error) {
    console.error(error);
  }
}
  </script>
  
  <style lang="scss" scoped>
 
  </style>
  