<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import useTheme from "@/composables/useTheme";

const { isDarkMode, changeColorMode } = useTheme();
</script>

<template>
  <button class="text-xl py-[2px] px-2 hover:text-foregroundDeeper" type="button" @click.prevent="changeColorMode">
    <Transition
      class="transition-all"
      enter-active-class="duration-150 ease-in"
      enter-from-class="opacity-0"
      leave-active-class="duration-150 ease-in"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <Icon v-if="isDarkMode" icon="iconoir:half-moon" />
      <Icon v-else icon="iconoir:sun-light" />
    </Transition>
  </button>
</template>
