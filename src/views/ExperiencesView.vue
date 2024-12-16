<script lang="ts" setup>
import PageTitle from "@/components/PageTitle.vue";
import WorkExperience from "@/components/ExperienceCard.vue";
import { experienceList } from "@/constants";
import { useLocaleStore } from "@/stores/localeStore";

const { getMessage } = useLocaleStore();
</script>

<template>
  <main class="px-7 py-5 mx-auto max-w-3xl">
    <PageTitle :title="getMessage('experienceView.title')" />
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
