<template>
  <div class="mr-md-n10 ml-md-n10">
    <v-form>
      <v-col>
        <v-text-field v-model="form.email" label="Email address" density="compact" placeholder="Email address"
          prepend-inner-icon="mdi-email-outline" variant="outlined" :error-messages="emailErrors"></v-text-field>
        <v-text-field class="mt-4" v-model="form.password" label="Password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="visible = !visible" :error-messages="passwordErrors"></v-text-field>
        <div class="d-flex align-center  ml-n2 justify-between">
          <v-checkbox class="checkbox">
            <template v-slot:label>
              <div class="body3_medium purple90 text-left">
                <p>Remember me</p>
              </div>
            </template>
          </v-checkbox>
          <NuxtLink to="/verifyemail">
            <p class="bold3_bold purple50 mt-n5">Forgot Password</p>
          </NuxtLink>
        </div>

        <v-btn 
        :loading="loading"
        block class="text-none text-white signin_btn" color="#624CF5" size="large" @click="login">
          Sign In
        </v-btn>
      </v-col>
    </v-form>
    <Loader v-if="isLoading" />
    
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification';
import Loader from "~/components/common/loader.vue";
import { ref, reactive } from 'vue';
import { useRouter } from 'nuxt/app';
import { useAuthentication } from '~/store/Authentication';
const loading = ref(false)
const toast = useToast();
const isLoading = ref(false)
const visible = ref(false);
const router = useRouter();
const auth = useAuthentication();
const form = reactive({
  email: '',
  password: '',
});
const emailErrors = ref([]);
const passwordErrors = ref([]);

function validateForm() {
  emailErrors.value = [];
  passwordErrors.value = [];
  let valid = true;

  if (!form.email) {
    emailErrors.value.push('Email is required');
    valid = false;
  } else if (!/.+@.+\..+/.test(form.email)) {
    emailErrors.value.push('Email must be valid');
    valid = false;
  }

  if (!form.password) {
    passwordErrors.value.push('Password is required');
    valid = false;
  } else if (form.password.length < 8) {
    passwordErrors.value.push('Password must be at least 8 characters long');
    valid = false;
  }

  return valid;
}

async function login() {
  if (!validateForm()) return;
  isLoading.value = true
  try {
    const response = await auth.loginUser(form);
    if (response) {
      toast.success(
        'login successful'
      )
      // Navigate to dashboard
      router.push('/dashboard');

    } else {
      isLoading.value = false;
      toast.error('Invalid credentials');

    }
  } catch (error) {
      loading.value = false;
    toast.error('invalid credentials')
  }
}
</script>

<style scoped>

</style>