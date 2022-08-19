<template>
  <q-page class="flex q-pa-md">
    <BuyTicketStepperVue> </BuyTicketStepperVue>
    <q-btn :to="{ name: 'dadosPassageiro' }"> Next merrmao </q-btn>
  </q-page>
</template>

<script>
//import { useQuasar } from "quasar";
import { defineComponent, onMounted, ref } from "vue";
import BuyTicketStepperVue from "src/layouts/BuyTicketStepper.vue";

export default defineComponent({
  name: "SelectFlight",
  components: {
    BuyTicketStepperVue,
  },
  setup() {
    onMounted(() => {
      console.log("oie");
    });
  },
});
</script>
