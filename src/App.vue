<script lang="ts" setup>
import { RouterView } from "vue-router";
import PageNavbar from "@/components/PageNavbar.vue";
</script>

<template>
  <PageNavbar />
  <RouterView v-slot="{ Component }" class="transition-all">
    <Transition
      enter-active-class="ease-in duration-300"
      enter-from-class="opacity-0"
      leave-active-class="ease-out duration-300"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
