<template>
    <v-btn block flat border class="text-none mt-8" size="large" color="#624cf5" :disabled="!hasScriptLoaded"
        :class="buttonClass" @click="payWithPaystack">
        <slot>
            {{ buttonText }}
        </slot>
    </v-btn>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSlots } from 'vue';

const props = defineProps({
    buttonClass: {
        type: String,
        default: "",
    },
    buttonText: {
        type: String,
        default: "Pay Now",
    },
    publicKey: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        default: "",
    },
    lastname: {
        type: String,
        default: "",
    },
    amount: {
        type: Number,
        required: true,
    },
    reference: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        default: "NGN",
    },
    onSuccess: {
        type: Function,
        default: function (response) {
            console.log(response);
        },
    },
    onCancel: {
        type: Function,
        default: function () {
            console.log("payment closed");
        },
    },
    channels: {
        type: Array,
        default: () => ["card", "bank", "ussd", "qr", "mobile_money"],
    },
    metadata: {
        type: Object,
        default: () => ({}),
    },
    label: {
        type: String,
        default: "",
    },
});

const hasScriptLoaded = ref(false);

async function mountScript() {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.setAttribute("src", "https://js.paystack.co/v2/inline.js");
        script.setAttribute("type", "text/javascript");
        document.head.appendChild(script);

        script.onload = () => resolve();
        script.onerror = () => reject();
    });
}

onMounted(async () => {
    await mountScript();
    hasScriptLoaded.value = true;
});

function payWithPaystack() {
    const paymentOptions = {
        key: props.publicKey,
        email: props.email,
        amount: props.amount,
        reference: props.reference,
        currency: props.currency,
        channels: props.channels,
        metadata: props.metadata,
        label: props.label,
        firstname: props.firstname,
        lastname: props.lastname,
        onSuccess: (response) => {
            props.onSuccess(response);
        },
        onCancel: () => {
            props.onCancel();
        },
    };

    const paystack = new window.PaystackPop();
    paystack.newTransaction(paymentOptions);
}
</script>