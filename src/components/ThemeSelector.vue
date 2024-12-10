<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import useTheme from "@/composables/useTheme";

const { isLightMode, changeColorMode } = useTheme();
</script>

<template>
  <button class="text-lg py-[2px] px-2 transition-colors hover:text-foregroundDeep" @click.prevent="changeColorMode">
    <Transition mode="out-in">
      <Icon v-if="isLightMode" icon="iconoir:sun-light" />
      <Icon v-else icon="iconoir:half-moon" />
    </Transition>
  </button>
</template>
