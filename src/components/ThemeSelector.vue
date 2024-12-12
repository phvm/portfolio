<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import useTheme from "@/composables/useTheme";

const { isDarkMode, changeColorMode } = useTheme();
</script>

<template>
  <button
    class="text-lg py-[2px] px-2 transition-colors hover:text-foregroundDeep"
    type="button"
    @click.prevent="changeColorMode"
  >
    <Transition mode="out-in">
      <Icon v-if="isDarkMode" icon="iconoir:half-moon" />
      <Icon v-else icon="iconoir:sun-light" />
    </Transition>
  </button>
</template>
