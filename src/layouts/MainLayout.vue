<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-orange-5 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title shrink> Laranja </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/" label="Page One" />
        <q-route-tab to="/selectflight" label="Page Two" />
        <q-route-tab to="/dadospassageiro" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>
