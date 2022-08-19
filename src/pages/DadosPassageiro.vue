<template>
  <q-page class="flex q-pa-md">
    <BuyTicketStepperVue :count="3"> </BuyTicketStepperVue>
    <q-date> </q-date>
  </q-page>
</template>

<script>
//import { useQuasar } from "quasar";
import { defineComponent, onMounted, ref } from "vue";
import BuyTicketStepperVue from "src/layouts/BuyTicketStepper.vue";

export default defineComponent({
  name: "DadosPassageiro",
  components: {
    BuyTicketStepperVue,
  },
  setup() {
    onMounted(() => {
      console.log("second step");
    });
  },
});
</script>
