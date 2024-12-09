<script lang="ts" setup>
interface Props {
  skillName: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="w-fit m-0.5 py-0.5 px-2 font-medium rounded-lg bg-accent text-accentForeground transition-all hover:shadow hover:px-3 hover:cursor-default"
  >
    <span>{{ props.skillName }}</span>
  </div>
</template>

<style scoped></style>
