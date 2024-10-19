<template>
  <div>
    <div
      class="dropzone"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
      ref="dropzone"
    >
      <div>
        <p>Upload image</p>
        <p>or</p>
        <button @click="handleClick">Browse Here</button>
      </div>
      <input
        type="file"
        ref="fileInput"
        style="display: none"
        @change="handleFileInput"
      />
    </div>
    <div class="uploads_holder d-flex align-center my-4">
      <div v-for="(item, i) in fileArray" :key="i">
        <div class="image_holder">
          <img
            src="../../assets/images/svg/cancel.svg"
            class="cancel"
            @click="removeFile(i)"
          />
          <img :src="item" class="small-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const files = ref(null);
const fileArray = reactive([]);
const fileInput = ref(null);
const file = ref(null);

const dropzone = ref(null);
const emit = defineEmits(["uploadImage"]);

function handleDragOver(e) {
  e.preventDefault();
  if (files.value) {
    e.dataTransfer.dropEffect = "none"; // prevent drop if a file is already selected
  } else {
    e.dataTransfer.dropEffect = "copy";
  }
}

function handleDragLeave(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  if (!files.value) {
    const droppedFile = e.dataTransfer.files[0];
    // files.value = droppedFile;
    // uploadFile(droppedFile, 'prop_images');
    cloudinaryUpload(droppedFile, "prop_images");
  }
}

function handleClick(e) {
  fileInput.value.click();
}

function handleFileInput(e) {
  const newFile = e.target.files[0];
  cloudinaryUpload(newFile, "prop_images");
  // files.value = newFile;
}

function removeFile(x) {
  // check for index then remove from array
  console.log(x);
  fileArray.splice(x, 1);
}
async function cloudinaryUpload(file, FOLDER) {
  // const loader = this.$loading.show()
  const config = useRuntimeConfig();

  // const loader = this.$loading.show();
  try {
    const formData = new FormData();
    formData.append("upload_preset", "eventify_upload");
    formData.append("folder", FOLDER);
    formData.append("file", file);
    await fetch("https://api.cloudinary.com/v1_1/dxv5nkybb/image/upload", { method: "POST", body: formData })
      .then((res) => res.json())
      .then((data) => {
        fileArray.push(data.secure_url);
        emit("uploadImage", fileArray);
      });
  } catch (e) {
    // loader.hide();
   
    console.log(e);
  } finally {
    
  }
}
</script>

<style lang="scss" scoped>
// =================================================================
// General Styling
// =================================================================
p {
  font-size: 12px;
}
label {
  font-size: 12px;
  font-weight: 400;
  //   color: $faded_black;
}
button {
  //   color: $white;
  //   background-color: $base_blue;
  font-size: 12px;
  width: fit-content;
  height: fit-content;
  padding: 4px 8px;
  margin: 4px 0px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: none;
  color: #e12c5f;
  border: 1px solid #e12c5f;
}
#rmbtn {
  width: fit-content;
  font-size: 10px;
  padding: 0.25rem 0.45rem;
}
// =================================================================

.dropzone {
  // style for drop active
  background-size: cover;
  margin: 0.5rem 0px 0px 0px;
  border: 2px dashed #ccc;
  padding: 1.5rem;
  text-align: center;
  border-radius: 8px;
  span {
    //   color: $base_blue;

    cursor: pointer;
  }
  small#info {
    //   color: $faded_black;
    font-size: 10px;
  }
}
.uploads_holder {
  gap: 8px;
}
.image_holder {
  position: relative;
  height: 64px;
  width: 64px;
  border-radius: 8px;
  .small-image {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .cancel {
    position: absolute;
    top: -4px;
    right: -4px;
    cursor: pointer;
  }
}
</style>
