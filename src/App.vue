<script lang="ts" setup>
import { RouterView } from "vue-router";
import PageNavbar from "@/components/PageNavbar.vue";
import { useScreenSize } from "@/composables/useScreenSize";
import { computed } from "vue";

const isMobile = useScreenSize();
const translateDistance = computed(() => {
  return isMobile.value ? "translate-y-10" : "translate-y-16";
});
</script>

<template>
  <PageNavbar />
  <RouterView v-slot="{ Component }" class="transition-all">
    <Transition
      :enter-from-class="`opacity-0 ${translateDistance}`"
      enter-active-class="ease-in duration-200"
      leave-active-class="ease-in-out duration-200"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
