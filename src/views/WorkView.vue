<template>
    <aside
      class="transition-all max-w-md h-3/4 border-background border-[1px] ease-in flex flex-col hover:border-accent bg-elevation rounded-lg justify-center items-center p-4 md:w-1/3 md:top-14 md:sticky"
    >
      <p class="text-center">
        Ever since I started my journey 3 years ago, I've worked with wonderful developers to build a vast variety of
        systems, from data visualization tools to classroom allocation scheduler.
      </p>
      <span class="text-accent mt-4">Languages I speak:</span>
      <p v-for="(language, index) in resume.languages" :key="index">{{ language.name }} - {{ language.level }}</p>
      <spam class="text-accent mt-4">Developer Tools:</spam>
      <p v-for="(devTool, index) in resume.devTools" :key="index">{{ devTool }}</p>
      <span class="text-accent mt-4">Technologies I'm confident with:</span>
      <p v-for="(technology, index) in resume.technologies" :key="index">{{ technology }}</p>
    </aside>
    <main class="flex flex-col justify-center items-center md:w-3/5 xl:p-10 lg:items-start">
      <ExperienceCard
        v-for="(experience, index) in experienceList"
        :key="index"
        :company="experience.company"
        :description="experience.description"
        :end-date="experience.endDate"
        :experience-title="experience.experienceTitle"
        :skills="experience.skills"
        :starting-date="experience.startingDate"
      />
    </main>
  </div>
</template>

<script lang="ts" setup>
import ExperienceCard from "@/components/ExperienceCard.vue";
import { experienceList, resume } from "@/constants";
</script>

<style scoped></style>
