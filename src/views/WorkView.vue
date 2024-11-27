<template>
  <div class="flex flex-col pt-4 justify-center md:justify-end md:flex-row lg:pr-52">
    <aside class="flex flex-col justify-center items-center p-2 md:w-1/4 lg:fixed lg:left-20">
      <h2>Pedro Moura</h2>
      <h3>Front-end Developer</h3>
      <p class="text-center">I've worked with some different teams building responsive, accessible interfaces.</p>
    </aside>
    <main class="flex flex-col justify-center md:p-10 md:w-3/4 lg:w-2/5">
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
import { experienceList } from "@/constants";
</script>

<style scoped></style>
