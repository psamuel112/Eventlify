<template>
  <div>
    <input
     ref="fileInput"
     type="file"
     @change="uploadFile" 
     class="upload-input" />

    <!-- Display the uploaded file URL -->
    <div v-if="uploadedFileUrl">
      <img :src="uploadedFileUrl" alt="Uploaded Image" class="uploaded-image" />
    </div>

    <p v-if="loading">Uploading...</p>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, reactive, onMounted } from "vue";
const emit = defineEmits(["update:image_url"]);
const uploadedFileUrl = ref("");
const loading = ref(false);

async function uploadFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  loading.value = true;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "eventify_upload"); // Replace with your actual upload preset

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dxv5nkybb/image/upload", // Replace with your Cloudinary cloud name
      formData
    );

    uploadedFileUrl.value = response.data.secure_url;
    console.log("Uploaded file URL:", uploadedFileUrl.value);
    emit("update:image_url", uploadedFileUrl.value);
  } catch (error) {
    console.error("Upload error:", error);
  } finally {
    loading.value = false;
  }
}
</script>
<style>
</style>
