<template>
  <q-page class="flex q-pa-md">
    <BuyTicketStepperVue> </BuyTicketStepperVue>
    <q-date> </q-date>
  </q-page>
</template>

<script>
//import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import BuyTicketStepperVue from "src/components/BuyTicketStepper.vue";

export default defineComponent({
  name: "DadosPassageiro",
  components: {
    BuyTicketStepperVue,
  },
});
</script>
