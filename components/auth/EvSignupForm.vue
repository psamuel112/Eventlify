<template>
  <div class="mr-md-n10 ml-md-n10">
    <v-form>
      <v-col class="">
        <v-text-field
          v-model="form.name"
          label="Full name"
          density="compact"
          placeholder="Full name"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          label="Email address"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
        <v-text-field
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
const visible = ref(false);
const isenable = ref(true);

const router = useRouter();
const auth = useAuthService();
const form = reactive({
  email: "",
  name: "",
  password: "",
});

async function submit() {
  try {
    const response = await auth.register(form);
    console.log("response", response);
    if (response) {
      // route to dashboard
      router.push("/dashboard");
    }
  } catch (error) {
    console.log("error");
  } finally {
    console.log("error");
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
