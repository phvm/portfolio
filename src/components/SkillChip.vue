<script lang="ts" setup>
interface Props {
  skillName: string;
}

const props = defineProps<Props>();
</script>

<template>
  <span
    class="w-fit m-0.5 py-0.5 px-2 font-medium rounded-lg bg-foregroundDeep text-background transition-all hover:shadow hover:px-3 hover:cursor-default hover:bg-foregroundDeeper"
    >{{ props.skillName }}</span
  >
</template>

<style scoped></style>
