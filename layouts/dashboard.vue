<template>
  <div>
    <main>
      <div class=" d-md-none">
        <EvMobileHeader :account="account" />
      </div>
      <div class="d-none d-md-block">
        <EvHeader :account="account" />
      </div>
      <div class="mt-20 d-md-none">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
import EvMobileHeader from '~/components/common/EvMobileHeader.vue';
import EvHeader from '~/components/common/EvHeader.vue';
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

<style lang="scss" scoped></style>