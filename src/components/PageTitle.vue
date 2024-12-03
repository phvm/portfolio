<script lang="ts" setup>
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <h1 class="text-xl font-bold text-left mb-3 md:text-4xl">{{ title }}</h1>
</template>
