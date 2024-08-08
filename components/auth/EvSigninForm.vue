<template>
  <div class="mr-md-n10 ml-md-n10">
    <v-form>
      <v-col class="">
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
        <div class="d-flex align-center mt-n7 ml-n2 justify-between">
          <v-checkbox class="checkbox"
            ><template v-slot:label>
              <div class="body3_medium purple90 text-left">
                <p>Remember me</p>
              </div>
            </template></v-checkbox
          >
          <NuxtLink to="/resetpassword">
            <p class="bold3_bold purple50 mt-n5">Forgot Password</p>
          </NuxtLink>
        </div>

        <v-btn
          block
          class="text-none text-white signin_btn"
          color="#624CF5"
          size="large"
          @click="login"
        >
          Sign In
        </v-btn>
      </v-col>
    </v-form>
  </div>
</template>

<script setup>
import { useRouter } from "nuxt/app";
import { ref, reactive } from "vue";
import { useAuthentication } from "~/store/Authentication";

const visible = ref(false);
const router = useRouter();
const auth = useAuthentication();
const form = reactive({
  username: "",
  password: "",
});

async function login() {
  
  try {
    const response = await auth.loginUser(form);
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
<style scoped></style>
