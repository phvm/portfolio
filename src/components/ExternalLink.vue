<script lang="ts" setup>
import { Icon } from "@iconify/vue";

interface Props {
  icon?: string;
  title: string;
  link: string;
}

defineProps<Props>();
</script>

<template>
  <a
    :href="link"
    class="w-fit group/links mr-4 flex items-end border-b-2 transition-colors duration-300 hover:border-accent hover:text-accent"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon v-if="icon" :icon="icon!" class="text-3xl" />
    <span
      >{{ title }}
      <Icon
        class="transition-transform inline-block group-hover/links:translate-x-0.5 group-hover/links:-translate-y-0.5"
        icon="heroicons:arrow-up-right"
    /></span>
  </a>
</template>
