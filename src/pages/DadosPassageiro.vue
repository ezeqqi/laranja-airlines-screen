<template>
  <BuyTicketStepperVue> </BuyTicketStepperVue>
  <q-page padding>
    <div>
      <q-form class="q-gutter-md" @submit="submitEvent">
        <div class="text-subtitle1">Dados do passageiro:</div>
        <q-input outlined label="Nome" v-model="form.name">
          <template v-slot:append>
            <q-icon size="24px" name="person" />
          </template>
        </q-input>

        <q-input
          outlined
          v-model="form.birthday"
          label="Data de nascimento"
          mask="##/##/####"
          clearable
          type="date"
        >
        </q-input>

        <q-input outlined autogrow label="" v-model="form.cpf">
          <template v-slot:append>
            <q-icon size="24px" name="subject" />
          </template>
        </q-input>
        <div class="row q-gutter-sm">
          <q-btn
            label="Cancel"
            class="col"
            color="teal-5"
            :to="{ name: 'home' }"
          ></q-btn>
          <q-btn
            label="Submit"
            class="col"
            color="orange-5"
            type="submit"
          ></q-btn>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
//import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import BuyTicketStepperVue from "src/components/BuyTicketStepper.vue";
import { date } from "quasar";

let todaysDate = () => {
  const timeStamp = Date.now();
  return date.formatDate(timeStamp, "YYYY/MM/DD");
};

export default defineComponent({
  name: "DadosPassageiro",
  components: {
    BuyTicketStepperVue,
  },
  setup() {
    return {
      form: ref({
        nome: ref(""),
        birthday: ref(todaysDate()),
        cpf: ref(""),
        email: ref(""),
        _id: "",
      }),
    };
  },
});
</script>
