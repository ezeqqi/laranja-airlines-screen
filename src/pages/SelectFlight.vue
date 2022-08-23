<template>
  <q-page class="q-pa-md">
    <BuyTicketStepperVue />
    <q-table
      title="Selecionar Passagem"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="single"
      v-model:selected="selected"
      hide-pagination
      hide-selected-banner
      bordered
    >
    </q-table>
    <div class="q-pa-sm col-12">
      <q-btn
        v-show="selected.length > 0"
        color="blue-5"
        :to="{ name: 'dadosPassageiro' }"
        label="Selecionar Voo"
      >
      </q-btn>
    </div>
  </q-page>
</template>

<script>
//import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import BuyTicketStepperVue from "src/components/BuyTicketStepper.vue";

export default defineComponent({
  name: "SelectFlight",
  components: {
    BuyTicketStepperVue,
  },

  setup() {
    const columns = [
      {
        name: "Origem",
        required: true,
        label: "Origem",
        align: "left",
        field: (row) => row.name,
        //format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "destino",
        align: "left",
        label: "Destino",
        field: "destino",
        sortable: true,
      },
      {
        name: "duracao",
        align: "left",
        label: "Duração",
        field: "duracao",
        sortable: true,
      },

      {
        name: "modalidade",
        align: "left",
        label: "Modalidade",
        field: "modalidade",
        sortable: true,
      },
      { name: "preco", align: "left", label: "Preço", field: "preco" },
    ];

    const rows = [
      {
        name: "SDU - 15:40",
        origem: "SDU - 15:40",
        destino: "POA - 17:30",
        duracao: "01:50",
        modalidade: "Direto",
        preco: "R$ 500,00",
      },
      {
        name: "SDU - 16:00",
        origem: "SDU - 16:00",
        destino: "POA - 19:30",
        duracao: "03:30",
        modalidade: "Com escalas",
        preco: "R$ 390,00",
      },
      {
        name: "SDU - 12:00",
        origem: "SDU - 12:00",
        destino: "POA - 13:50",
        duracao: "01:50",
        modalidade: "Direto",
        preco: "R$ 450,00",
      },
    ];

    return {
      expanded: ref([]),
      selected: ref([]),
      columns,
      rows,
    };
  },
});
</script>
