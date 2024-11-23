<script lang="ts" setup>
import SkillChip from "@/components/SkillChip.vue";

interface Props {
  experienceTitle: string;
  description: string;
  skills: string[];
  startingDate: string;
  endDate: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex justify-center px-8 shadow">
    <span class="w-1/2 text-right">{{ props.startingDate }} - {{ props.endDate }}</span>
    <div class="px-4">
      <span>{{ experienceTitle }}</span>
      <p>{{ description }}</p>
      <div class="flex flex-wrap">
        <SkillChip v-for="(skill, index) in skills" :key="index" :skill-name="skill" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
