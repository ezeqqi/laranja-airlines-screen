<template>
  <q-page class="flex q-pa-md">
    <BuyTicketStepperVue />
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
        selection="multiple"
        v-model:selected="selected"
        :filter="filter"
        grid
        hide-header
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:item="props">
          <div
            class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
            :style="props.selected ? 'transform: scale(0.95);' : ''"
          >
            <q-card :class="props.selected ? 'bg-grey-2' : ''">
              <q-card-section>
                <q-checkbox
                  dense
                  v-model="props.selected"
                  :label="props.row.name"
                />
              </q-card-section>
              <q-separator />
              <q-list dense>
                <q-item
                  v-for="col in props.cols.filter((col) => col.name !== 'desc')"
                  :key="col.name"
                >
                  <q-item-section>
                    <q-item-label>{{ col.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>{{ col.value }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
        </template>
      </q-table>
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
        name: "origem",
        required: true,
        label: "Origem",
        align: "left",
        field: "ORIGEM",
        sortable: true,
      },
      {
        name: "destino",
        align: "center",
        label: "Destino",
        field: "destino",
        sortable: true,
      },
      {
        name: "modalidade",
        label: "Modalidade",
        field: "modalidade",
        sortable: true,
      },
      { name: "preço", label: "Preço", field: "Preço", sortable: true },
    ];

    const rows = [
      {
        name: "SDU - 15:40",
        calories: 159,
        fat: 6.0,
        carbs: 24,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
      },
    ];
    return {
      filter: ref(""),
      columns,
      rows,
      selected: ref([]),
    };
  },
});
</script>
