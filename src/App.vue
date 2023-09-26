<template>
  <RouterView />
  
  <BaseFooter/>
</template>

<script setup>
import { RouterView } from "vue-router";
import BaseFooter from "./components/BaseFooter.vue";
</script>