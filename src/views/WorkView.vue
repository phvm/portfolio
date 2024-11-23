<template>
  <div class="flex flex-col h-screen md:flex-row">
    <aside class="w-1/2 flex flex-col justify-center items-center">
      <h2>Pedro Moura</h2>
      <h3>Front-end Developer</h3>
      <p>I've worked with some different teams building responsive, accessible interfaces.</p>
    </aside>
    <main class="w-1/2">
      <ExperienceCard
        v-for="(experience, index) in experienceList"
        :key="index"
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
