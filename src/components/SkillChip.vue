<script lang="ts" setup>
interface Props {
  skillName: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="w-fit m-0.5 py-0.5 px-2 rounded-lg bg-accent">
    <span>{{ props.skillName }}</span>
  </div>
</template>

<style scoped></style>
