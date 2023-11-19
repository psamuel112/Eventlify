<template>
    <div class="inform_container  px-10">
        <div class="inform_wrapper d-flex align-center justify-space-between">
                <div class="d-flex  primary_details">
                    <p class="primary_text">Want to Be Informed on <br> The Next Event</p>
                    <img class="primary_image" src="../../assets/images/svg/splash.svg" alt="" />
                </div>
                <div class="inform_form  px-12 py-12">
                    <v-form>
                        <v-col cols="16">
                            <div class="">
                                <label class="inform_label">Name</label>
                                <input placeholder="" class=" inform_input mt-2 py-4 w-100" />
                            </div>
                        </v-col>
                        <v-col cols="16">
                            <div class="mt-2 ">
                                <label class="inform_label">Email address</label>
                                <input type="text" placeholder="" class="inform_input py-4 mt-2 w-100" />
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="mt-2 px- inform_btn text-center">
                                <button class="py-4">Submit</button>
                            </div>
                        </v-col>
                    </v-form>
                </div>
           
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
.inform_container {
    padding: 80px 0px 80px 0px
}
.content_wrapper{
}
.inform_wrapper {
    background-color: #0E0B26;
    padding: 80px 80px 80px 80px;
    border-radius: 32px;
    position: relative;
    height: 42rem;
    background-size: cover;
}

.inform_wrapper::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 32px;
    right: 0;
    height: 340px;
    background-image: linear-gradient(4.16deg, rgba(14, 11, 38, 0.6) 67.81%, #0E0B26 88.84%), url(../../assets/images/png/background.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
    border-radius: 0px, 0px, 32px, 32px;
}

.inform_form {
    background-color: #624CF5;
    border-radius: 16px;
    width: 32rem;
    z-index: 2;
    margin-top: -21rem
}

.inform_input {
    border: 1px solid #EFEDFE;
    border-radius: 12px;
    color: #ffffff;
}

.inform_label {
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    color: #ffffff;

}

.primary_text {
    font-size: 48px;
    font-weight: 600;
    line-height: 64px;
    color: #ffffff;
}

.inform_btn {
    color: #ffffff;
    background-color: #0E0B26;
    border-radius: 12px;
    padding: 16px, 40px, 16px, 40px;
    align-items: center;
}
.primary_image{
    margin-top: -7rem
}
.primary_details {
    z-index: 2;
    margin-top: -16rem
}
</style>