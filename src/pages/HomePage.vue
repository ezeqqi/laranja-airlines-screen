<template>
  <q-page class="flex q-pa-md">
    <div class="q-pa-md">
      <q-btn-dropdown
        menu-anchor="bottom left"
        menu-self="top left"
        color="amber-5"
        label="Comprar Passagens"
      >
        <div class="q-pa-md row-md-11">
          <div class="q-pa-md row justify-evenly">
            <q-input
              class="col-5"
              v-model="password"
              filled
              type="text"
              hint="Origem"
            >
              <template v-slot:append>
                <q-icon size="24px" name="flight_takeoff" />
              </template>
            </q-input>

            <q-input
              class="col-5"
              v-model="password"
              filled
              :type="text"
              hint="Destino"
            >
              <template v-slot:append>
                <q-icon size="24px" name="location_on" />
              </template>
            </q-input>

            <q-input
              class="col-5"
              v-model="time"
              filled
              type="date"
              hint="Data de volta"
            />

            <q-input
              class="col-5"
              v-model="date"
              filled
              type="date"
              hint="Data de ida"
            />
          </div>

          <q-btn
            class="col-6 fit row wrap justify-end"
            color="orange-6"
            label="Pesquisar Passagens"
            :to="{ name: 'selectFlight' }"
          >
          </q-btn>
        </div>
      </q-btn-dropdown>
    </div>
  </q-page>
</template>

<script>
//import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomePage",
  setup() {
    return {
      password: ref(""),
      email: ref(""),
      search: ref(""),
      tel: ref(""),
      url: ref(""),
      time: ref(""),
      date: ref(""),
    };
  },
});
</script>
