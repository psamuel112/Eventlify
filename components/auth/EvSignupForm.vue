<template>
  <div class="mr-md-n10 ml-md-n10">
    <v-form>
      <v-col class="">
        <v-text-field
        classs=""
        :error-messages="nameErrors"
          v-model="form.name"
          label="Full name"
          density="compact"
          placeholder="Full name"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        ></v-text-field>
        <v-text-field
        class="mt-4"
        :error-messages="emailErrors"
          v-model="form.email"
          label="Email address"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
        <v-text-field
        class="mt-4 mb-4"
        :error-messages="passwordErrors"
          v-model="form.password"
          label="Password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <div class="d-flex terms_wrapper gap-4 mt-n2 ml-n2">
          <v-checkbox class="mt-n2" v-model="isenable"></v-checkbox>
          <p class="body3_medium dark2 text-left">
            By creating an account means you agree to the<span class="purple90"
              >Terms & Conditions</span
            >
            and our <span class="purple90">Privacy Policy</span>
          </p>
        </div>
        <v-btn
        :loading="loading"
          @click="submit"
          :disabled="!isenable"
          block
          class="text-none text-white signin_btn"
          color="#624CF5"
          size="large"
        >
          Sign Up
        </v-btn>
      </v-col>
    </v-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useToast } from 'vue-toastification';
const toast = useToast();
const loading = ref(false)
const visible = ref(false);
const isenable = ref(true);

const router = useRouter();
const auth = useAuthService();
const form = reactive({
  email: "",
  name: "",
  password: "",
});
const nameErrors= ref([]);
const emailErrors = ref([]);
const passwordErrors = ref([]);

function validateForm() {
  emailErrors.value = [];
  passwordErrors.value = [];
  nameErrors.value = []
  let valid = true;


  if (!form.name) {
    nameErrors.value.push('Name is required');
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

  return valid;
}


async function submit() {
  if (!validateForm()) return;
  loading.value = true;
  try {

    const response = await auth.register(form);
    console.log("response", response);
    if (response && response.status) {
      toast.success(
        'Registration successful'
      );
      // route to dashboard
      router.push("/dashboard");
    }
    else {
      loading.value = false;
      toast.error('Email already exists');

    }
  }
   catch (error) {
    console.log("error", error);
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
