<script lang="ts" setup>
import PageTitle from "@/components/PageTitle.vue";
import WorkExperience from "@/components/ExperienceCard.vue";
import { experienceList } from "@/constants";
import { useIntlStore } from "@/stores/useIntlStore";

const store = useIntlStore();
</script>

<template>
  <main class="px-7 py-5 mx-auto max-w-3xl">
    <PageTitle :title="store.getMessage('experienceView.title')" />
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
