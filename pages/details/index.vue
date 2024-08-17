<template>
  <div class="container mt-8">
   
      <div class="m-auto text-center">
        <p class="h3_semibold purple90">Create An Event</p>
        <p class="h6_medium dark2 mt-4 mb-8 px-8 px-md-28">
          Kindly fill out the details carefully and make sure to fill in
          required fields as you create your event of a lifetime
        </p>
      </div>
      <div>
        <p class="h4_semibold purple90 mb-1">Event Details</p>
        <p class="body3_medium dark2 pr-32 mb-4">
          Tell your potential attendees more about the event so they know
          exactly what to<br />
          expect when they come
        </p>
      </div>
      <div class="form_container px-8 py-8">
        <div>
          <p class="h5_semibold dark0">Event Media</p>
          <p class="body3_medium dark3 mb-4">
            Clearly give the right name of the event, organizer and type of
            event for attendees to take note
          </p>
        </div>
        <div>
          <p class="body2_medium dark0 mb-2">Images</p>
          <p class="body3_medium dark2 mb-1">
            Add images to give your audience a visual of what the event would be
            like
          </p>
        <ImageUpload @update:image_url="handleImageUrl" />
        </div>
      </div>

      <div class="form_container mt-8 pb-32 px-8 md:pb-20 pt-8">
        <div>
          <p class="h5_semibold dark0">Description of Event</p>
          <p class="body3_medium dark3 mb-4">
            Let your sttendees know more about your events. The highlights or
            guests appearances
          </p>
        </div>
        <div class="editor">
          <QuillEditor
            ref="myQuillEditor"
            v-model:content="form.description"
            contentType="html"
            class="editor"
            theme="snow"
            toolbar="essential"
          />
        </div>
      </div>
      <div class="form_container mt-8 px-8 py-4 pt-8">
        <div>
          <p class="h5_semibold dark0">Additional Info</p>
          <p class="body3_medium dark3 mb-4">
            Kindly add any more additional information about this event
          </p>
        </div>
        <div class="">
          <v-textarea
            v-model="form.additional_info"
            variant="outlined"
            label="Write a brief message"
          ></v-textarea>
        </div>
      </div>
      <div class="d-flex justify-end gap-4 mt-8 mb-16">
        <button class="back_btn body2_bold purple90 text-none py-3 px-10">
          Back
        </button>
        <button @click="submitForm" class="text-none nxt_btn py-3 px-10">
          Continue
        </button>
      </div>
  
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import ImageUpload from "~/components/common/EvImageUpload.vue";
import { useRouter } from "vue-router";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const form = reactive({
  additional_info: "",
  description: "",
  image_url: ""
  
});

definePageMeta({
  layout: "events",
});
// Define a reactive form object
function handleImageUrl(url) {
  form.image_url = url;
}

const router = useRouter();
// Load form data from local storage if it exists
// onMounted(() => {
//   const savedForm = JSON.parse(localStorage.getItem("formData"));
//   if (savedForm) {
//     Object.assign(form, savedForm);
//   }
// });

const submitForm = () => {
  localStorage.setItem("formData", JSON.stringify(form));
  console.log("details", form);
  router.push("/tickets"); // Navigate to the next form page
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 48.1rem;
}
.editor {
  height: 12rem;
}
.nxt_btn {
  color: #ffffff;
  border-radius: 12px;
  background-color: #624cf5;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.back_btn {
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  border: 1.5px solid #e2e8f0;
}
.event_image_bg {
  height: 200px;
  background-image: url("../../assets/images/png/upload.png");
}
.input {
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.event_btn {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.form_container {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}
.tag_wrapper {
  background-color: #f7f7fd;
}
</style>
