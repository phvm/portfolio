<script lang="ts" setup>
import PageTitle from "@/components/PageTitle.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import { experienceList } from "@/constants";
</script>

<template>
  <main class="px-7 py-10 mx-auto max-w-3xl">
    <PageTitle title="My history" />
    <WorkExperience
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
</template>

<style scoped></style>
