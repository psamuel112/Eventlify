<template>
  <div class="mr-md-n10 ml-md-n10">
    <v-form>
      <v-col class="">
        <v-text-field class="mt-4 mb-4" :error-messages="emailErrors" v-model="form.email" label="Email address"
          density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
          variant="outlined"></v-text-field>
        <v-text-field classs="mt-4 mb-4" :error-messages="nameErrors" v-model="form.token" label="Enter 6 digits code"
          density="compact" placeholder="Enter 6 digits code" prepend-inner-icon="mdi-account-outline"
          variant="outlined"></v-text-field>
        <v-text-field class="mt-4 mb-4" :error-messages="passwordErrors" v-model="form.password"
          label="Enter new password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter new password"
          prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="visible = !visible"></v-text-field>
        <v-text-field class="mt-4 mb-4" :error-messages="confirmPasswordErrors" v-model="form.password_confirmation"
          label="Confirm password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'" density="compact" placeholder="Confirm password"
          prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="visible = !visible"></v-text-field>
        <v-btn :loading="loading" @click="submit" block class="text-none text-white signin_btn" color="#624CF5"
          size="large">
          Confirm
        </v-btn>
      </v-col>
    </v-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useToast } from 'vue-toastification';
import { useAuthentication } from '~/store/Authentication';
const toast = useToast();
const loading = ref(false)
const visible = ref(false);
const router = useRouter();
const auth =  useAuthentication();
const form = reactive({
  email: "",
  token: "",
  password: "",
  password_confirmation: ""
});
const nameErrors = ref([]);
const emailErrors = ref([]);
const passwordErrors = ref([]);
const confirmPasswordErrors = ref([]);

function validateForm() {
  emailErrors.value = [];
  passwordErrors.value = [];
  nameErrors.value = [];
  confirmPasswordErrors.value = [];
  let valid = true;

  if (!form.token) {
    nameErrors.value.push('Code is required');
    valid = false;
  }

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

  if (!form.password_confirmation) {
    confirmPasswordErrors.value.push('Confirm password is required');
    valid = false;
  } else if (form.password_confirmation.length < 8) {
    confirmPasswordErrors.value.push('Password must be at least 8 characters long');
    valid = false;
  }

  return valid;
}


async function submit() {
  console.log("not submitted")
  if (!validateForm()) return;
  console.log("submitted")
  loading.value = true;
  try {
    console.log("form", form); 
    const response = await auth.resetPassword(form);
    console.log("response", response);
    if (response && response.status) {
      toast.success(
      'Password reset successful'
    );
   
      router.push("/signin");
    }
    else {
      loading.value = false;
      toast.error('Something went wrong. Please try again.');

    }
  }
  catch (error) {
    if (error.response && error.response.status === 422) {
      const serverErrors = error.response.data.errors;

      if (serverErrors.email) {
        emailErrors.value = serverErrors.email;
      }
      if (serverErrors.token) {
        nameErrors.value = serverErrors.token;
      }
      if (serverErrors.password) {
        passwordErrors.value = serverErrors.password;
      }

      toast.error("Please correct the highlighted errors.");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    toast.error('Something went wrong. Please try again.');

  } finally {
    loading.value = false;
  }
}
</script>
<style scoped>
@media (min-width: 992px) {
  .terms_wrapper {
    width: 25.5rem;
  }
}
</style>
