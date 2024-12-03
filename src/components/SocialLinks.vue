<script lang="ts" setup>
import { Icon } from "@iconify/vue";

interface Props {
  icon: string;
  title: string;
}

const { icon, title } = defineProps<Props>();
</script>

<template>
  <a
    class="mr-4 flex items-end border-b-2 transition-colors duration-300 hover:border-accent"
    href="https://github.com/phvm"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon :icon="icon" class="text-3xl" />
    <span>{{ title }}</span>
  </a>
</template>

<style scoped></style>
