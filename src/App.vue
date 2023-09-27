<template>
   <RouterView v-slot="{Component}">
      <Transition name="page" mode="out-in">
        <component :is="Component"/>
      </Transition>
    </RouterView>
  
  <BaseFooter/>
</template>

<script setup>
import { RouterView } from "vue-router";
import BaseFooter from "./components/BaseFooter.vue";
</script>

<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>