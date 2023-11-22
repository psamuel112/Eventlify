<template>
  <div class="container mt-8">
    <div class="m-auto text-center">
      <p class="header_text">Create An Event</p>
      <p class="sub_text mt-4 mb-8 px-28">
        Kindly fill out the details carefully and make sure to fill in required
        fields as you create your event of a lifetime
      </p>
    </div>
    <div>
      <p class="info_heading mb-1">Event Details</p>
      <p class="basic_sub pr-32 mb-4">
        Tell your potential attendees more about the event so they know exactly
        what to<br />
        expect when they come
      </p>
    </div>
    <div class="form_container px-8 py-8">
      <div>
        <p class="form_heading">Event Media</p>
        <p class="form_sub_text mb-4">
          Clearly give the right name of the event, organizer and type of event
          for attendees to take note
        </p>
      </div>
      <div>
        <p class="image_text mb-2">Images</p>
        <p class="basic_sub mb-1">
          Add images to give your audience a visual of what the event would be
          like
        </p>
        <img src="../../assets/images/png/upload.png" />
      </div>
    </div>

    <div class="form_container mt-8 pb-32 px-8 md:pb-20 pt-8">
      <div>
        <p class="form_heading">Description of Event</p>
        <p class="form_sub_text mb-4">
          Let your sttendees know more about your events. The highlights or
          guests appearances
        </p>
      </div>
      <div class="editor">
        <TextEditor />
      </div>
    </div>
    <div class="form_container mt-8 px-8 py-4 pt-8">
      <div>
        <p class="form_heading">Additional Info</p>
        <p class="form_sub_text mb-4">
          Kindly add any more additional information about this event
        </p>
      </div>
      <div class="">
        <v-textarea
          variant="outlined"
          label="Write a brief message"
        ></v-textarea>
      </div>
    </div>
    <div class="d-flex justify-end gap-4 mt-8 mb-16">
      <button  class="back_btn text-none py-3 px-10" > Back </button>
      <button class="text-none nxt_btn py-3 px-10"> Continue </button>
    </div>
  </div>
</template>

<script setup>
import TextEditor from "~/components/event/TextEditor.vue";

definePageMeta({
  layout: "events",
});

import { defineProps } from "vue";

</script>

<style lang="scss" scoped>
.container {
  max-width: 48.1rem;
}
.tag_text {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #6b6478;
}
.editor {
  height: 12rem;
}
.nxt_btn{

color: #ffffff;
border-radius: 12px;
background-color: #624CF5;
font-size: 16px;
font-weight: 700;
line-height: 24px;
}
.back_btn{
    border-radius: 12px;
font-size: 16px;
font-weight: 700;
line-height: 24px;
border: 1.5px solid #E2E8F0;
}
.input {
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.header_text {
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  color: #0e0b26;
}
.event_btn {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.form_heading {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #2a282b;
}
.sub_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #6b6478;
}
.form_container {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}
.tag_wrapper {
  background-color: #f7f7fd;
}
.info_heading {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #0e0b26;
}
.form_label {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #2a282b;
}
.basic_sub {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #6b6478;
}
.form_sub_text {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #a29daf;
}
.zoom_text {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.image_text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #2a282b;
}
</style>
