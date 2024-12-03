<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { Icon } from "@iconify/vue";

const isLightMode = ref(true);

watchEffect(() =>
  isLightMode.value ? document.documentElement.classList.remove("dark") : document.documentElement.classList.add("dark")
);

function changeColorMode() {
  isLightMode.value = !isLightMode.value;
}
</script>

<template>
  <button class="text-lg py-[2px] px-2" @click.prevent="changeColorMode">
    <Transition mode="out-in">
      <Icon v-if="isLightMode" icon="iconoir:sun-light" />
      <Icon v-else icon="iconoir:half-moon" />
    </Transition>
  </button>
</template>
