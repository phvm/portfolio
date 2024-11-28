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
    class="transition-all group max-w-[550px] flex flex-col items-center border-t-[1px] border-background justify-center rounded m-3 py-4 shadow hover:border-accent hover:bg-elevation hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 md:items-start md:flex-row"
  >
    <span class="w-1/3 min-w-40 text-center md:text-right group-hover:text-accent group-hover:font-bold"
      >{{ props.startingDate }} - {{ props.endDate }}</span
    >
    <div class="px-8 md:w-2/3">
      <span class="text-center w-full inline-block md:text-left group-hover:text-accent group-hover:font-bold">{{
        `${experienceTitle} - ${company}`
      }}</span>
      <p class="my-4">{{ description }}</p>
      <div class="flex flex-wrap justify-center md:justify-normal">
        <SkillChip v-for="(skill, index) in skills" :key="index" :skill-name="skill" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
