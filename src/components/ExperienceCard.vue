<script lang="ts" setup>
import SkillChip from "@/components/SkillChip.vue";
import { useLocaleStore } from "@/stores/localeStore";

interface Props {
  experienceTitle: string;
  company: string;
  description: string;
  skills: string[];
  startingDate: string;
  endDate: string;
}

const { experienceTitle, company, description, startingDate, endDate, skills } = defineProps<Props>();

const { getMessage } = useLocaleStore();
</script>

<template>
  <div class="my-8">
    <div class="w-full flex flex-col items-center mb-3 md:flex-row md:justify-between">
      <span class="font-semibold text-foregroundDeep">{{ startingDate }} - {{ endDate }}</span>
      <span class="font-semibold text-foregroundDeep">{{ experienceTitle }} @ {{ company }}</span>
    </div>
    <p class="text-base/7">{{ description }}</p>
    <span class="mt-3 mb-1 inline-block">{{ getMessage("experienceView.developedSkills") }}</span>
    <div class="flex flex-wrap justify-center md:justify-normal">
      <SkillChip v-for="(skill, index) in skills" :key="index" :skill-name="skill" />
    </div>
  </div>
</template>

<style scoped></style>
