<script lang="ts" setup>
import { RouterLink } from "vue-router";

interface Props {
  link: string;
  text: string;
}

const props = defineProps<Props>();
</script>

<template>
  <RouterLink :to="props.link" class="p-1 hover:underline">{{ props.text }}</RouterLink>
</template>
