<script lang="ts" setup>
import SkillChip from "@/components/SkillChip.vue";

interface Props {
  experienceTitle: string;
  company: string;
  description: string;
  skills: string[];
  startingDate: string;
  endDate: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="group flex flex-col items-center justify-center rounded my-3 py-4 shadow border-accent md:items-start md:flex-row hover:bg-elevation hover:shadow-lg hover:-translate-x-1 hover:border-t-[1px] hover:-translate-y-1 transition-all"
  >
    <span class="w-1/3 text-center md:text-right group-hover:text-accent group-hover:font-bold"
      >{{ props.startingDate }} - {{ props.endDate }}</span
    >
    <div class="px-8 md:pl-4 md:pr-6 md:w-2/3">
      <span class="text-center w-full inline-block md:text-left group-hover:text-accent group-hover:font-bold">{{
        `${experienceTitle} - ${company}`
      }}</span>
      <p class="my-2">{{ description }}</p>
      <div class="flex flex-wrap">
        <SkillChip v-for="(skill, index) in skills" :key="index" :skill-name="skill" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
