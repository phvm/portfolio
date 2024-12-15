<script lang="ts" setup>
const { title, centralized } = defineProps<{ title: string; centralized?: boolean }>();
</script>

<template>
  <h1
    :class="{ 'text-center': centralized }"
    class="text-xl text-foregroundDeeper font-bold text-left mb-8 md:text-4xl"
  >
    {{ title }}
  </h1>
</template>
