<template>
  <RouterLink :to="props.link" class="px-1 mx-1">
    <button type="button">{{ props.name }}</button>
  </RouterLink>
</template>

<script setup lang="ts">
import type { PagesNavbarHeader } from '../types/componentTypes';
import { RouterLink } from 'vue-router';

const props = defineProps<PagesNavbarHeader>();
</script>

<style scoped></style>
