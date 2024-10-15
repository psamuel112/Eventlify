
  <template>
    <div class="mr-md-n10 ml-md-n10">
     <v-form>
    <v-col
    class=""
        >
    <v-text-field
    :error-messages="emailErrors"
    v-model="form.email"
      density="compact"
      placeholder="Email"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
    ></v-text-field>
        <v-btn 
        :loading="loading"
        @click="forgotPassword" block class="text-none mt-6 text-white signin_btn" color="#624CF5" size="large" >
        Continue
      </v-btn>
    </v-col>        
     </v-form>    
    </div>
</template>

<script setup>
import { useToast } from 'vue-toastification';
const toast = useToast();
import { ref, reactive } from 'vue';
import { useRouter } from 'nuxt/app';
import { useAuthentication } from '~/store/Authentication';
const loading = ref(false)
const router = useRouter();
const auth = useAuthentication();
const form  = reactive({
  email: ""
})
const emailErrors = ref([]);
const passwordErrors = ref([]);

function validateForm() {
  emailErrors.value = [];
  let valid = true;
  
  if (!form.email) {
    emailErrors.value.push('Email is required');
    valid = false;
  } else if (!/.+@.+\..+/.test(form.email)) {
    emailErrors.value.push('Email must be valid');
    valid = false;
  }
  return valid;
}


async function forgotPassword() {
  if (!validateForm()) return;
  loading.value = true;
  try {
    const response = await auth.forgotPassword(form);
    if (response) {
      // route to dashboard
     await router.push({
      name: 'resetpassword',
     });
      toast.success("Reset token sent successfully")
    }
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong. Please try again.');
    loading.value = false;
  } finally {
    loading.value = false;
  }
}
</script>
<style  scoped>
@media (min-width: 992px) {
    .terms_wrapper{
    width: 25.5rem;
}
}
</style>