<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="store.stepper.step"
      ref="store.stepper.step"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Selecionar Passagens"
        icon="settings"
        :done="store.stepper.step > 1"
      >
        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        title="Dados do Passageiro"
        caption="Login"
        icon="create_new_folder"
        :done="store.stepper.step > 2"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.
      </q-step>

      <q-step :name="3" title="Escolher poltrona" icon="assignment">
        This step won't show up because it is disabled.
      </q-step>

      <q-step :name="4" title="Pagamento" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.
      </q-step>

      <!--  <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="store.stepper.nextStep()"
            color="primary"
            :label="store.step === 4 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="store.stepper.step > 1"
            flat
            color="primary"
            @click="store.stepper.previousStep()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template> -->
    </q-stepper>
  </div>
</template>

<script setup>
import { store } from "src/components/store";
</script>
